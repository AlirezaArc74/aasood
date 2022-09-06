import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";

import styles from "../styles/Home.module.scss";

export default function Home() {
  const [inputPassValue, setInputPassValue] = useState("");

  const route = useRouter()

  const loginHandle = () => {
    
    if (inputPassValue === 'password') return route.push('/list')
  }
  return (
    <>
      <Head>
        <title>Password manager</title>
        <body className={styles.body} />
      </Head>
      <section className={styles.mainContiner}>
        <div className={styles.container}>
          <div className={styles.manContainer}>
            <Image
              src="/images/Ellipse 1.svg"
              alt="man background"
              width={176}
              height={176}
              layout="fixed"
            />
            <div className={styles.man}>
              <Image
                src="/images/Group.svg"
                alt="man pic"
                width={120}
                height={120}
              />
            </div>
          </div>
          <div className={styles.inputContainer}>
            <div className={styles.keyContainer}>
              <Image
                src="/images/carbon_password.svg"
                layout="fixed"
                width={48}
                height={52}
                alt="key"
              />
            </div>

            <input
              onChange={(e) => setInputPassValue(e.target.value)}
              type="password"
              className={styles.loginInput}
            />
          </div>

          <button className={styles.hintBtn}> Hint </button>
        </div>
        <button onClick={() => loginHandle()} className={styles.loginBtn}> Login </button>
      </section>
    </>
  );
}
