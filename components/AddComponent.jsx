// Style Component
import { useState } from "react";
import styles from "../styles/Add.module.scss";

// State Management
import { useAllState } from "../UserContext";

const Add = () => {
  const { showModal, setShowModal } = useAllState();

  if (showModal)
    return (
      <>
       
      </>
    );
  return <></>;
};

export default Add;
