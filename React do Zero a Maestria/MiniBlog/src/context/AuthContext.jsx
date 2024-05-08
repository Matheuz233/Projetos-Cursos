import { useContext, createContext } from "react";

const AuthContext = createContext();

// Transmitindo Dados do Usuário (a autenticação do usuário)
export function AuthProvider({ children, value }) {
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuthValuse() {
  return useContext(AuthContext);
}
