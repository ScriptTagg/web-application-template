import { useMutation } from "@tanstack/react-query";
import type { RegisterInput } from "../components/register/register.schema";
import { register } from "../api/register";
import { toast } from "sonner";

export const useRegister = () => {
  return useMutation({
    mutationFn: (data: RegisterInput) => register(data),
    onSuccess: (data) => {
      console.log("register :", data);
      toast.success("Account created successfully");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
};
