import * as Yup from "yup";

export type ContactSubmitForm = {
    document: string;
    first_name: string;
    last_name: string;
    email: string;
    phone: string;
    city: string;
    reason:string;
    message:string;
    recaptcha_response: string;
};

export const ContactResetValue : any = {
    document: "",
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    city: "",
    reason: "",
    message: "",
    recaptcha_response: "",
};


export const contactValidationSchema = Yup.object().shape({
    document: Yup.number()
        .required('Numero de documento requerido')
        .max(9999999999, 'Documento maximo de 10 digitos')
        .typeError('Docuemento es invalido'),

    cell_phone: Yup.number()
        .required('Numero de telefono requerido')
        .max(9999999999, 'Numero maximo de 10 digitos')
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
