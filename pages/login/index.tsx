import React from "react";
import styles from "@/styles/Login/Login.module.scss";
import Image from "next/image";
import { loginImage } from "@/data/imags";
import LoginComponent from "@/components/Login/Login";

export default function Login() {
  return (
    <div className={styles.container}>
      <div className={styles.registerContainer}>
        <Image
          src={loginImage}
          alt="登录图"
          width={539}
          height={472}
          className={styles.register_img}
        />
        <LoginComponent />
      </div>
    </div>
  );
}
