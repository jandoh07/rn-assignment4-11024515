import React, { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  const value = {
    email,
    name,
    setEmail,
    setName,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
