// Next Component
import Image from "next/image";
import { useState } from "react";

// Style Sheet
import styles from "../styles/Side.module.scss";

// State Management
import { useAllState } from "../UserContext";
import Add from "../components/add/AddComponent";
import Profile from "./profile/ProfileComponent";

const Side = (props) => {
  const {
    data,
    showProfileModal,
    setProfileShowModal,
    setUserProfile,
    showAddModal,
    setShowAddModal,
  } = useAllState();

  function handleModal() {
    setShowAddModal(true)
    setProfileShowModal(false)
  }

  const openProfile = (id) => {
    const p = data.findIndex((user) => user.id === id);
    if (p === -1) return null;
    return setProfileShowModal(true), setUserProfile(data[p], setShowAddModal(false));
  };

  function renderList() {
    if (data)
      return (
        <div>
          <h1> Password </h1>
          <ul className={styles.ul}>
            {data.map((user) => {
              return (
                <>
                  <div className={styles.bulletLiContainer}>
                    <Image
                      src="/../images/Ellipse 2.svg"
                      width={24}
                      height={24}
                      alt="bullet"
                    />
                    <li
                      className={styles.liSide}
                      onClick={() => openProfile(user.id)}
                      key={user.id}
                    >
                      {user.name}
                    </li>
                  </div>
                </>
              );
            })}
          </ul>
        </div>
      );
  }
  return (
    <>
      <section className={styles.main}>
        <div className={styles.imgInputContainer}>
          <Image
            src="/../images/Vector.svg"
            width={24}
            height={24}
            alt="zarebin"
          />
          <input
            className={styles.searchInput}
            type="text"
            placeholder="Search"
          />
        </div>

        <hr className={styles.hrLine} />

        {renderList()}

        <button
          onClick={() => handleModal()}
          className={styles.addButton}
        >
          +
        </button>
      </section>

      <section> {showAddModal ? <Add /> : null} </section>

      <section>{showProfileModal ? <Profile /> : null}</section>
    </>
  );
};

export default Side;
