import { FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import React, { useState } from "react";
import { Control, Controller, RegisterOptions } from "react-hook-form";

interface Props {
  name: string;
  control: Control<any, object>;
  defaultValue: string;
  label: string;
  rules?: RegisterOptions;
  errorMessage?: string;
}

export const InputPassword: React.FC<Props> = ({
  name,
  control,
  defaultValue,
  rules,
  errorMessage,
  label,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div>
      <Controller
        name={name}
        control={control}
        defaultValue={defaultValue}
        rules={rules}
        render={({ field }) => (
          <FormControl
            className="w-full bg-white"
            variant="outlined"
            size="small"
            error={errorMessage ? true : false}
          >
            <InputLabel htmlFor="outlined-adornment-password" sx={{ fontSize: 14 }}>
              {label}
            </InputLabel>
            <OutlinedInput
              {...field}
              sx={{ fontSize: 14 }}
              id="outlined-adornment-password"
              type={showPassword ? "text" : "password"}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label={label}
            />
          </FormControl>
        )}
      />
      <span className="text-xs text-red-500"> {errorMessage}</span>
    </div>
  );
};
