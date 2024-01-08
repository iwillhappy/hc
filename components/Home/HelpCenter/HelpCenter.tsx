import React from "react";
import styles from "./HelpCenter.module.scss";

export default function HelpCenter() {
  return (
    <div className={styles.Helpbox}>
      <div className={styles.HelptopBox}>
        <div className={styles.LeftBox}>
          <img src="/imgs/circle-icon.png" alt="帮助中心" />
          <div>帮助中心</div>
        </div>
        <div className={styles.leftcenterbox}></div>
        <div className={styles.CenterBox}>随时随地帮助您解决问题！</div>
        <div className={styles.more_news}>
          <span>查看更多</span>
          <span>{">"}</span>
        </div>
      </div>
      <div id={styles.HelpbottomBox}>
        <div id={styles.HelpProblem}>
          <div className={styles.HelpproblemTop}></div>
          <div className={styles.HelpproblemCenter}>常见问题</div>
          <div className={styles.HelpproblemBottom}>
            <a href="">
              点击进入&nbsp;
              <div className={styles.enter}></div>
            </a>
          </div>
        </div>
        <div id={styles.HelpProblem}>
          <div
            className={`${styles.HelpproblemTop} ${styles.Electivecourses}`}
          ></div>
          <div className={styles.HelpproblemCenter}>选课说明</div>
          <div className={styles.HelpproblemBottom}>
            <a href="">
              点击进入&nbsp;
              <div className={styles.enter}></div>
            </a>
          </div>
        </div>
        <div id={styles.HelpProblem}>
          <div className={`${styles.HelpproblemTop} ${styles.Process}`}></div>
          <div className={styles.HelpproblemCenter}>学习流程</div>
          <div className={styles.HelpproblemBottom}>
            <a href="">
              点击进入&nbsp;
              <div className={styles.enter}></div>
            </a>
          </div>
        </div>
        <div id={styles.HelpProblem}>
          <div className={`${styles.HelpproblemTop} ${styles.Policy}`}></div>
          <div className={styles.HelpproblemCenter}>政策解读</div>
          <div className={styles.HelpproblemBottom}>
            <a href="">
              点击进入&nbsp;
              <div className={styles.enter}></div>
            </a>
          </div>
        </div>
        <div id={styles.HelpProblem}>
          <div
            className={`${styles.HelpproblemTop} ${styles.Certificat}`}
          ></div>
          <div className={styles.HelpproblemCenter}>证书查询</div>
          <div className={styles.HelpproblemBottom}>
            <a href="">
              点击进入&nbsp;
              <div className={styles.enter}></div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
