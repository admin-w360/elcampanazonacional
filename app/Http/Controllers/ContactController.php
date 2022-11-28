<?php

namespace App\Http\Controllers;

use App\Http\Requests\ContactRequest;
use App\Mail\ContactMail;
use App\Traits\HasResponseJson;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Mail;

class ContactController extends Controller
{

    use HasResponseJson;

    public function __invoke(ContactRequest $request): JsonResponse
    {
        try {
            Mail::to('support@mail.support-w360.ladesk.com')->send(new ContactMail($request->all()));
            return $this->success("message send successful");
        } catch (\Exception $e){
            return $this->error($e->getMessage());
        }
    }
}
