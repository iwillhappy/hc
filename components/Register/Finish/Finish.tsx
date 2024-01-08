/**注册第一步-注册信息 */
import React, { useState, useRef } from "react";
import Image from "next/image";
import styles from "./Finish.module.scss";
import StepProgress from "@/components/Register/Step/Step";
import { finishImage } from "@/data/imags";
import Link from "next/link";

export default function Finish() {
  return (
    <div className={styles.container}>
      <StepProgress step={3} />
      <form>
        <Image
          src={finishImage}
          alt="恭喜您！注册成功"
          width={259}
          height={152}
        />
        <h5 className={styles.finish_tip}>恭喜您！注册成功</h5>
        <Link href="/login" className={styles.submit}>
          立即登录
        </Link>
      </form>
    </div>
  );
}
