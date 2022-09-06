import { createContext, useContext, useState } from "react";

const UserContext = createContext();

const UserContextProvider = ({ children }) => {
  const [showModal, setShowModal] = useState(false);
  const [userProfile, setUserProfile] = useState({});
  const [data, setData] = useState([
    {
      id: 1,
      name: "google",
      password: "$3%356!de",
      username: "g_goole",
      url: "www.google.com",
    },
    {
      id: 2,
      name: "google",
      password: "$3%356!de",
      username: "g_goole",
      url: "www.google.com",
    },
  ]);

  return (
    <UserContext.Provider
      value={{
        data,
        setData,
        showModal,
        setShowModal,
        userProfile,
        setUserProfile,
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
