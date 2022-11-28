import React from "react";
import {FloatingLabel, Form, FormControl, FormLabel} from "react-bootstrap";
import {
    Control,
    Controller,
    RegisterOptions,
    /*   EventType, */
} from "react-hook-form";


interface Props {
    name: string;
    control: Control<any, object>;
    label: string
    defaultValue: string
    readOnly?: boolean;
    placeHolder?: string
    errorMessage?: string;
    rules?: RegisterOptions;
}


export const TextArea: React.FC<Props> = ({
                                               name,
                                               control,
                                               defaultValue,
                                               readOnly = false,
                                               label,
                                               placeHolder = label,
                                               errorMessage,
                                              rules,
                                           }) => {
    return (
        <Controller
            name={name}
            control={control}
            defaultValue={defaultValue}
            rules={rules}
            render={({ field }) => (
                 <Form.Group  className={"rounded-pill" }  >
                         <FormLabel className={'mb-1'} htmlFor={"outlined-adornment-"+name}  id={"outlined-adornment-label-"+name}>
                             {label}
                         </FormLabel>
                         <Form.Control
                             {...field}
                             id={"outlined-adornment-"+name}
                             name={name}
                             as="textarea"
                             style={{ height: '100px' }}
                             placeholder={placeHolder}
                             isInvalid={!!errorMessage}
                             readOnly={readOnly}
                         />
                     {errorMessage && (
                         <FormControl.Feedback  type="invalid" id={"standard-weight-helper-text-"+name}>
                             {errorMessage}
                         </FormControl.Feedback>
                     )}
                 </Form.Group>
           )}
        />
    );
}
