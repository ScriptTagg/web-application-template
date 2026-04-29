import api from "@/shared/lib/api-client";
import type { LoginInput } from "../components/login/login.schema";
import type { LoginDto } from "../types";
import type { ApiResponse } from "@/shared/types";
import { ApiCustomError } from "@/shared/errors/api-error";

export const login = async (data: LoginInput): Promise<LoginDto> => {
  const response = await api.post<ApiResponse<LoginDto>>("/auth/login", data);
  if (!response.data.success) throw new ApiCustomError(response.data.message, response.data.statusCode);
  return response.data.payload;
};
