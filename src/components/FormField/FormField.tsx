import { FormFields } from "@/types/Data/Data";
import React from "react";


const FormField: React.FC<FormFields> = ({
  type,
  placeholder,
  label,
  name,
  register,
  error,
  valueAsNumber,
}) => (
  <div className="flex flex-col items-start w-full gap-2 mb-2">
    <label htmlFor={name} className="text-text-light-600 dark:text-text-dark-600 font-archivo text-subheading3 font-semibold">
      {label}
    </label>
    
    <input
      type={type}
      placeholder={placeholder}
      required
      {...register(name, { valueAsNumber })}
      className={`placeholder:font-archivo placeholder:text-body5 font-archivo text-body5 w-full py-2 px-3 outline-none rounded-lg text-text-light-600 dark:text-text-dark-600 dark:bg-accent-dark-500 ${
        error ? "border-red-500" : ""
      }`}
    />
    {error && <span className="text-red-500 text-xs italic">{error.message}</span>}
  </div>
);

export default FormField;
