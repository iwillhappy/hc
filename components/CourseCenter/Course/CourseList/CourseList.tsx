import React from "react";
import Image from "next/image";
import styles from "./CourseList.module.scss";
import Course from "../CourseItemDefault/Course";
import { activeBgImage } from "@/data/imags";
export default function courseList() {
  return (
    <div className={styles.course_container}>
      <div className={styles.container_box}>
        <div className={styles.news_title}>
          <div className={styles.title_nav}>
            <Image
              src={activeBgImage}
              width={39}
              height={36}
              alt="课程图片"
              title="高中英语基础课程"
              className={styles.active_bg}
            />
            <span
              className={`${styles.announcement} ${styles.title_nav_active}`}
            >
              课程推荐
            </span>
            <span className={styles.line}></span>
            <span className={styles.hot}>优质课程推荐</span>
          </div>
          <div className={styles.more_news}>
            <span>查看更多</span>
            <span>{">"}</span>
          </div>
        </div>
        <div className={styles.course_box}>
          <Course />
          <Course />
          <Course />
          <Course />
        </div>
      </div>
    </div>
  );
}
