/**登录 */
import { useState, useEffect, FormEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./Login.module.scss";
import {
  phoneIconImage,
  vcodeIconImage,
  lockIconImage,
  checkIconImage,
  uncheckIconImage,
  unameIconImage,
} from "@/data/imags";
import { Verification } from "@/data/fn";
import { LoginType } from "@/data/types";

export default function LoginComponent() {
  //初始化state
  const [state, setState] = useState<LoginType>({
    phone: "", //手机号
    vcode: "", //手机验证码
    password: "", //密码
    focusPhone: false, //手机号input获取焦点
    focusVcode: false, //手机验证码input获取焦点
    focusPssword: false, //密码input获取焦点
    phoneError: "", //手机号错误提示
    isShowPhoneError: false, //是否显示手机号错误提示
    passwordError: "", //密码错误提示
    isShowPasswordError: false, //是否显示密码错误提示
    vcodeError: "", //手机验证码错误提示
    isShowVcodeError: false, //是否显示手机验证码错误提示
    loginType: 1, //登录类型,1为账号密码登录,2为手机验证码登录
    ischeck: true, //勾选用户协议
  });

  //实例化验证函数
  const Verfn = new Verification();

  //手机号input失去焦点验证
  const verifyPhone = () => {
    if (!state.phone) {
      setState((prevState: LoginType) => ({
        ...prevState,
        isShowPhoneError: true,
        phoneError: "此处不能为空",
      }));
      return;
    }
    if (!Verfn.VerificationPhone(state.phone)) {
      setState((prevState: LoginType) => ({
        ...prevState,
        isShowPhoneError: true,
        phoneError: "手机号格式不正确",
      }));
      return;
    }
    if (state.phone && Verfn.VerificationPhone(state.phone)) {
      setState((prevState: LoginType) => ({
        ...prevState,
        isShowPhoneError: false,
        phoneError: "",
      }));
    }
  };

  //密码input失去焦点验证
  const verifyPassword = () => {
    if (!state.password) {
      setState((prevState: LoginType) => ({
        ...prevState,
        isShowPasswordError: true,
        passwordError: "此处不能为空",
      }));
      return;
    }
    if (!Verfn.VerificationPassword(state.password)) {
      setState((prevState: LoginType) => ({
        ...prevState,
        isShowPasswordError: true,
        passwordError: "密码不能少于6位",
      }));
      return;
    }
    if (state.password && Verfn.VerificationPassword(state.password)) {
      setState((prevState: LoginType) => ({
        ...prevState,
        isShowPasswordError: false,
        passwordError: "",
      }));
    }
  };

  //验证手机验证码
  const verifyVcode = () => {
    if (!state.vcode) {
      setState((prevState: LoginType) => ({
        ...prevState,
        isShowVcodeError: true,
        vcodeError: "此处不能为空",
      }));
      return;
    } else {
      setState((prevState: LoginType) => ({
        ...prevState,
        isShowVcodeError: false,
        vcodeError: "",
      }));
    }
  };

  //input chage event
  const inputChange = (e: FormEvent<HTMLInputElement>) => {
    // 动态属性赋值
    const { name, value } = e.currentTarget;
    setState((prev: LoginType) => {
      return { ...prev, [name]: value };
    });
  };
  /**
   * 切换登录方式
   * @param type 登录类型 1为账号密码，2为手机验证码
   */
  const chageLoginType = (type: number) => {
    setState((prevState: LoginType) => ({
      ...prevState,
      loginType: type,
    }));
  };

  //监听state,实时更新转态值
  useEffect(() => {}, [state]);

  return (
    <div className={styles.container}>
      <div className={styles.login_type}>
        <button
          type="button"
          className={`${state.loginType === 1 && styles.active}`}
          onClick={() => chageLoginType(1)}
        >
          账号登录
        </button>
        <button
          type="button"
          className={`${state.loginType === 2 && styles.active}`}
          onClick={() => chageLoginType(2)}
        >
          手机验证登录
        </button>
      </div>
      <form className={styles.form}>
        {/* 账号密码登录 */}
        {state.loginType === 1 ? (
          <>
            <div
              className={`${styles.input_container} ${
                state.focusPhone && styles.focused
              } ${state.isShowPhoneError && styles.input_container_error}`}
            >
              <Image src={unameIconImage} alt="手机号" height={30} width={30} />
              <input
                type="text"
                placeholder="请输入手机号"
                name="phone"
                onChange={inputChange}
                onBlur={() => verifyPhone()}
                onFocus={() => setState({ ...state, focusPhone: true })}
              />
            </div>
            {state.isShowPhoneError && (
              <p className={styles.error}>{state.phoneError}</p>
            )}
            <div
              className={`${styles.input_container} ${
                state.focusPssword && styles.focused
              } ${state.isShowPasswordError && styles.input_container_error}`}
            >
              <Image
                src={lockIconImage}
                alt="请输入密码"
                height={30}
                width={30}
              />
              <input
                type="password"
                placeholder="请输入密码"
                name="password"
                onChange={inputChange}
                onBlur={() => verifyPassword()}
                onFocus={() => setState({ ...state, focusPssword: true })}
              />
            </div>
            {state.isShowPasswordError && (
              <p className={styles.error}>{state.passwordError}</p>
            )}
          </>
        ) : (
          // 手机验证码登录
          <>
            <div
              className={`${styles.input_container} ${
                state.focusPhone && styles.focused
              } ${state.isShowPhoneError && styles.input_container_error}`}
            >
              <Image src={phoneIconImage} alt="手机号" height={30} width={30} />
              <input
                type="text"
                placeholder="请输入手机号"
                name="phone"
                onChange={inputChange}
                onBlur={() => verifyPhone()}
                onFocus={() => setState({ ...state, focusPhone: true })}
              />
            </div>
            {state.isShowPhoneError && (
              <p className={styles.error}>{state.phoneError}</p>
            )}
            <div
              className={`${styles.input_container} ${
                state.focusVcode && styles.focused
              } ${state.isShowVcodeError && styles.input_container_error}`}
            >
              <Image src={vcodeIconImage} alt="验证码" height={30} width={30} />
              <input
                type="text"
                placeholder="请输入验证码"
                name="vcode"
                onChange={inputChange}
                onBlur={() => verifyVcode()}
                onFocus={() => setState({ ...state, focusVcode: true })}
              />
              <button type="button">获取验证码</button>
            </div>
            {state.isShowVcodeError && (
              <p className={styles.error}>{state.vcodeError}</p>
            )}
          </>
        )}

        <div className={styles.resetpwd}>
          <Link href="/resetpassword">忘记密码</Link>
        </div>
        <div className={styles.register_rules}>
          <Image
            src={state.ischeck ? checkIconImage : uncheckIconImage}
            alt="用户协议"
            width={20}
            height={20}
            onClick={() => setState({ ...state, ischeck: !state.ischeck })}
          />
          <span>阅读并同意</span>
          <Link href="#">《用户协议》</Link>
          <span>和</span>
          <Link href="#">《隐私政策》</Link>
        </div>
        <button type="button" className={styles.submit}>
          登录
        </button>
        <div className={styles.login_link}>
          <span>没有账号？</span>
          <Link href="/register">去注册！</Link>
        </div>
      </form>
    </div>
  );
}
