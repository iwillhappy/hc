/**注册第二步-个人信息 */
import { useState, useEffect, FormEvent } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./Secound.module.scss";
import StepProgress from "@/components/Register/Step/Step";
import { etpIconImage, lockIconImage, unameIconImage } from "@/data/imags";

import City from "@/components/Register/City/City";
import { RegisterSecoundStepType } from "@/data/types";
interface propsType {
  finisheHandler: () => void;
  backHandler: () => void;
}

export default function SecoundStep({
  finisheHandler,
  backHandler,
}: propsType) {
  //初始化state
  const [state, setState] = useState<RegisterSecoundStepType>({
    uname: "", //真实姓名
    idcard: "", //身份证号
    company: "", //单位名称
    focusUname: false, //姓名input框获取焦点
    focusIdcard: false, //身份证号input框获取焦点
    focusCompany: false, //单位名称input框获取焦点
    isShowCompany: false, //是否展示单位列表
    isOpenCompanyList: false, //是否展开单位列表子项
    isShowUnameError: false, // 是否展示姓名验证错误提示
    unameError: "", //姓名验证错误提示
    isShowIdcardError: false, //是否展示身份证验证错误提示
    idcardError: "", //身份证错误提示
    isShowCompanyError: false, //是否展示单位验证错误提示
    companyError: "", //单位错误提示
  });

  //input失去焦点-验证用户名
  const verifyUname = () => {
    if (!state.uname) {
      setState((preState: RegisterSecoundStepType) => ({
        ...preState,
        isShowUnameError: true,
        unameError: "此处不能为空",
      }));
      return;
    }
  };
  //input失去焦点-验证身份证
  const verifyIdcard = () => {
    let flag: boolean, msg: string;
    if (!state.idcard) {
      flag = true;
      msg = "此处不能为空";
    } else {
      flag = false;
      msg = "";
    }
    setState((preState: RegisterSecoundStepType) => ({
      ...preState,
      isShowIdcardError: flag,
      idcardError: msg,
    }));
  };
  //input失去焦点-验证企业
  //input chage event
  const inputChange = (e: FormEvent<HTMLInputElement>) => {
    // 动态属性赋值
    const { name, value } = e.currentTarget;
    setState((prev: RegisterSecoundStepType) => {
      return { ...prev, [name]: value };
    });
  };
  /**
   * 选择所属单位
   * @param name 单位名称
   */
  const selectHandler = (name: string) => {
    setState((prevState: RegisterSecoundStepType) => ({
      ...prevState,
      companyName: name,
      isShowCompany: false,
      isOpenCompanyList: false,
      focusCompany: false,
    }));
  };
  //监听state,实时更新转态值
  useEffect(() => {}, [state]);
  return (
    <div className={styles.container}>
      {/* 步骤条 */}
      <StepProgress step={2} />
      {/* 选择地址 */}
      <City />
      <form>
        {/* 姓名部分 */}
        <div
          className={`${styles.input_container} ${
            state.focusUname && styles.focused
          } ${state.isShowUnameError && styles.input_container_error}`}
        >
          <Image src={unameIconImage} alt="icon" height={30} width={30} />
          <input
            type="text"
            placeholder="请输入真实姓名"
            name="uname"
            value={state.uname}
            onChange={inputChange}
            onBlur={() => verifyUname()}
            onFocus={() => setState({ ...state, focusUname: true })}
          />
        </div>
        {state.isShowUnameError && (
          <p className={styles.error}>{state.unameError}</p>
        )}
        {/* 身份证部分 */}
        <div
          className={`${styles.input_container} ${
            state.focusIdcard && styles.focused
          } ${state.isShowIdcardError && styles.input_container_error}`}
        >
          <Image src={lockIconImage} alt="icon" height={30} width={30} />
          <input
            type="text"
            placeholder="请输入18位身份证号码"
            name="idcard"
            value={state.idcard}
            onChange={inputChange}
            onBlur={() => verifyIdcard()}
            onFocus={() => setState({ ...state, focusIdcard: true })}
          />
        </div>
        {state.isShowIdcardError && (
          <p className={styles.error}>{state.idcardError}</p>
        )}
        {/* 选择单位部分 */}
        <div
          className={`${styles.input_container} ${
            state.company && styles.focused
          } ${state.isShowCompanyError && styles.input_container_error}`}
        >
          <Image
            src={etpIconImage}
            alt="请输入或选择单位名称"
            height={30}
            width={30}
          />
          <input
            type="text"
            placeholder="请输入或选择单位名称"
            name="company"
            value={state.company}
            onChange={inputChange}
            onFocus={() => setState({ ...state, focusIdcard: true })}
          />
          <img
            src="/imgs/down.png"
            className={`${styles.upicon} ${state.focusCompany && styles.roate}`}
          />
          {state.isShowCompany && (
            <div className={styles.enterprise}>
              <div className={styles.enterprise_item}>
                <div
                  className={styles.enterprise_item_title}
                  onClick={() =>
                    setState({
                      ...state,
                      isOpenCompanyList: !state.isOpenCompanyList,
                    })
                  }
                >
                  <img
                    src="/imgs/icon2.png"
                    className={`${styles.icon3} ${
                      state.isOpenCompanyList && styles.roateIcon
                    }`}
                    alt="icon"
                  />
                  <h5>河曲县民政和人力资源社会保障局</h5>
                </div>
                {state.isOpenCompanyList && (
                  <div className={`${styles.enterprise_item_child}`}>
                    <h5 onClick={() => selectHandler("河曲县农业农村局")}>
                      河曲县农业农村局
                    </h5>
                    <h5>河曲县畜牧兽医中心</h5>
                    <h5>河曲县农业机械化服务中心</h5>
                    <h5>河曲县劳动人事争议仲裁院</h5>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
        {state.isShowCompanyError && (
          <p className={styles.error}>{state.companyError}</p>
        )}
        {/* 提交部分 */}
        <div className={styles.btns}>
          <button
            type="button"
            className={styles.submit}
            onClick={() => backHandler()}
          >
            上一步
          </button>
          <button
            type="button"
            className={styles.submit}
            onClick={() => finisheHandler()}
          >
            注册
          </button>
        </div>

        <div className={styles.login_link}>
          <span>已有账号？</span>
          <Link href="/login">去登录！</Link>
        </div>
      </form>
    </div>
  );
}
