import { createContext, useContext, useState } from "react";

const UserContext = createContext();

const UserContextProvider = ({ children }) => {
  const [data, setData] = useState([
    { id: 1, name: "google", password: "$3%356!de" },
    { id: 2, name: "google", password: "$3%356!de" },

  ]);

  return (
    <UserContext.Provider
      value={{
        data,
        setData,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

const useAllState = () => {
  const ctx = useContext(UserContext);
  // if (!ctx) throw new Error("AllState called out of range");
  return ctx;
};

export { UserContextProvider, useAllState };
