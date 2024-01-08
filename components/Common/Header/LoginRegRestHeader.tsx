/**登录注册找回密码头部 */
import React from "react";
import Image from "next/image";
import styles from "./LoginRegRestHeader.module.scss";
import { homeiIconImage, teacherIconImage, adminIconImage } from "@/data/imags";

export default function LoginRegRestHeader() {
  return (
    <div className={styles.container}>
      <div>
        <Image src={homeiIconImage} alt="HOMEICON" />
        <span>返回首页</span>
      </div>
      <div>
        <Image src={teacherIconImage} alt="TEACHERICON" />
        <span>教师登录</span>
      </div>
      <div>
        <Image src={adminIconImage} alt="ADMINICON" />
        <span>管理员登录</span>
      </div>
    </div>
  );
}
