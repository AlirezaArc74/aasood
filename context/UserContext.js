import { createContext, useContext, useState } from "react";

const UserContext = createContext();

const UserContextProvider = ({ children }) => {
  const [showProfileModal, setProfileShowModal] = useState(false);
  const [userProfile, setUserProfile] = useState({});
  const [showAddModal, setShowAddModal] = useState(false);
  const [data, setData] = useState([
    {
      id: 0,
      name: "yahoo",
      password: "$43@fd%^bc",
      username: "G-GGOOL",
      url: "www.yahoo.com",
    },
    {
      id: 1,
      name: "google",
      password: "$3%356!de",
      username: "g_goole",
      url: "www.google.com",
    },
    {
      id: 0,
      name: "yahoo",
      password: "$43@fd%^bc",
      username: "G-GGOOL",
      url: "www.yahoo.com",
    },
    {
      id: 1,
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
        showProfileModal,
        setProfileShowModal,
        userProfile,
        setUserProfile,
        showAddModal,
        setShowAddModal,
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
