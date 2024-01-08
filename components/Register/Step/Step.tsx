/**注册步骤条 */
import React, { ReactNode } from "react";
import styles from "./Step.module.scss";
interface setpProps {
  step: number;
}
export default function StepProgress(props: setpProps) {
  const step = props.step;
  return (
    <div className={styles.container}>
      <div className={`${styles.step}`}>
        <div className={`${styles.circle} ${styles.active}`}>
          <span>1</span>
        </div>
        <h5 className={`${styles.text} ${styles.text_active}`}>注册信息</h5>
        <div className={`${styles.dots} ${styles.dots_active}`}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className={`${styles.circle} ${step >= 2 && styles.active}`}>
          <span>2</span>
        </div>
        <h5 className={`${styles.text} ${step >= 2 && styles.text_active}`}>
          个人信息
        </h5>
        <div className={`${styles.dots} ${step >= 2 && styles.dots_active}`}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className={`${styles.circle} ${step == 3 && styles.active}`}>
          <span>3</span>
        </div>
        <h5 className={`${styles.text} ${step == 3 && styles.text_active}`}>
          完成注册
        </h5>
      </div>
    </div>
  );
}
