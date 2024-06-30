import { useAuth0 } from "@auth0/auth0-react";
import { useMutation } from "react-query";

// to handle the backend request
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL; //deploy purpose
//easy to change the backend address

type createUserType = {
  auth0Id: String;
  email: String;
};
export const useCreateUser = () => {
  const { getAccessTokenSilently} = useAuth0();

  const createUserReq = async (user: createUserType) => {
    const token = await getAccessTokenSilently();
    const res = await fetch(`${API_BASE_URL}/api/my/user`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    if (!res.ok) {
      throw new Error("Failed to create user");
    }
  };

  const {
    mutateAsync: createUser,
    isLoading,
    isError,
    isSuccess,
  } = useMutation(createUserReq);

  return {
    createUser,
    isLoading,
    isError,
    isSuccess,
  };
};
