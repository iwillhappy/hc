import React from "react";
import { ScriptProps } from "next/script";
import styles from "./Layout.module.scss";
import HeaderContainer from "@/components/Common/Header/Header";
import FooterContainer from "@/components/Common/Footer/Footer";
import FloatingContainer from "@/components/Common/Floating/Floating";
const Layout: React.FC<ScriptProps> = (props) => {
  return (
    <div className={styles.box_container}>
      <div className={styles.header_container}>
        <HeaderContainer />
      </div>

      {props.children}
      <FooterContainer />
      <FloatingContainer />
    </div>
  );
};
export default Layout;
