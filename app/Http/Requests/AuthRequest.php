<?php

namespace App\Http\Requests;

use App\Traits\HasResponseJson;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Exceptions\HttpResponseException;
use Illuminate\Http\Response;

class AuthRequest  extends FormRequest
{

    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        return [
            'document_type' => 'required|in:CC,CE,PA|max:2',
            'document' => 'required|max:20',
            'accept_term' => 'required',
            'recaptcha_response' => 'required|recaptchav3:level,0.5',
        ];
    }

    /**
     * get messages show
     *
     * @return string[]
     */
    public function messages() {
        return [
            'document_type.required' => 'Tipo de documento es requerido',
            'document_type.in' => 'Tipo de documento es requerido',
            'document.required' => 'Documento es requerido',
            'document.max' => 'Documento maximo de 10 caracteres',
            'recaptcha_response.required' => 'El token recaptcha es requerido',
            'recaptcha_response.recaptchav3' => 'Recaptcha Invalido',
        ];
    }

}
