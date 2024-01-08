import React, { useState } from "react";
import styles from "@/styles/CoursePage/CoursePage.module.scss";
import bookImage from "@/public/imgs/book.png";
import videoImage from "@/public/imgs/video.png";
import serchIconImage from "@/public/imgs/search-icon.png";
import Image from "next/image";
import { Select } from "@arco-design/web-react";
import Pagination from "@/components/Common/Pagination/Pagination";
import CourseConcise from "@/components/CourseCenter/Course/CourseItemConcise/CourseConcise";

const Option = Select.Option;
const options = ["2023", "2022", "2021", "2020"];
export default function CoursePage() {
  const [hasYear, setHasYear] = useState(true);
  return (
    <div className={styles.coursePage_container}>
      <div
        className={`${styles.course_banner} ${
          hasYear && styles.hasyear_banner
        }`}
      >
        <div className={styles.top_container}>
          <Image src={bookImage} alt="前沿领先 海量高质量专业课程" />
          <div className={styles.search_container}>
            <div className="search_title">
              <Image
                src={videoImage}
                alt="前沿领先 海量高质量专业课程"
                className={styles.video_icon}
              />
              <span className={styles.font_title}>前沿领先</span>
            </div>
            <div className={styles.font_title}>海量高质量专业课</div>
            <div className={styles.search_input_container}>
              <div className={styles.search_input_main}>
                <Select
                  placeholder="选择年份"
                  style={{ width: 133 }}
                  allowClear
                  defaultValue="2023"
                  bordered={false}
                >
                  {options.map((option, index) => (
                    <Option key={option} value={option}>
                      {option}
                    </Option>
                  ))}
                </Select>
                <input
                  type="text"
                  placeholder="请输入需要搜索的内容"
                  className={`${
                    hasYear ? styles.search_input : styles.search_input_noyear
                  }`}
                />
              </div>

              <Image
                src={serchIconImage}
                alt="请输入需要搜索的内容"
                className={styles.search_icon}
              />
            </div>
          </div>
        </div>
        {/* 课程分类 */}
        <div className={styles.course_classes_container}>
          <div className={styles.course_years_container}>
            <span className={`${styles.year}`}>2023年</span>
            <span className={`${styles.year}  `}>2022年</span>
            <span className={`${styles.year} `}>2021年</span>
            <span className={`${styles.year} `}>2020年</span>
            <span
              className={`${styles.year} ${styles.year_active} ${styles.transformed}`}
            >
              2019年
            </span>
          </div>
          <div className={styles.classes_container}>
            <div className={styles.classes_types}>
              <div className={styles.types_title}>课程分类：</div>
              <div className={styles.types_list}>
                <span className={styles.type_actived}>全部</span>
                <span>公需课</span>
                <span>专业课</span>
                <span>公益课</span>
              </div>
            </div>
            <div className={styles.classes_Profession}>
              <div className={styles.types_title}>专业类型：</div>
              <div className={styles.profession_list}>
                <span className={styles.type_actived}>全部</span>
                <span>2023年公需课</span>
                <span>群众文化系列</span>
                <span>律师系列 </span>
                <span>2023年公需课</span>
                <span>群众文化系列</span>
                <span>律师系列 </span>
                <span>2023年公需课</span>
                <span>群众文化系列</span>
                <span>律师系列 </span>
                <span>2023年公需课</span>
                <span>群众文化系列</span>
                <span>律师系列 </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 课程列表 */}
      <div className={styles.course_list_container}>
        <div className={styles.course_list_center}>
          <CourseConcise />
          <CourseConcise />
          <CourseConcise />
          <CourseConcise />
          <CourseConcise />
        </div>
      </div>
      {/* 分页 */}
      <Pagination />
    </div>
  );
}
