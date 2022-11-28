<?php

namespace App\Http\Controllers;

use App\Contracts\UserContract;
use App\Http\Requests\AuthRequest;
use App\Http\Requests\UserRequest;
use Illuminate\Http\Request;

class UserController extends Controller
{

    protected $userContract;

    /**
     * Create a new constructor for this controller
     */
    public function __construct(UserContract $userContract)
    {
        $this->userContract = $userContract;
    }

    /**
     * @param AuthRequest $request
     * @return mixed
     */
    public function login(AuthRequest $request)
    {
        return $this->userContract->login($request);
    }


    /**
     * @param AuthRequest $request
     * @return mixed
     */
    public function register(UserRequest $request)
    {
        return $this->userContract->store($request);
    }


    /**
     * @param AuthRequest $request
     * @return mixed
     */
    public function logout(Request $request)
    {
        return $this->userContract->logout($request);
    }

    /**
     * @return mixed
     */
    public  function download(){
        return $this->userContract->download();
    }

}
