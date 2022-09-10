// Style Component
import styles from "./Add.module.scss";

// State Management
import { useAllState } from "../../context/UserContext";

// Next Component
import Image from "next/image";

// React Component
import { useState } from "react";

const Add = () => {
  const { showAddModal, setShowAddModal, setData, data } = useAllState();
  const [newProfileData, setNewProfileData] = useState();
  const [showHidePass, setShowHidePass] = useState(true);

  function handleUrl(e) {
    const id = Math.floor(Math.random() * 100);
    setNewProfileData({ ...newProfileData, id: id, url: e.target.value });
  }

  function handleProfileData() {
    const arr = [...data];

    if (newProfileData)
      return arr.push(newProfileData), setShowAddModal(false), setData(arr);
    else alert("error");
  }

  if (showAddModal)
    return (
      <>
        <section className={styles.main}>
          <div
            dir="rtl"
            onClick={() => setShowAddModal(false)}
            className={styles.closeModal}
          >
            <Image
              src="/../../images/Vector-2.svg"
              alt="zarbdar"
              width={18}
              height={18}
            />
          </div>

          <hr className={styles.hrLine} />

          <div className={styles.inputContainer}>
            <p>Name</p>
            <input
              className={styles.input}
              type="text"
              placeholder="Name"
              onChange={(e) =>
                setNewProfileData({ ...newProfileData, name: e.target.value })
              }
            />
          </div>
          <div className={styles.inputContainer}>
            <p>User</p>
            <input
              className={styles.input}
              type="text"
              autoComplete="off"
              placeholder="@Hfd34"
              onChange={(e) =>
                setNewProfileData({
                  ...newProfileData,
                  username: e.target.value,
                })
              }
            />
          </div>
          <div className={styles.inputContainer}>
            <p onClick={() => setShowHidePass(!showHidePass)}>Password</p>
            <input
              autoComplete="new-password"
              className={styles.passInput}
              type={showHidePass ? "password" : "text"}
              placeholder="********"
              onChange={(e) =>
                setNewProfileData({
                  ...newProfileData,
                  password: e.target.value,
                })
              }
            />
          </div>
          <div className={styles.inputContainer}>
            <p>URL</p>
            <input
              className={styles.input}
              type="text"
              placeholder="URL"
              onChange={handleUrl}
            />
          </div>

          <button
            dir="rtl"
            onClick={(e) => handleProfileData(e)}
            className={styles.btn}
          >
            ok
          </button>
        </section>
      </>
    );
};

export default Add;
