"use client";
import { useMutation } from "@tanstack/react-query";
import type { LoginInput } from "../components/login/login.schema";
import { login } from "../api/login";
import { useAuthContext } from "@/providers/AuthProvider";
import { toast } from "sonner";
import { getErrorMessage } from "@/shared/utils/get-error-message";

export const useLogin = () => {
  const { setSession } = useAuthContext();
  return useMutation({
    mutationFn: (data: LoginInput) => login(data),
    onSuccess: (data) => {
      setSession(data.user, data.accessToken);
      toast.success("Login successfull");
    },
    onError: (error) => {
      toast.error(getErrorMessage(error));
    },
  });
};
