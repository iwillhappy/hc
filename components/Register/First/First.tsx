/**注册第一步-注册信息 */
import { useState, FormEvent, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./First.module.scss";
import StepProgress from "@/components/Register/Step/Step";
import {
  phoneIconImage,
  vcodeIconImage,
  lockIconImage,
  checkIconImage,
  uncheckIconImage,
} from "@/data/imags";
import { Verification } from "@/data/fn";
import { RegisterFirstStepType } from "@/data/types";

interface propsType {
  nextStepHandler: () => void;
}

export default function FirstStep({ nextStepHandler }: propsType) {
  //实例化验证函数
  const Verfn = new Verification();

  //初始化
  let [state, setState] = useState<RegisterFirstStepType>({
    phone: "", //手机号
    vcode: "", //手机验证码
    password: "", //密码
    password2: "", //确认密码
    focusPhone: false, //手机号input获取焦点
    focusVcode: false, //手机验证码input获取焦点
    focusPssword: false, //密码input获取焦点
    focusPssword2: false, //确认密码input获取加点
    phoneError: "", //验证码错误提示
    isShowPhoneError: false, //是否显示验证码错误提示
    passwordError: "", //密码错误提示
    isShowPasswordError: false, //是否显示密码错误提示
    password2Error: "", //确认密码错误提示
    isShowPassword2Error: false, //是否显示确认错误提示
    vcodeError: "", //验证码错误提示
    isShowVcodeError: false, //是否显示验证码错误提示
  });

  //同意用户协议
  const [ischeck, setIscheck] = useState<boolean>(false);

  //手机号input失去焦点验证
  const verifyPhone = () => {
    if (!state.phone) {
      setState((preState) => ({
        ...preState,
        isShowPhoneError: true,
        phoneError: "此处不能为空",
      }));
      return;
    }
    if (!Verfn.VerificationPhone(state.phone)) {
      setState((preState) => ({
        ...preState,
        isShowPhoneError: true,
        phoneError: "手机号格式不正确",
      }));
      return;
    }
    if (state.phone && Verfn.VerificationPhone(state.phone)) {
      setState((preState) => ({
        ...preState,
        isShowPhoneError: false,
        phoneError: "",
      }));
    }
  };

  //密码input失去焦点验证
  const verifyPassword = () => {
    if (!state.password) {
      setState((preState) => ({
        ...preState,
        isShowPasswordError: true,
        passwordError: "此处不能为空",
      }));
      return;
    }
    if (!Verfn.VerificationPassword(state.password)) {
      setState((preState) => ({
        ...preState,
        isShowPasswordError: true,
        passwordError: "密码不能少于6位",
      }));
      return;
    }
    if (state.password && Verfn.VerificationPassword(state.password)) {
      setState((preState) => ({
        ...preState,
        isShowPasswordError: false,
        passwordError: "",
      }));
    }
  };

  //确认密码input失去焦点验证
  const verifyPassword2 = () => {
    if (!state.password2) {
      setState((preState) => ({
        ...preState,
        isShowPassword2Error: true,
        password2Error: "此处不能为空",
      }));
      return;
    }
    if (!Verfn.VerificationPassword(state.password2)) {
      setState((preState) => ({
        ...preState,
        isShowPassword2Error: true,
        password2Error: "密码不能少于6位",
      }));
      return;
    }
    if (state.password != state.password2) {
      setState((preState) => ({
        ...preState,
        isShowPassword2Error: true,
        password2Error: "两次密码输入不一致",
      }));
      return;
    }
    if (
      state.password2 &&
      Verfn.VerificationPassword(state.password2) &&
      state.password === state.password2
    ) {
      setState((preState) => ({
        ...preState,
        isShowPassword2Error: false,
        password2Error: "",
      }));
    }
  };

  //手机验证码input失去焦点验证
  const verifyVcode = () => {
    if (!state.vcode) {
      setState((preState) => ({
        ...preState,
        isShowVcodeError: true,
        vcodeError: "此处不能为空",
      }));
      return;
    } else {
      setState((preState) => ({
        ...preState,
        isShowVcodeError: false,
        vcodeError: "",
      }));
    }
  };

  //form 表单 input chage event
  const inputChange = (e: FormEvent<HTMLInputElement>) => {
    // 动态属性赋值
    const { name, value } = e.currentTarget;
    setState((prev: RegisterFirstStepType) => {
      return { ...prev, [name]: value };
    });
  };

  //监听state
  useEffect(() => {}, [state]);

  return (
    <div className={styles.container}>
      {/* 步骤条 */}
      <StepProgress step={1} />
      <form className={styles.form}>
        {/* 手机号部分 */}
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
            value={state.phone}
            onChange={inputChange}
            onBlur={() => verifyPhone()}
            onFocus={() => setState({ ...state, focusPhone: true })}
          />
        </div>
        {state.isShowPhoneError && (
          <p className={styles.error}>{state.phoneError}</p>
        )}

        {/* 手机验证码部分 */}
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
            onBlur={() => verifyVcode()}
            onFocus={() => setState({ ...state, focusVcode: true })}
          />
          <button type="button">获取验证码</button>
        </div>
        {state.isShowVcodeError && (
          <p className={styles.error}>{state.vcodeError}</p>
        )}

        {/* 密码部分 */}
        <div
          className={`${styles.input_container} ${
            state.focusPssword && styles.focused
          } ${state.isShowPasswordError && styles.input_container_error}`}
        >
          <Image src={lockIconImage} alt="请输入密码" height={30} width={30} />
          <input
            type="password"
            placeholder="请输入密码"
            name="password"
            onBlur={() => verifyPassword()}
            onFocus={() => setState({ ...state, focusPhone: true })}
          />
        </div>
        {state.isShowPasswordError && (
          <p className={styles.error}>{state.passwordError}</p>
        )}

        {/* 确认密码部分 */}
        <div
          className={`${styles.input_container} ${
            state.focusPssword2 && styles.focused
          } ${state.isShowPassword2Error && styles.input_container_error}`}
        >
          <Image
            src={lockIconImage}
            alt="再次输入密码"
            height={30}
            width={30}
          />
          <input
            type="password"
            placeholder="再次输入密码"
            name="password2"
            onBlur={() => verifyPassword2()}
            onFocus={() => setState({ ...state, focusPssword2: true })}
          />
        </div>
        {state.isShowPassword2Error && (
          <p className={styles.error}>{state.password2Error}</p>
        )}

        {/* 用户协议部分 */}
        <div className={styles.register_rules}>
          <Image
            src={ischeck ? checkIconImage : uncheckIconImage}
            alt="用户协议"
            width={20}
            height={20}
            onClick={() => setIscheck(!ischeck)}
          />
          <span>阅读并同意</span>
          <Link href="#">《用户协议》</Link>
          <span>和</span>
          <Link href="#">《隐私政策》</Link>
        </div>

        {/* 按钮提交部分 */}
        <button
          type="button"
          className={styles.submit}
          onClick={() => nextStepHandler()}
        >
          下一步
        </button>
        <div className={styles.login_link}>
          <span>已有账号？</span>
          <Link href="/login">去登录！</Link>
        </div>
      </form>
    </div>
  );
}
