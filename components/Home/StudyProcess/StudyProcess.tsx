import React from "react";
import styles from "./StudyProcess.module.scss";

export default function studyProcess() {
  return (
    <div className={styles.process_flow}>
      <div className={styles.flow_container}>
        <div className={styles.flow_item}>
          <span>
            <span>01</span>
            <span>用户注册</span>
          </span>
          <img src="/imgs/step-01.png" alt="用户注册" />
        </div>
        <img src="/imgs/nextimg.png" className={styles.nextimg} alt="下一步" />
        <div className={styles.flow_item}>
          <span>
            <span>02</span>
            <span>选课缴费</span>
          </span>
          <img src="/imgs/step-02.png" alt="选课缴费" />
        </div>
        <img src="/imgs/nextimg.png" className={styles.nextimg} alt="下一步" />
        <div className={styles.flow_item}>
          <span>
            <span>03</span>
            <span>网上学习</span>
          </span>
          <img src="/imgs/step-03.png" alt="网上学习" />
        </div>
        <img src="/imgs/nextimg.png" className={styles.nextimg} alt="下一步" />
        <div className={styles.flow_item}>
          <span>
            <span>04</span>
            <span>在线考试</span>
          </span>
          <img src="/imgs/step-04.png" alt="在线考试" />
        </div>
        <img src="/imgs/nextimg.png" className={styles.nextimg} alt="下一步" />
        <div className={styles.flow_item}>
          <span>
            <span>05</span>
            <span>申请证书</span>
          </span>
          <img src="/imgs/step-05.png" alt="申请证书" />
        </div>
      </div>
    </div>
  );
}
