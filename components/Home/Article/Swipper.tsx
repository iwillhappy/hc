import React from "react";
import { Carousel } from "@arco-design/web-react";
import "@arco-design/web-react/dist/css/arco.css";
import styles from "./Swipper.module.scss";
const imageSrc = [
  "//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/cd7a1aaea8e1c5e3d26fe2591e561798.png~tplv-uwbnlip3yd-webp.webp",
  "//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/6480dbc69be1b5de95010289787d64f1.png~tplv-uwbnlip3yd-webp.webp",
  "//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/0265a04fddbd77a19602a15d9d55d797.png~tplv-uwbnlip3yd-webp.webp",
  "//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/24e0dd27418d2291b65db1b21aa62254.png~tplv-uwbnlip3yd-webp.webp",
];
export default function Swipper() {
  return (
    <Carousel style={{ width: "858px", height: "483px", borderRadius: "20px" }}>
      {imageSrc.map((src, index) => (
        <div key={index}>
          <img
            src={src}
            style={{ width: "100%", height: "100%", borderRadius: "20px" }}
          />
          <div className={styles.fixed}>
            <div className={styles.context}>
              <span className={styles.dotNum}>
                <span>{index + 1}</span>/<span>{imageSrc.length}</span>
              </span>
              <span className={styles.text_content}>内容详情</span>
            </div>
          </div>
        </div>
      ))}
    </Carousel>
  );
}
