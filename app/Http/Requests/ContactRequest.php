<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ContactRequest extends FormRequest
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
            'recaptcha_response' => 'required|recaptchav3:level,0.5',
            'document' => 'required|max:255',
            'reason' => 'required|max:255',
            'first_name' => 'required|max:255',
            'last_name' => 'required|max:255',
            'email' => 'required|email',
            'cell_phone' => 'required|max:255',
            'city' => 'required|max:255',
            'message' => 'required|max:255'
        ];
    }

    /**
     * get messages show
     *
     * @return string[]
     */
    public function messages() {
        return [
            '*.max' =>  'Campo mayor a 255 caracteres',
            'document.required' => 'Documento es requerido',
            'document.max' => 'Documento maximo 15 caracteres',
            'first_name.required' =>  'Nombre es requerido',
            'last_name.required' =>  'Apellido es requerido',
            'email.required' => 'Email es requerido',
            'city.required' => 'Ciudad es requerida',
            'email.email' => 'Email no Valido',
            'phone.required' => 'Telefono es requerido',
            'reason.required' => 'Motivo es requerido',
            'message.required' => 'Mensaje es requerido'
        ];
    }
}
