// Style Sheet
import styles from "./Profile.module.scss";

// Next Component
import Image from "next/image";

//state management
import { useAllState } from "../../UserContext";
import ProfileDetail from "../prfileDetail/ProfileDetailComponent";
import { useEffect } from "react";

const Profile = () => {
  const {
    showProfileModal,
    setProfileShowModal,
    userProfile,
    setUserProfile,
    data,
    setData,
  } = useAllState();

  const deleteProfile = (id) => {
    const arr = [...data];
    const deleteById = arr.findIndex((obj) => obj.id == id)
    arr.splice(deleteById, 1);
    setData(arr);

    const obj = { ...userProfile };
    for (const key in obj) {
      delete obj[key];
    }
    setUserProfile(obj);
    setProfileShowModal(!showProfileModal);
  };

  if (userProfile)
    return (
      <>
        <section className={styles.main}>
          <div className={styles.nameHeader}>
            <Image
              src="/../../images/EllipseBigger-2.svg"
              alt="circle"
              width={64}
              height={64}
            />
            <h1 className={styles.name} onClick={() => setShowModal(false)}>
              {userProfile.name}
            </h1>

            <div
              onClick={() => setProfileShowModal(false)}
              className={styles.close}
            >
              <Image
                src="/../../images/Vector-2.svg"
                alt="zarbdar"
                height={16}
                width={16}
              />
            </div>
          </div>

          <div className={styles.binAndPenContainer}>
            <div className={styles.binAndPenCircle}>
              <Image
                src="/../../images/pen.svg"
                alt="bin"
                height={18}
                width={18}
              />
            </div>
            <div className={styles.binAndPenCircle}>
              <div onClick={() => deleteProfile(userProfile.id)}>
                <Image
                  src="/../../images/bin.svg"
                  alt="pen"
                  height={18}
                  width={18}
                />
              </div>
            </div>
          </div>

          <hr className={styles.hrLine} />

          <ProfileDetail />
        </section>
      </>
    );
};

export default Profile;
