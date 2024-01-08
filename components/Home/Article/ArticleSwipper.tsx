import React from "react";
import { Carousel } from "@arco-design/web-react";
import "@arco-design/web-react/dist/css/arco.css";
import styles from "./swipper.module.scss";
const imageSrc = [
  "//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/cd7a1aaea8e1c5e3d26fe2591e561798.png~tplv-uwbnlip3yd-webp.webp",
  "//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/6480dbc69be1b5de95010289787d64f1.png~tplv-uwbnlip3yd-webp.webp",
  "//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/0265a04fddbd77a19602a15d9d55d797.png~tplv-uwbnlip3yd-webp.webp",
  "//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/24e0dd27418d2291b65db1b21aa62254.png~tplv-uwbnlip3yd-webp.webp",
];
export default function Swipper() {
  return (
    <Carousel
      autoPlay
      animation="fade"
      showArrow="never"
      indicatorType="line"
      style={{
        width: 656,
        height: 360,
        borderRadius: "10px",
      }}
    >
      {imageSrc.map((src, index) => (
        <div
          key={index}
          style={{ width: "100%", height: "200%", borderRadius: "10px" }}
        >
          <img
            src={src}
            style={{ width: "100%", height: "200%", borderRadius: "10px" }}
          />
        </div>
      ))}
    </Carousel>
  );
}
