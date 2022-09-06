// Style Component
import styles from "./Add.module.scss";

// State Management
import { useAllState } from "../../UserContext";

// Next Component
import Image from "next/image";
const Add = () => {

  const { showAddModal, setShowAddModal } = useAllState();

  if (showAddModal)
    return (
      <>
      <section className={styles.main}>
        <div className={styles.closeModal}>
          <Image src="/../../images/Vector-2.svg" alt="zarbdar" width={18} height={18} />
        </div>

        <hr className={styles.hrLine} />

<div>
  <p>Name</p>
</div>

        
      </section>
       
      </>
    );
  return <></>;
};

export default Add;
