// Next Component
import Image from "next/image";
import Link from "next/link";

// Style Component
import styles from "./ProfileDetail.module.scss";

// State management
import { useAllState } from "../../UserContext";

const ProfileDetail = () => {
  const { userProfile } = useAllState();

  if (userProfile)
    return (
      <div className={styles.profileMain}>
        <div className={styles.profileContainer}>
          <p>User</p>
          <p className={styles.centerTagInJustify}>{userProfile.username} </p>
          <Image
            src="/../../images/ep_copy-document.svg"
            alt="copy"
            width={24}
            height={24}
          />
        </div>
        <div className={styles.profileContainer}>
          <p> Password </p>
          <p className={styles.centerTagInJustify}> {userProfile.password} </p>
          <div>
            <Image
              src="/../../images/ep_copy-document.svg"
              alt="copy"
              width={24}
              height={24}
            />
          </div>
        </div>

        <div className={styles.profileContainer}>
          <p>URL </p>
          <Link href={userProfile.url }>
            <a className={styles.centerTagInJustify}> {userProfile.url} </a>
          </Link>
          <Image
            src="/../../images/ep_copy-document.svg"
            alt="copy"
            width={24}
            height={24}
          />
        </div>
      </div>
    );
};

export default ProfileDetail;
