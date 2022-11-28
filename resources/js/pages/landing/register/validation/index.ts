import * as Yup from "yup";


export const userValidationSchema = Yup.object().shape({
    name: Yup.string()
        .required('El campo nombre y apellidos es requerido')
        .typeError('El campo nombre y apellidos es requerido'),
    email: Yup.string().email('Email invalido')
        .required('El campo email es requerido')
        .typeError('El campo email es requerido'),
    address: Yup.string()
        .required('El campo direccion es requerido')
        .typeError('El campo direccion es requerido'),
    phone: Yup.string()
        .matches(/^([8]{0,1}[0-9]{0,9})$/, {
            message: "Celular invalido",
            excludeEmptyString: false,
        })
        .required('El campo celular es requerido')
        .typeError('El campo celular es requerido')
});
