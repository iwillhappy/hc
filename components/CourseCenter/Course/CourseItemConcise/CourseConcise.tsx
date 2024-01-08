import React from "react";
import styles from "./CourseConcise.module.scss";
import Image from "next/image";
import { courseImage2 } from "@/data/imags";
export default function CourseConcise() {
  return (
    <div className={styles.course_item}>
      <span className={styles.tag}>2023</span>
      <Image src={courseImage2} alt="公需课" />
      <div className={styles.courser_title}>
        <span className={`${styles.gongxu} ${styles.zhuanye} ${styles.gongyi}`}>
          公需课
        </span>
        <span>高中英语基础课程高中英语基础课程</span>
      </div>
      <div className={styles.course_info}>
        <div>
          <span>¥168</span>
          <span>/20</span>
          <span>学时</span>
        </div>
        <button>选课</button>
      </div>
    </div>
  );
}
