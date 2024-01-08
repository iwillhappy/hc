import React from "react";
import styles from "./LeftImg.module.scss";
import Swipper from "./Swipper";

export default function LeftImg() {
  return (
    <>
      <div className={styles.left_swipper}>
        <Swipper />
      </div>
      <div className={styles.news_list}>
        <div>
          <a href="#">手动阀懂法守法多发点发生</a>
        </div>

        <div className={styles.split_line}></div>
        <div>
          <a href="#">fgsfgsdsgsdgs</a>
        </div>
      </div>
    </>
  );
}
