import { FieldError, UseFormRegister } from "react-hook-form";
import { z, ZodType } from "zod";

export type FormData = {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface LoginData {
  email: string;
  password: string;
}

export type SignupData = FormData;

export type FormFields = {
  type: string;
  placeholder: string;
  name: ValidFieldNames;
  label: string;
  register: UseFormRegister<LoginData | SignupData>;
  error: FieldError | undefined;
  valueAsNumber?: boolean;
};

export type ValidFieldNames =
| "username"
| "email"
| "password"
| "confirmPassword";

export const UserLoginSchema: ZodType<LoginData> = z
.object({
  email: z.string().email(),
  password: z
    .string()
    .min(8, { message: "Password is too short" })
    .max(20, { message: "Password is too long" }),
})

export const UserSignupSchema: ZodType<SignupData> = z
.object({
  email: z.string().email(),
  username: z.string(),
  password: z
    .string()
    .min(8, { message: "Password is too short" })
    .max(20, { message: "Password is too long" }),
  confirmPassword: z.string(),
})
.refine((data) => data.password === data.confirmPassword, {
  message: "Passwords do not match",
  path: ["confirmPassword"],
});
