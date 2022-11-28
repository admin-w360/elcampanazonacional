import * as Yup from "yup";


export const loginValidationSchema = Yup.object().shape({

    document_type: Yup.string()
        .required('Tipo documento es requerido')
        .typeError('Tipo documento invalido'),
    document: Yup.string()
        .required('Documeneto de identidad es requerido')
        .typeError('Documeneto invalido'),
    accept_term: Yup.bool(),
    recaptcha_response: Yup.string().required('Recargar la pagina e intente ingresar nuevamente'),
});
