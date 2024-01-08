import React from "react";
import styles from "./RightImg.module.scss";
import Swipper from "./ArticleSwipper";

export default function RightImg() {
  return (
    <>
      <div className={styles.left_container_type}>
        <div className={styles.article_item}>
          <div className={styles.article_item_title}>
            <div className={styles.article_item_title_left}>
              <span></span>
              <span>营造识才爱才敬才用才的环境</span>
            </div>
            <span className={styles.article_time}>2022-09-07</span>
          </div>
          <div className={styles.article_content}>
            坚持营造识才爱才敬才用才的环境，应人才之所需，想人才之所想，急人才之所急坚持营造识才爱才敬才用才的环境，应人才之所需应人才之所需，想人才之所想，急人才之所急坚
          </div>
        </div>

        <div className={styles.article_item}>
          <div className={styles.article_item_title}>
            <div className={styles.article_item_title_left}>
              <span></span>
              <span>营造识才爱才敬才用才的环境</span>
            </div>
            <span className={styles.article_time}>2022-09-07</span>
          </div>
          <div className={styles.article_content}>
            坚持营造识才爱才敬才用才的环境，应人才之所需，想人才之所想，急人才之所急坚持营造识才爱才敬才用才的环境，应人才之所需应人才之所需，想人才之所想，急人才之所急坚
          </div>
        </div>

        <div className={styles.article_item}>
          <div className={styles.article_item_title}>
            <div className={styles.article_item_title_left}>
              <span></span>
              <span>营造识才爱才敬才用才的环境</span>
            </div>
            <span className={styles.article_time}>2022-09-07</span>
          </div>
          <div className={styles.article_content}>
            坚持营造识才爱才敬才用才的环境，应人才之所需，想人才之所想，急人才之所急坚持营造识才爱才敬才用才的环境，应人才之所需应人才之所需，想人才之所想，急人才之所急坚
          </div>
        </div>
      </div>

      <div className={styles.zxf}>
        <Swipper />
        <div className={styles.article_item_des}>
          <span>营造识才爱才敬才用才的环境</span>
          <div className={styles.article_time}>2022-09-07</div>
        </div>
        <div className={styles.article_content}>
          坚持营造识才爱才敬才用才的环境，应人才之所需，想人才之所想，急人才之所急坚持营造识才爱才敬才用才的环境，应人才之所需应人才之所需，想人才之所想，急人才之所急坚
        </div>
      </div>
    </>
  );
}
