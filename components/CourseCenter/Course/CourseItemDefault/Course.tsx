import React from "react";
import Image from "next/image";
import styles from "./Course.module.scss";
import { courseImage2 } from "@/data/imags";
export default function Course() {
  return (
    <div className={styles.course}>
      <Image
        src={courseImage2}
        width={320}
        height={197}
        alt="课程图片"
        title="高中英语基础课程"
      />
      <div className={styles.course_title}>高中英语基础课程</div>
      <div className={styles.course_des}>
        涵盖的内容包括英文单字词汇、文发音、听力、会话、阅读以及学习...
      </div>
      <div className={styles.course_info}>
        <span>￥168</span>
        <span>20学时</span>
      </div>
    </div>
  );
}
