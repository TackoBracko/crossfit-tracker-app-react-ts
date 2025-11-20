/* eslint-disable react-refresh/only-export-components */
import React from "react";
import { useState } from "react";

type UserDataProps = {
  name: string;
  email: string;
  password: string;
  weight: number;
  height: number;
  gender: string;
  birthday: string;
  age: number;
};

type UserContextType = {
  user: UserDataProps | null;
  handleUserData: (data: Partial<UserDataProps>) => void;
};

export const UserDataContext = React.createContext<UserContextType>({
  user: null,
  handleUserData: () => {},
});

export const UserDataProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<UserDataProps | null>(null);

  const handleUserData = (data: Partial<UserDataProps>) => {
    setUser((prev) => ({ ...prev, ...data }));
  };

  return (
    <UserDataContext.Provider value={{ user, handleUserData }}>
      {children}
    </UserDataContext.Provider>
  );
};
