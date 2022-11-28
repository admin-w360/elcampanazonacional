<?php

namespace App\Providers;

use GuzzleHttp\Client;
use Illuminate\Support\ServiceProvider;
use Illuminate\Support\Facades\Validator;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        $this->app->register(RepositoryServiceProvider::class);
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        Validator::extend('recaptchav3', function ($attribute, $value, $parameters, $validator) {
            if (env('APP_DEBUG') === true) return true;
            if (!isset($value) || is_null($value)) return false;
            $url = env('RECAPTCHAV3_VERIFY_URL');
            $secret = env('RECAPTCHAV3_SECRET');
            if(isset($url) && !empty($url)){
                $client = new Client();
                $response = $client->request('GET', $url, [
                    'response' => $value,
                    'secret' => $secret
                ]);
                $json = $response->getBody();
                $recaptcha = json_decode($json);
                if (isset($recaptcha->success) && $recaptcha->success == false) return false;
                if(isset($parameters['level'])){
                    return ($recaptcha->score >= $parameters['level']) ? true : false;
                }else{
                    return ($recaptcha->score >= 0.5) ? true : false;
                }
            }else{
                return true;
            }
        });
    }
}
