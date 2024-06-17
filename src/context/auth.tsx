import { ReactNode, createContext } from "react";

interface ChildrenProvider {
  children: ReactNode;
}

interface Auth {
  logout: () => void;
  isAuthenticated: () => boolean;
  getTaxIdUser: () => string | undefined;
}

export const AuthContext = createContext<Auth>({} as Auth);

export const AuthProvider = ({ children }: ChildrenProvider) => {
  function logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    window.location.href = "/";
  }

  function isAuthenticated() {
    const hasToken = localStorage.getItem("token");

    if (hasToken) {
      return true;
    }

    return false;
  }

  function getTaxIdUser(): string | undefined {
    const taxId = localStorage.getItem("taxId");
    if (!taxId) return undefined;
    return taxId;
  }

  return (
    <AuthContext.Provider value={{ logout, isAuthenticated, getTaxIdUser }}>
      {children}
    </AuthContext.Provider>
  );
};
