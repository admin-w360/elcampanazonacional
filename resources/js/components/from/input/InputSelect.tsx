import React from "react";
import { Control, Controller, RegisterOptions } from "react-hook-form";
import {FormControl, FormGroup, FormLabel, FormSelect, InputGroup} from "react-bootstrap";

export interface SelectOptions {
  value: string;
  label: string;
}

interface Props {
  name: string;
  control: Control<any, object>;
  defaultValue: string;
  label: string;
  rules?: RegisterOptions;
  errorMessage?: string;
  options: SelectOptions[];
}

const InputSelect: React.FC<Props> = ({
  name,
  control,
  defaultValue,
  rules,
  errorMessage,
  label,
  options,
}) => {
  return (
      <Controller
        name={name}
        control={control}
        defaultValue={defaultValue}
        rules={rules}
        render={({ field }) => (
          <FormGroup aria-invalid={!!errorMessage}  >
            <FormLabel className={'mb-1'} htmlFor={"outlined-adornment-"+name}>
              {label}
            </FormLabel>
            <FormSelect
              id={"outlined-adornment-"+name}
              {...field}
              placeholder={label}
              name={name}
              className={"rounded-pill" }
              isInvalid={!!errorMessage}
            >
              {options.map((option, index) => (
                <option value={option.value} key={index}>
                    {option.label}
                </option>
              ))}
            </FormSelect>
              {errorMessage && (
                  <FormControl.Feedback  type="invalid" id={"standard-weight-helper-text-"+name}>
                      {errorMessage}
                  </FormControl.Feedback>
              )}
          </FormGroup>
        )}
      />
  );
};

export default InputSelect;
