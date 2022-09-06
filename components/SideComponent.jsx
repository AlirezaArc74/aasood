// Next Component
import Image from "next/image";

// Style Sheet
import styles from "../styles/Side.module.scss";

// State Management
import { useAllState } from "../UserContext";
import Add from "./AddComponent";

const Side = (props) => {
  const { data } = useAllState();
  console.log(data);

  function renderLiset() {
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
                    <li className={styles.liSide} key={user.id}>
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

        {renderLiset()}

        <Add />
      </section>
    </>
  );
};

export default Side;
