import React, {FC} from "react";
import {FloatingLabel, Form} from "react-bootstrap";
import classNames from "classnames";
import {Control, useController} from "react-hook-form";


interface Props {
    name: string;
    control: Control<any, object>;
    label: string
    defaultValue: string
    readOnly?: boolean;
    placeHolder?: string
    errorMessage?: string;
}


export const TextArea: React.FC<Props> = ({
                                               name,
                                               control,
                                               defaultValue,
                                               readOnly = false,
                                               label,
                                               placeHolder = label,
                                               errorMessage,
                                           }) => {

    const {
        field,
        fieldState
    } = useController({
        name,
        control,
        defaultValue:""
    });

    return (
        <Controller
            name={name}
            control={control}
            defaultValue={defaultValue}
            rules={rules}
            render={({ field }) => (

         <Form.Group  className={classNames("mx-auto mt-3",props.className)}  controlId={name}>
             <FloatingLabel label={required ? "* " + label: label}>
                 <Form.Control
                     name={name}
                     as="textarea"
                     placeholder={placeHolder}
                     style={{ height: '100px' }}
                     onChange={field.onChange}
                     onBlur={field.onBlur}
                     value={field.value}
                     className={fieldState.error ? 'is-invalid' : ''}
                 />
             </FloatingLabel>
             {fieldState.error && <Form.Control.Feedback type="invalid">{fieldState.error.message}</Form.Control.Feedback>}
         </Form.Group>
    );
}
