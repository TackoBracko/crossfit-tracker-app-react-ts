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
  handleUserData: (data: UserDataProps) => void;
};

export const UserDataContext = React.createContext<UserContextType>({
  user: null,
  handleUserData: () => {},
});

export const UserDataProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, handleUserData] = useState<UserDataProps | null>(null);

  return (
    <UserDataContext.Provider value={{ user, handleUserData }}>
      {children}
    </UserDataContext.Provider>
  );
};
