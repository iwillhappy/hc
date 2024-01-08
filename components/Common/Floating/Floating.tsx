import React, { useEffect, useState } from "react";
import styles from "./Floating.module.scss";
export default function FloatingContainer() {
  const [isShowFloatView, setIsShowFloatView] = useState(false);
  const [isShowKefu, setIsShowKefu] = useState(false);
  const onScrollHandler = (e: Event) => {
    let scrollTop =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop;
    let browserHeight = window.outerHeight;
    if (scrollTop > browserHeight - 500) {
      setIsShowFloatView(true);
    } else {
      setIsShowFloatView(false);
    }
  };
  /**返回顶部 */
  const goTop = () => {
    window.scrollTo({
      top: 0, //回到顶部
      left: 0,
      behavior: "smooth", //smooth 平滑；auto:瞬间
    });
  };
  useEffect(() => {
    window.addEventListener("scroll", onScrollHandler);

    return () => {
      window.removeEventListener("scroll", onScrollHandler);
    };
  }, []);
  return (
    <>
      {isShowFloatView && (
        <div className={styles.float_view} id={styles.flow}>
          <div className={styles.float_item}>
            <img src="/imgs/certificat01.png" alt="" />
            <span>证书查询</span>
          </div>
          <div className={styles.float_line}></div>
          <div className={styles.float_item}>
            <img src="/imgs/car01.png" alt="" />
            <span>购物车</span>
          </div>
          <div className={styles.float_line}></div>
          <div className={styles.float_item}>
            <img src="/imgs/kefu01.png" alt="" />
            <span>帮助中心</span>
          </div>
          <div className={styles.float_line}></div>
          <div className={styles.float_item}>
            <img src="/imgs/phone01.png" alt="" />
            <span>客服电话</span>
            {isShowKefu && (
              <div className={styles.out_let}>
                <div className={styles.kefu_number}>
                  <img src="/imgs/phone.png" alt="400-850-2155" />
                  <span>400-850-2155</span>
                </div>
                <div className={styles.phone_time}>
                  <span>客服时间</span>
                  <span>07:30 至 19:30</span>
                  <span className={styles.icon}></span>
                </div>
              </div>
            )}
          </div>
          <div className={styles.float_line}></div>
          <div className={styles.float_item} onClick={() => goTop()}>
            <img src="/imgs/top01.png" alt="" />
            <span>返回顶部</span>
          </div>
        </div>
      )}
    </>
  );
}
