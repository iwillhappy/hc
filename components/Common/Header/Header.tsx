import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import styles from "./Header.module.scss";
import { navbar } from "@/data";
import LoginRegRestHeader from "./LoginRegRestHeader";

export default function HeaderContainer() {
  const router = useRouter();
  let currentPath;
  if (
    router.route == "/login" ||
    router.route == "/register" ||
    router.route == "/resetpassword"
  ) {
    //const [currentPath,setCurrentPath] =
    currentPath = true;
  }
  const [isCourseCenterShow, setIsCourseCenterShow] = useState(false);
  const [isCourseShow, setIsCourseShow] = useState(false);
  const [defaultNavIndex, setDefaultNavIndex] = useState(0);
  const [isNavHoverInddex, setIsNavHoverInddex] = useState(-1);
  const [isNavFixed, setIsNavFixed] = useState(false); //

  const handleMouseEnter = (index: number, text: string) => {
    if (text == "课程中心") {
      setIsCourseCenterShow(true);
      setIsCourseShow(true);
    } else {
      setIsCourseShow(false);
      setIsCourseCenterShow(false);
    }

    setIsNavHoverInddex(1);
    setIsNavHoverInddex(index);
  };
  const handleMouseLeave = (index: number, text: string) => {
    if (text == "课程中心") {
      setIsNavHoverInddex(-1);
    }
    isCourseShow && setIsNavHoverInddex(index);
  };
  const mouseoverCourseCenter = () => {
    setIsNavHoverInddex(1);
    setIsCourseShow(true);
  };
  const mouseoutCourseCenter = () => {
    setIsCourseShow(false);
    setIsNavHoverInddex(-1);
  };
  const handleScroll = () => {
    // 处理滚动事件的逻辑
    let scrollTop =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop;
    scrollTop > 100 ? setIsNavFixed(true) : setIsNavFixed(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className={styles.header}>
      {/* 左侧logo图  */}
      <div className={`${styles.nav} ${isNavFixed && styles.nav_fixed}`}>
        <img src="/imgs/logo.png" className={styles.logo} alt="logo" />
        {/* 导航菜单 */}
        {currentPath ? (
          <LoginRegRestHeader />
        ) : (
          <div className={styles.nav_bar}>
            {!isNavFixed && (
              <div className={styles.login}>
                <div className={styles.tell}>
                  <img
                    className={styles.tell_icon}
                    src="/imgs/tell-icon.png"
                    alt="400-100-111"
                    title="400-100-111"
                  />
                  <span className={styles.tell_number}>400-100-111 </span>
                </div>
                <span
                  className={`${styles.btn} ${styles.login_btn} ${styles.btn_actived}`}
                >
                  登录
                </span>
                <span className={`${styles.btn} ${styles.register_btn}`}>
                  注册
                </span>
              </div>
            )}

            <div className={styles.bar}>
              {/* <div className={styles.nav_item}>
              <text>首页</text>
              <img className={styles.active_bg} src="/imgs/active-icon.png" />
            </div> */}
              {navbar.map((nav, index) => (
                <div
                  className={`${styles.nav_item} ${
                    defaultNavIndex == index && styles.nav_default_active
                  }`}
                  key={nav.id}
                  onMouseEnter={() => handleMouseEnter(index, nav.text)}
                  onMouseLeave={() => handleMouseLeave(index, nav.text)}
                >
                  <span>{nav.text}</span>
                  {isNavHoverInddex == index && (
                    <img
                      className={styles.active_bg}
                      src="/imgs/active-icon.png"
                    />
                  )}

                  {nav.isCourse && (
                    <img
                      src="/imgs/dropdown-icon.png"
                      className={styles.droup_down_icon}
                    />
                  )}
                  {nav.isCourse && isCourseShow && (
                    <img
                      src="/imgs/drop-up-arrow.png"
                      className={styles.drop_up_arrow}
                    />
                  )}
                </div>
              ))}

              {/* <div className={styles.nav_item}>
              <text>资讯中心</text>
              <img className={styles.active_bg} src="/imgs/active-icon.png" />
            </div>
            <div className={styles.nav_item}>
              <text>基地介绍</text>
              <img className={styles.active_bg} src="/imgs/active-icon.png" />
            </div>
            <div className={styles.nav_item}>
              <text>证书查询</text>
              <img className={styles.active_bg} src="/imgs/active-icon.png" />
            </div>
            <div className={styles.nav_item}>
              <text>项目概览</text>
              <img className={styles.active_bg} src="/imgs/active-icon.png" />
            </div> */}
              {isNavFixed && (
                <>
                  <span
                    className={`${styles.btn} ${styles.login_btn} ${styles.btn_actived}`}
                  >
                    登录
                  </span>
                  <span className={`${styles.btn} ${styles.register_btn}`}>
                    注册
                  </span>
                </>
              )}
            </div>
          </div>
        )}
      </div>
      {/* 课程中心  */}
      {isCourseShow && (
        <div
          className={`${styles.course_select} ${
            isNavFixed && styles.course_fixed
          }`}
          onMouseOver={() => mouseoverCourseCenter()}
          onMouseOut={() => mouseoutCourseCenter()}
        >
          <div className={styles.course_type}>
            <div className={`${styles.actived} ${styles.course_type_item}`}>
              <text>公需课</text>
              <img
                className={styles.dropdown_icon}
                src="/imgs/drop-down-icon.png"
              />
              <span className={styles.bg_icon}></span>
            </div>
            <div className={styles.course_type_item}>
              <text>专业课</text>
              <img
                className={styles.dropdown_icon}
                src="/imgs/drop-left-icon.png"
              />
              {/* <span className={styles.bg_icon}></span> */}
            </div>
            <div className={styles.course_type_item}>
              <text>公益课</text>
              <img
                className={styles.dropdown_icon}
                src="/imgs/drop-left-icon.png"
              />
              {/* <span className={styles.bg_icon}></span> */}
            </div>
          </div>
          <div className={styles.course_type_list}>
            <div className={styles.list_type_gxk}>
              <a href="#">教育咨询</a>
              <a href="#" className={styles.more}>
                查看更多
                <img src="/imgs/more-icon.png" alt="查看更多" />
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
