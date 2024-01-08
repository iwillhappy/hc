import React from "react";
import styles from "./ArticleContainer.module.scss";
import LeftImg from "./LeftImg";
import RightImg from "./RightImg";
// import Right from "./right";
export default function Article() {
  return (
    // 通知公告
    <div className={styles.news}>
      <div className={styles.news_container}>
        <div className={styles.news_title}>
          <div className={styles.title_nav}>
            <img src="/imgs/active-bg.png" className={styles.active_bg} />
            <span className={styles.announcement}>通知公告</span>
            <span className={`${styles.announcement} ${styles.law}`}>
              政策法规
            </span>
            <span className={styles.line}></span>
            <span className={styles.hot}>当前热门资讯第一时间发布</span>
            <p className={styles.border_line}></p>
          </div>
          <div className={styles.more_news}>
            <span>查看更多</span>
            <span>{">"}</span>
          </div>
        </div>
        <div className={styles.news_box}>
          {/* <LeftImg /> */}
          <RightImg />
        </div>
      </div>
    </div>
  );
}
