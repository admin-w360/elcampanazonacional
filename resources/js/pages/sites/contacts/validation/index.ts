import * as Yup from "yup";


export const contactValidationSchema = Yup.object().shape({
    document: Yup.string()
        .required('Numero de documento requerido')
        .max(9999999999, 'Documento maximo de 10 digitos')
        .typeError('Docuemento es invalido'),

    cell_phone: Yup.string()
        .required('Numero de telefono requerido')
        .matches(/^([8]{0,1}[0-9]{0,9})$/, {
            message: "Celular invalido",
            excludeEmptyString: false,
        })
        .typeError('Numero de telefono es invalido'),

    first_name: Yup.string()
        .required('Nombres es requerido'),

    last_name: Yup.string()
        .required('Apellidos es requerido'),

    message: Yup.string()
        .required('Mensaje es requerido'),

    city: Yup.string()
        .required('Ciudad es requerido'),

    email: Yup.string()
        .required('Email es requerido')
        .email('Email invalido'),

    reason: Yup.string()
        .required('Motivo es requerido'),

    recaptcha_response: Yup.string().required('El token recaptcha es requerido'),
});
