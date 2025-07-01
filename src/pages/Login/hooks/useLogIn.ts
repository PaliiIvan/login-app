import { mocketFetch } from "../../../utils/helpers";
import type { LoginForm } from "../schema";
import { useNavigate } from "react-router";
import { useCallback, useState } from "react";

export const useLogInRequest = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const handleLogIn = useCallback(
    async (formData: LoginForm) => {
      setIsLoading(true);
      const result = await mocketFetch(
        "https://api.example.com/login",
        formData,
      );
      setIsLoading(false);
      if (result.data.login) {
        console.log(result.data.message);
        navigate("/");
      }
    },
    [navigate],
  );

  return { handleLogIn, isLoading };
};
