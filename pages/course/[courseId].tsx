import React, { useState } from "react";
import styles from "@/styles/CourseDetail/CourseDetail.module.scss";
import Image from "next/image";
import Link from "next/link";
import { GetStaticPaths, GetStaticProps } from "next";
import {
  rightIconImage,
  courseImage,
  photoImage,
  downIconImage,
  pdfImage,
  videoImage,
  openIconImage,
  closeIconImage,
  bookIconImage,
  classesIconImage,
} from "@/data/imags";
import RecommendCourseList from "@/components/CourseCenter/RecommendCourse/CourseList";

export default function CourseDetail() {
  //教师介绍和课程介绍按钮开关
  const [isTeacherContent, setIsTeacherContent] = useState(true);
  //介绍中的展开收起开关
  const [isLageHeights, setIsLageHeights] = useState(false);
  const setContent = (v: boolean) => {
    setIsLageHeights(false);
    setIsTeacherContent(v);
  };
  //课时列表展开收起开关
  const [isClassesShown, setIsClassesShown] = useState(false);
  const changeSlide = () => {
    setIsClassesShown(!isClassesShown);
  };

  return (
    <div className={styles.course_detail_container}>
      {/* banner部分  */}
      <div className={styles.banner}>
        <div className={styles.course_tab}>
          <span>课程中心</span>
          <Image src={rightIconImage} alt="课程详情" width={6} height={10} />
          <span>课程详情</span>
        </div>
        <div className={styles.course_info}>
          <Image src={courseImage} alt="课程封面" width={441} height={271} />
          <div className={styles.course_info_container}>
            <div className={styles.course_title}>
              <span>公需课</span>
              <span>高中英语基础教学考试教育</span>
            </div>
            <div className={styles.course_des}>
              <div className={styles.course_des_top}>
                <div className={styles.course_ctype}>
                  <span>专业类型:</span>
                  <span>经济系列</span>
                </div>
                <div className={styles.course_ctype}>
                  <span>年份:</span>
                  <span>2023年</span>
                </div>
              </div>
              <div className={styles.course_ctype}>
                <span>培训时间:</span>
                <span>2020-01-01 至 2031-01-01</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* 选课部分 */}
      <div className={styles.course_select}>
        <div className={styles.select_left}>
          <span>应付金额：</span>
          <span>¥ 186</span>
          <span></span>
          <span>学时</span>
          <span>总共180学时</span>
          <span></span>
          <span>课件</span>
          <span>总共36课件</span>
          <span></span>
          <span>支持课程回放</span>
        </div>
        <button type="button">立即选课</button>
      </div>
      {/* 课程部分 */}
      <div className={styles.course_outlet}>
        <div className={styles.teacher_and_course}>
          {/* 左侧部分 */}
          <div className={styles.teacher_and_course_left}>
            <div className={styles.course_years_container}>
              <span
                className={`${styles.year} ${
                  isTeacherContent && styles.default
                }`}
                onClick={() => setContent(true)}
              >
                授课教师
              </span>
              <span
                className={`${styles.year} ${
                  !isTeacherContent && styles.year_active
                } ${!isTeacherContent && styles.transformed} `}
                onClick={() => setContent(false)}
              >
                课程介绍
              </span>
            </div>
            <div className={styles.classes_container}>
              <div className={styles.teacher_interduce}>
                {isTeacherContent && (
                  <Image src={photoImage} alt="photo" width={90} height={90} />
                )}
                <div
                  className={`${
                    isTeacherContent ? styles.teacher_intr : styles.course_intr
                  }`}
                >
                  <h6>王老师</h6>
                  <p className={`${!isLageHeights && styles.lage_height}`}>
                    擅长英国、香港地区等名校申，对英系教系统了解。指导100余位学生获得世界百香港申，对英系教系统了解。指导100余位学生获得世香港地区等名校申。
                    擅长英国、香港地区等名校申，对英系教系统了解。指导100余位学生获得世界百香港申，对英系教系统了解。指导100余位学生获得世香港地区等名校申。
                    擅长英国、香港地区等名校申，对英系教系统了解。指导100余位学生获得世界百香港申，对英系教系统了解。指导100余位学生获得世香港地区等名校申。
                    擅长英国、香港地区等名校申，对英系教系统了解。指导100余位学生获得世界百香港申，对英系教系统了解。指导100余位学生获得世香港地区等名校申。
                    擅长英国、香港地区等名校申，对英系教系统了解。指导100余位学生获得世界百香港申，对英系教系统了解。指导100余位学生获得世香港地区等名校申。
                    擅长英国、香港地区等名校申，对英系教系统了解。指导100余位学生获得世界百香港申，对英系教系统了解。指导100余位学生获得世香港地区等名校申。
                  </p>
                  {isLageHeights ? (
                    <div>
                      <span onClick={() => setIsLageHeights(false)}>
                        点击收起
                      </span>
                      <Image
                        src={downIconImage}
                        alt="down-icon"
                        width={13}
                        height={7}
                      />
                    </div>
                  ) : (
                    <div>
                      <span onClick={() => setIsLageHeights(true)}>
                        展开全部
                      </span>
                      <Image
                        src={downIconImage}
                        alt="down-icon"
                        width={13}
                        height={7}
                      />
                    </div>
                  )}
                </div>
              </div>
              {/* 课程列表部分 */}
              <div className={styles.course_list_container}>
                <div className={styles.course_list_title}>
                  <div className={styles.title}>课程列表</div>
                  <div className={styles.right}>
                    <Link href="#">
                      查看附件：
                      <Image
                        src={pdfImage}
                        alt="课程附件"
                        width={40}
                        height={32}
                      />
                      公式表格.pdf
                    </Link>
                    <Link href="#">
                      <Image
                        src={pdfImage}
                        alt="课程附件"
                        width={40}
                        height={32}
                      />
                      知识点总结.pdf
                    </Link>
                  </div>
                </div>
                <div
                  className={`${
                    isClassesShown ? styles.course : styles.course_hidden
                  }`}
                >
                  <div className={styles.course_item_box}>
                    <div className={styles.course_left_title}>
                      <Image
                        src={videoImage}
                        alt="VIDEO-ICON"
                        width={83}
                        height={94}
                        className={styles.video_icon}
                      />
                      <h5>第1章 轻松统一日期格式</h5>
                    </div>
                    <div
                      className={styles.course_right_classTime}
                      onClick={() => changeSlide()}
                    >
                      <span>学时 6 </span>
                      <span>{isClassesShown ? "收起" : "展开"}</span>
                      <Image
                        src={isClassesShown ? closeIconImage : openIconImage}
                        alt="VIDEO-ICON"
                        width={isClassesShown ? 14 : 8}
                        height={isClassesShown ? 8 : 14}
                      />
                    </div>
                  </div>
                  {isClassesShown && (
                    <>
                      <div className={styles.course_classes_item}>
                        <div>
                          <Image
                            src={bookIconImage}
                            alt="book-icon"
                            width={31}
                            height={29}
                          />
                          <h5 title="发展数字经济，推进数字产业化和产业数字化（上）">
                            发展数字经济，推进数字产业化和产业数字化（上）
                          </h5>
                        </div>
                        <Image
                          src={classesIconImage}
                          alt="book-icon"
                          width={37}
                          height={38}
                        />
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
          {/* 右侧课程推荐列表 */}
          <RecommendCourseList />
        </div>
      </div>
    </div>
  );
}
// export const getStaticPaths = async () => {
//   // ...
// };
// export const getStaticProps = async (context: any) => {
//   // ...
// };
