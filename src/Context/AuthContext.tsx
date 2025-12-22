import { useState } from "react";
import React from "react";

type AuthContextProps = {
  isUserLogged: boolean;
  login: () => void;
  logout: () => void;
};

export const AuthContext = React.createContext<AuthContextProps>({
  isUserLogged: false,
  login: () => {},
  logout: () => {},
});

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isUserLogged, setIsUserLogged] = useState<boolean>(true);

  const login = () => {
    setIsUserLogged(true);
  };

  const logout = () => {
    setIsUserLogged(false);
  };

  return (
    <AuthContext.Provider value={{ isUserLogged, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
