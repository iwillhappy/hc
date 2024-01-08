import React from "react";
import styles from "./SchoolDistrict.module.scss";

export default function schoolDistrict() {
  return (
    <div className={styles.school_container}>
      <div className={styles.school_container_center}>
        <div className={styles.school_title}>
          <img src="/imgs/active-bg.png" alt="学区入口" />
          <span>学区入口</span>
          <img src="/imgs/tip-icon.png" alt="学区入口" />
          <span>请学员选择相应区域进入</span>
        </div>
        <div className={styles.school_list}>
          <div className={styles.school_item}>
            <div className={styles.icon_container}></div>
            <span>天水</span>
            <div className={styles.next_container}></div>
          </div>
          <div className={styles.school_item}>
            <div className={styles.icon_container}></div>
            <span>甘南</span>
            <div className={styles.next_container}></div>
          </div>
          <div className={styles.school_item}>
            <div className={styles.icon_container}></div>
            <span>楼子县</span>
            <div className={styles.next_container}></div>
          </div>
          <div className={styles.school_item}>
            <div className={styles.icon_container}></div>
            <span>平安市</span>
            <div className={styles.next_container}></div>
          </div>
          <div className={styles.school_item}>
            <div className={styles.icon_container}></div>
            <span>南桥街</span>
            <div className={styles.next_container}></div>
          </div>
          <div className={styles.school_item}>
            <div className={styles.icon_container}></div>
            <span>西南街</span>
            <div className={styles.next_container}></div>
          </div>
          <div className={styles.school_item}>
            <div className={styles.icon_container}></div>
            <span>成华道</span>
            <div className={styles.next_container}></div>
          </div>
          <div className={styles.school_item}>
            <div className={styles.icon_container}></div>
            <span>平凉</span>
            <div className={styles.next_container}></div>
          </div>
        </div>
      </div>
    </div>
  );
}
