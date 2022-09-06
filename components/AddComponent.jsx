// Style Component
import styles from "../styles/Add.module.scss";

const Add = () => {
  return (
    <>
      <button onClick={() => openAddModal()} className={styles.addButton}>
        +
      </button>
    </>
  );
};

export default Add;
