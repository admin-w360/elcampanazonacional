@component('mail::message')
    # Datos User
    # Motivo : {{  $data['reason'] }}
    # Documento : {{  $data['document'] }}
    # Nombre : {{  $data['first_name'] }}
    # Apellidos : {{  $data['last_name'] }}
    # Celular : {{  $data['cell_phone'] }}
    # Ciudad : {{  $data['city'] }}
    # Mensaje : {{ $data['message'] }}
@endcomponent
