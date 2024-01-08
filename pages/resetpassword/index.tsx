/**找回密码页面 */
import React from "react";
import styles from "@/styles/ResetPassword/ResetPassword.module.scss";
import { resetPasswordImage } from "@/data/imags";
import Image from "next/image";
import ResetPasswordComponent from "@/components/ResetPassword/ResetPassword";

export default function ResetPassword() {
  return (
    <div className={styles.container}>
      <div className={styles.registerContainer}>
        <Image
          src={resetPasswordImage}
          alt="密码重置"
          width={539}
          height={472}
          className={styles.register_img}
        />
        <ResetPasswordComponent />
      </div>
    </div>
  );
}
