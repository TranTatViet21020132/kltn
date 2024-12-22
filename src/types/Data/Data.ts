import { FieldError, UseFormRegister, Path } from "react-hook-form";
import { z, ZodType } from "zod";

export type FormData = {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
};

export type LoginData = Pick<FormData, "email" | "password">;
export type SignupData = Omit<FormData, "username">;

export type FormFields<T extends LoginData | SignupData> = {
  type: string;
  placeholder: string;
  name: Path<T>;
  label: string;
  register: UseFormRegister<T>;
  error: FieldError | undefined;
  valueAsNumber?: boolean;
};

export const UserLoginSchema: ZodType<LoginData> = z.object({
  email: z.string().email(),
  password: z
    .string()
    .min(8, { message: "Password is too short" })
    .max(20, { message: "Password is too long" }),
});

export const UserSignupSchema: ZodType<SignupData> = z
  .object({
    email: z.string().email(),
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