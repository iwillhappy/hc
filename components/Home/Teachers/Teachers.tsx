import React, { useState } from "react";
import styles from "./Teachers.module.scss";
import { teacherList } from "@/data";
import { TeacherType } from "@/types";

export default function Teachers() {
  const [currentIndex, setCurrentIndex] = useState<string | undefined>("0");
  const [currentTeacher, setCurrentTeacher] = useState({
    fullName: teacherList[0].fullName,
    introduction: teacherList[0].introduction,
    title: teacherList[0].title,
  });
  const mouseroverHandler = (teacher: TeacherType) => {
    setCurrentIndex(teacher.id);
    setCurrentTeacher({
      ...currentTeacher,
      introduction: teacher.introduction,
      title: teacher.title,
    });
  };
  return (
    <div className={styles.teacher_container}>
      <div className={styles.teacher_container_center}>
        <div className={styles.news_title}>
          <div className={styles.title_nav}>
            <img src="/imgs/active-bg.png" className={styles.active_bg} />
            <span
              className={`${styles.announcement} ${styles.title_nav_active}`}
            >
              教师推荐
            </span>
            <span className={styles.line}></span>
            <span className={styles.hot}>十年经验优质教师</span>
          </div>
          <div className={styles.more_news}>
            <span>查看更多</span>
            <span>{">"}</span>
          </div>
        </div>
        <div className={styles.teacher_list}>
          {teacherList.map((teacher, index) => (
            <div
              className={`${styles.teacher_item} ${
                currentIndex == teacher.id && styles.hoverd
              }`}
              onMouseOver={() => mouseroverHandler(teacher)}
              key={index}
            >
              <img
                src={teacher.photoUrl}
                alt={teacher.fullName}
                title={teacher.fullName}
                className={styles.teacher_photo}
              />
              <span className={styles.teacher_name}>{teacher.fullName}</span>
              <span className={styles.teacher_desc}>
                {teacher.introduction}
              </span>
            </div>
          ))}
        </div>
        <div className={styles.teacher_desc_container}>
          <div className={styles.left_container}>
            <div className={styles.left_top}>
              <span>{currentTeacher.fullName}</span>
              <span>{currentTeacher.title}</span>
            </div>
            <div className={styles.left_botttom}>
              {currentTeacher.introduction}
            </div>
          </div>
          <div className={styles.right_container}>
            <div className={styles.number}>0{currentIndex}</div>
            <div className={styles.lines}></div>
          </div>
        </div>
      </div>
    </div>
  );
}
