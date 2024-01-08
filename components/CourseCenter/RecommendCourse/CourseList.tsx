import React from "react";
import styles from "./CourseList.module.scss";
import Image from "next/image";
import { coursPostImage } from "@/data/imags";
export default function RecommendCourseList() {
  return (
    <>
      <div className={styles.course_list_container}>
        <div className={styles.course_list_title_text}>推荐课程</div>
        <div className={styles.course_list_item}>
          <Image src={coursPostImage} width={191} height={117} alt="课程封面" />
          <div className={styles.course_info}>
            <h3 title="金山课程-WPS表格 应用" className={styles.course_title}>
              金山课程-WPS表格 应用
            </h3>
            <span className={styles.course_time}>经济系列丨2023年</span>
            <div>
              <span>¥ 186</span>
              <span>20课时</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
