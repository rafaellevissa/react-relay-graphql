import { AuthContext } from "../context/auth";
import { useContext } from "react";

export function useAuthContext() {
  const context = useContext(AuthContext);
  return context;
}
