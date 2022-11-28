import * as Yup from "yup";


export const CouponVerifyValidationSchema = Yup.object().shape({

    email: Yup.string().email('Email invalido')
        .required('El campo email es requerido')
        .typeError('El campo email es requerido'),

    phone: Yup.string().matches(/^([8]{0,1}[0-9]{0,9})$/, {
        message: "Celular invalido",
        excludeEmptyString: false,
    }).required('El campo email es requerido')
      .typeError('El campo email es requerido')


});
