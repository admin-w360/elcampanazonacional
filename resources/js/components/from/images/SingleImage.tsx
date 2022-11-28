
import React from "react";
import {
  Control,
  Controller,
  RegisterOptions,
/*   EventType, */
} from "react-hook-form";
import {FormControl, FormHelperText, InputLabel, OutlinedInput, TextField} from "@mui/material";

interface Props {
  name: string;
  control: Control<any, object>;
  defaultValue: string;
  label: string;
  rules?: RegisterOptions;
  errorMessage?: string;
  multiline?: boolean;
  rows?: string | number;
}

export const InputText: React.FC<Props> = ({
  name,
  control,
  defaultValue,
  label,
  rules,
  errorMessage,
  multiline = false,
  rows='',
/*   onChangeInput */
}) => {
  return (
      <Controller
          name={name}
          control={control}
          defaultValue={defaultValue}
          rules={rules}
          render={({ field }) => (
              <FormControl fullWidth error={!!errorMessage}>
                  <InputLabel htmlFor={"outlined-adornment-"+name}>{label}</InputLabel>
                  <OutlinedInput
                      {...field}
                      id={"outlined-adornment-"+name}
                      type="email"
                      name={name}
                      label={label}
                      inputProps={{}}
                      multiline={multiline}
                      rows={rows}
                  />
                  {errorMessage && (
                      <FormHelperText error id={"standard-weight-helper-text-"+name}>
                          {errorMessage}
                      </FormHelperText>
                  )}
              </FormControl>
          )}
      />
  );
};
