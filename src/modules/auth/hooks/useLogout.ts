"use client";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { logout } from "../api/logout";
import { useAuthContext } from "@/providers/AuthProvider";
import { queryClient } from "@/shared/lib/query-client";
import { getErrorMessage } from "@/shared/utils/get-error-message";

export const useLogout = () => {
  const { clearSession } = useAuthContext();

  return useMutation({
    mutationFn: logout,
    onSuccess: (_data) => {
      clearSession();
      queryClient.clear();
      toast.success("Logout successful");
    },
    onError: (error) => {
      clearSession();
      queryClient.clear();
      toast.error(getErrorMessage(error));
    },
  });
};
