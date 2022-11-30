
import React from "react";
import {
  Control,
  Controller,
  RegisterOptions,
/*   EventType, */
} from "react-hook-form";
import {FormControl, FormGroup, FormLabel} from "react-bootstrap";
import ReactInputMask from "react-input-mask";

interface Props {
  name: string;
  mask?: string | Array<(string | RegExp)>;
  control: Control<any, object>;
  defaultValue: string;
  label: string;
  type?: string;
  placeholder?: string;
  readOnly?: boolean;
  rules?: RegisterOptions;
  errorMessage?: string;
}

export const InputText: React.FC<Props> = ({
  name,
  control,
  defaultValue,
  type= "text",
  readOnly = false,
  label,
  placeholder = label,
  rules,
  mask,
  errorMessage,
}) => {
  // @ts-ignore
    return (
      <Controller
          name={name}
          control={control}
          defaultValue={defaultValue}
          rules={rules}
          render={({ field }) => (
              <FormGroup aria-invalid={!!errorMessage}   >
                  <FormLabel className={'mb-1'} htmlFor={"outlined-adornment-"+name}>
                      {label}
                  </FormLabel>
                  {!!mask && <ReactInputMask
                      {...field}
                      mask={mask}
                      placeholder={placeholder}
                      readOnly={readOnly}
                  >
                      {/* @ts-ignore */}
                      {(props) => (
                          <FormControl
                              {...props}
                              id={"outlined-adornment-"+name}
                              type={type}
                              name={name}
                              placeholder={placeholder}
                              className={"rounded-pill" }
                              isInvalid={!!errorMessage}
                          />
                      )}
                  </ReactInputMask>}
                  {!mask &&
                  <FormControl
                      {...field}
                      id={"outlined-adornment-"+name}
                      type={type}
                      name={name}
                      placeholder={placeholder}
                      readOnly={readOnly}
                      className={"rounded-pill" }
                      isInvalid={!!errorMessage}
                  />}
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
