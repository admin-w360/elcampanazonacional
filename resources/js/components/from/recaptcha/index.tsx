import React, {FC} from "react";
import {GoogleReCaptcha, GoogleReCaptchaProvider} from "react-google-recaptcha-v3";
import {Control, FieldValues, useController, UseControllerProps, useForm} from "react-hook-form";
import {Form} from "react-bootstrap";
import {FormControlPath} from "@/utils/validations";
import {FieldPath} from "react-hook-form/dist/types";


type InputProps<
    TFieldValues extends FieldValues,
    TName extends FieldPath<TFieldValues>
    > = UseControllerProps<TFieldValues, TName>;

interface IProps {
    name: FormControlPath;
    control: Control;
}

export const ReCaptcha = <
    TFieldValues extends FieldValues,
    TName extends FieldPath<TFieldValues>
    >({
          control,
          name
      }: InputProps<TFieldValues, TName>) => {

    const {
        field,
        fieldState
    } = useController({
        name,
        control,
    });

    const handleChange = (token: string) => {
        field.onChange({
            target: {
                name: name,
                value: token,
            },
        })
    };

    return (
        <GoogleReCaptchaProvider reCaptchaKey="6Lc-sFYcAAAAAIZ-dJAh2HW3d5NhjFLPZCx8hJM_">
            <GoogleReCaptcha
                onVerify={(token) => {
                    handleChange(token);
                }}
            />
            {fieldState.error && <Form.Control.Feedback type="invalid">{fieldState.error.message}</Form.Control.Feedback>}
        </GoogleReCaptchaProvider>
    );
}
