import { useQuery } from "@tanstack/react-query";
import { getCurrentUser } from "../api/me";

export const useMe = () => {
  return useQuery({
    queryKey: ["profile"],
    queryFn: getCurrentUser,
    retry: false,
  });
};
