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
  user: UserDataProps;
  handleUserData: (data: Partial<UserDataProps>) => void;
};

const userData: UserDataProps = {
  name: "",
  email: "",
  password: "",
  weight: 0,
  height: 0,
  gender: "",
  birthday: "",
  age: 0,
};

export const UserDataContext = React.createContext<UserContextType>({
  user: userData,
  handleUserData: () => {},
});

export const UserDataProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<UserDataProps>(userData);

  const handleUserData = (data: Partial<UserDataProps>) => {
    setUser((prev) => ({ ...prev, ...data }));
  };

  return (
    <UserDataContext.Provider value={{ user, handleUserData }}>
      {children}
    </UserDataContext.Provider>
  );
};
