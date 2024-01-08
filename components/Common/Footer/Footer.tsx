import React, { useEffect, useState } from "react";
import styles from "./Footer.module.scss";

export default function FooterContainer() {
  return (
    <>
      {/* 底部最大盒子  */}
      <div id={styles.foooterBox}>
        <div id={styles.FriendlyBox}>
          <div id={styles.FriendlyminBox}>
            <div>友情链接：</div>
            <div id={styles.FriendlyLink}>
              <a href="#">中共甘肃省委组织部</a>
              <a href="#">中共甘肃省委组织部</a>
              <a href="#">中共甘肃省委组织部</a>
            </div>
          </div>
        </div>
        <div className={styles.footerminBox}>
          <div className={styles.footerFlex}>
            <div id={styles.footerLogo}>
              <img src="/imgs/logo.png" alt="logo" title="logo" />
            </div>
            <div id={styles.footerText}>
              <div className={styles.footerSponsor}>
                <div>
                  <span>主管单位：甘肃省人力资源和社会保障厅</span>
                </div>
                <div>主办单位：国家专业技术人员继续教育基地 西北师范大学</div>
              </div>
              <div className={styles.footerSponsor}>
                <div>
                  <span> 服务热线：400-6622-891 0931-7701962 </span>
                </div>
                <div>
                  <span> 服务时间：周一至周五 09:00-17:30 </span>
                </div>
              </div>
            </div>

            <div id={styles.footerFilings}>
              <img
                src="/imgs/record-icon.png"
                alt="京ICP备15054294号 京B2-20221664"
                title="foot京ICP备15054294号 京B2-20221664"
              />
              <div>京ICP备15054294号 京B2-20221664</div>
            </div>
          </div>
          <div className={styles.footerFlex} id={styles.footerWx}>
            <div className={styles.footerCode}>
              <div>
                <img
                  src="/imgs/code-icon.png"
                  alt="微信扫码学习"
                  title="微信扫码学习"
                  className={styles.Twodimensionalcode}
                />
              </div>
              <div className={styles.foooterimgtext}>微信扫码学习</div>
            </div>
          </div>
        </div>
      </div>
      {/* 在线客服  */}
      <div id={styles.Customer}>
        <a href="">
          <img src="/imgs/line-kefu.png" alt="客服" />
        </a>
      </div>
    </>
  );
}
