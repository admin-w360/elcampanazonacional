<?php

namespace App\Repositories;

use App\Contracts\UserContract;
use App\Http\Requests\AuthRequest;
use App\Http\Requests\UserRequest;
use App\Mail\CouponMail;
use App\Models\User;
use App\Traits\HasCode;
use App\Traits\HasResponseJson;
use Barryvdh\DomPDF\Facade\Pdf;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Cookie;
use Illuminate\Support\Facades\Mail;

class UserRepository implements UserContract
{

    use HasResponseJson, HasCode;

    /**
     * @param AuthRequest $authRequest
     * @return \Illuminate\Http\JsonResponse
     */
    public function login(AuthRequest $authRequest)
    {
                    $user = User::updateOrCreate([
                        'document' => $authRequest->document,
                        'document_type' => $authRequest->document_type,
                    ],[
                        'document' => $authRequest->document,
                        'document_type' => $authRequest->document_type,
                        'password' => '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi',
                    ]);

                    auth()->loginUsingId($user->id);

                    $tokenResult = $user->createToken('Personal Access Token');

                    // Store the created token
                    $token = $tokenResult->token;

                    // Add a expiration date to the token
                    $token->expires_at = Carbon::now()->addWeeks(1);

                    // Save the token to the user
                    $token->save();


                    $success = $user;

                    if (!empty($user->email) and !empty($user->id)){
                       $coupon = $this->generate($user->id);
                       if(!is_string($coupon) AND !empty($coupon->code)){
                           Mail::to($user)->send(new CouponMail($coupon));
                           $success['coupon_code'] = $coupon->code;
                           $success['coupon_expire_at'] = $coupon->expire_at;
                       }
                    }

                    // Return a JSON object containing the token datas
                    // You may format this object to suit your needs
                    $cookie = $this->getCookie($tokenResult->accessToken);
                    $success['access_token'] = $tokenResult->accessToken;
                    $success['token_type'] = 'Bearer';
                    $success['expires_at'] = Carbon::parse(
                        $tokenResult->token->expires_at
                    )->toDateTimeString();

                    return $this->success('session started successfully', $success)->cookie(
                        $cookie['name'], $cookie['value'],
                        $cookie['minutes'], $cookie['path'],
                        $cookie['domain'], $cookie['secure'],
                        $cookie['httponly']
                    );
    }

    /**
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function logout(Request $request)
    {
        try {
            $user = $request->user();
            if($user) {
                $user->tokens()->delete();
            }
        } catch (\Exception $e) {}
        $cookie = Cookie::forget('_user_token');
        return $this->success('session end successfully')->withCookie($cookie);
    }

    /**
     * @param $token
     * @return array
     */
    private function getCookie($token)
    {
        return [
            'name' => '_user_token',
            'value' => $token,
            'minutes' => 1440,
            'path' => null,
            'domain' => null,
            'secure' => env('APP_ENV') === 'production' ? true : null,
            'httponly' => true,
            'type' => 'customer'
        ];
    }

    /**
     * @param UserRequest $authRequest
     * @return \Illuminate\Http\JsonResponse
     */
    public function store(UserRequest $authRequest)
    {
        if(Auth::check()) {
            $user = Auth::user();
            $ClientIp = isset($_SERVER['HTTP_X_FORWARDED_FOR']) && !empty($_SERVER['HTTP_X_FORWARDED_FOR']) ? $_SERVER['HTTP_X_FORWARDED_FOR'] : $authRequest->getClientIp();
            $authRequest->merge(['ipaddress' => $ClientIp]);
            $user->update($authRequest->all());
            $coupon = $this->generate($user->id);
            if(!is_string($coupon) AND !empty($coupon->code)){
                Mail::to($user)->send(new CouponMail($coupon));
            }
            return $this->success('Coupon registrado con exito', $coupon);
        }else{
            return $this->error('Session caducada', 401);
        }
    }

    /**
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function sendCode(Request $request)
    {
        if(Auth::check()) {
            $user = Auth::user();
            $coupon = $this->forwarded($user->id);
            return $this->success('Coupon registrado con exito', $coupon);
        }else{
            return $this->error('Session caducada', 401);
        }
    }


    /**
     * @return \Illuminate\Http\JsonResponse|\Illuminate\Http\Response
     */
    public function download()
    {
        if(Auth::check()) {
            $user = Auth::user();
            $coupon = $this->forwarded($user->id);
            if(!is_string($coupon) AND !empty($coupon->code)) {
                $pdf = Pdf::loadView('pdf', ['coupon' => $coupon])->setOption(['dpi' => 104, 'defaultFont' => 'sans-serif']);
                return $pdf->download('coupon.pdf');
            }else{
                return $this->error('Coupon caducado '.print_r($coupon, true), 404);
            }
        }else{
            return $this->error('Session caducada', 401);
        }

    }
}
