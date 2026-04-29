import { useMutation } from "@tanstack/react-query";
import type { ForgotPasswordInput } from "../components/forgot-password/forgot-password.schema";
import { forgotPassword } from "../api/forgot-password";
import { toast } from "sonner";

export const useForgotPassword = () => {
  return useMutation({
    mutationFn: (data: ForgotPasswordInput) => forgotPassword(data),
    onSuccess: (data) => {
      console.log("register :", data);
      toast.success("Email sent successfully");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
};
