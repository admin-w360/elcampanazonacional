import React from "react";
import {Control, Controller} from "react-hook-form";
import {FormCheck, FormControl, FormGroup} from "react-bootstrap";
import FormCheckInput, {FormCheckInputProps} from "react-bootstrap/FormCheckInput";
import FormCheckLabel from "react-bootstrap/FormCheckLabel";
import {FormCheckType} from "react-bootstrap/FormCheck";
import {Link} from "react-router-dom";

interface Props {
    name: string;
    typeCheck?: FormCheckType;
    type?: "checkbox" | "radio";
    control: Control<any, object>;
    defaultValue?: boolean;
    label: string;
    errorMessage?: string;
    route?: string;
    required?: boolean
}

const InputCheck: React.FC<Props> = ({
    name,
    route= '#',
    type= 'checkbox',
    required = false,
    control,
    defaultValue,
    label,
    errorMessage,
}) => {
    return (
        <Controller
            name={name}
            control={control}
            defaultValue={defaultValue}
            render={({field, fieldState}) => (
                <FormGroup  aria-invalid={!!errorMessage}>
                    <FormCheck
                        type={type}
                        name={name}
                        label={<div className={"px-3"}><Link to={route} >{required ? <span>*</span> : ""} {label}</Link></div>}
                        onChange={field.onChange}
                        onBlur={field.onBlur}
                        value={field.value}
                        className={"d-flex align-items-center " + (fieldState.error ? 'is-invalid' : '')}
                    />
                    {errorMessage && (
                        <FormControl.Feedback type="invalid" id={"standard-weight-helper-text-"+name}>
                            {errorMessage}
                        </FormControl.Feedback>
                    )}
                </FormGroup>
            )}
        />
    );
};

export default InputCheck;
