import type { ResetPasswordInput } from "../components/reset-password/reset-password.schema";

export type UserRoles = "admin" | "member" | "user";

export type User = {
  id: string;
  username: string;
  email: string;
  roles: UserRoles[];
};

export type LoginDto = {
  user: User;
  accessToken: string;
};

export type RegisterDto = {
  user: User;
};

export type RefreshDto = {
  accessToken: string;
};

/* export type ForgotPasswordDto = {
  email: string;
};
 */

export type ResetPasswordRequest = ResetPasswordInput & { token: string };
