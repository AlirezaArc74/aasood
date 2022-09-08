import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";

import styles from "../styles/Home.module.scss";

export default function Home() {
  const [inputPassValue, setInputPassValue] = useState("");

  const route = useRouter();

  const loginHandle = () => {
    if (inputPassValue === "password") return route.push("/list");
  };
  return (
    <>
      <Head>
        <title>Password manager</title>
        <body className={styles.body} />
      </Head>
      <section className={styles.mainContiner}>
        <div className={styles.container}>
          {/* circle in top of our box */}
          <div className={styles.circle}>
            <Image
              src="/images/Ellipse 1.svg"
              alt="man background"
              width={176}
              height={176}
              layout="fixed"
            />
          </div>

          {/* Man in our Circle */}
          <div className={styles.man}>
            <Image
              src="/images/Group.svg"
              alt="man pic"
              width={120}
              height={120}
            />
          </div>

          {/* Our Input That Accept Password */}
          <div className={styles.inputContainer}>

            {/* Key Image */}
            <div className={styles.keyContainer}>
              <Image
                src="/images/carbon_password.svg"
                layout="fixed"
                width={48}
                height={52}
                alt="key"
              />
            </div>

            {/* Input for Password */}
            <input
              onChange={(e) => setInputPassValue(e.target.value)}
              type="password"
              className={styles.loginInput}
            />
          </div>

          <p className={styles.forgetPassword}>forget password</p>

          <button onClick={() => loginHandle()} className={styles.loginBtn}>
            Login
          </button>
        </div>
        
      </section>
    </>
  );
}
