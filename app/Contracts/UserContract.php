<?php

namespace App\Contracts;

use App\Http\Requests\AuthRequest;
use App\Http\Requests\UserRequest;
use Illuminate\Http\Request;

interface UserContract
{

    public function login(AuthRequest $authRequest); // return user login

    public function store(UserRequest $authRequest); // save user info && sent code for mail

    public function sendCode(Request $authRequest); // forward code for mail and return code to show in react app

    public function logout(Request $request); // logout session user

    public  function  download(); // download pdf

}
