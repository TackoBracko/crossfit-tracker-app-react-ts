//import React from 'react'
import classes from "./Input.module.css";

type InputProps = {
  name: string;
  label?: string;
  placeholder?: string;
  type: string;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string | number;
  error?: string;
  disabled?: boolean;
};

export default function Input({
  name,
  label,
  placeholder,
  type,
  onBlur,
  onChange,
  value,
  error,
}: InputProps) {
  const inputVariationStyle = "";

  return (
    <div>
      {label && <label htmlFor="input">{label}</label>}
      {error && <p className={classes.errorText}>{error}</p>}
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onBlur={onBlur}
        onChange={onChange}
        className={`${classes.inputBase} ${inputVariationStyle}`}
      />
    </div>
  );
}
