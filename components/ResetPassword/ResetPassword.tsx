import React, { useRef, useState } from "react";
import styles from "./ResetPassword.module.scss";
import Image from "next/image";
import { phoneIconImage, vcodeIconImage, lockIconImage } from "@/data/imags";

export default function ResetPasswordComponent() {
  //输入框获取焦点
  const [focusPhone, setFocusPhone] = useState<boolean>(false);
  const [focusVcode, setFocusVcode] = useState<boolean>(false);
  const [focusPssword, setFocusPssword] = useState<boolean>(false);
  const [focusPssword2, setFocusPssword2] = useState<boolean>(false);
  //check
  const [ischeck, setIscheck] = useState<boolean>(false);
  //表单
  const phone = useRef<HTMLInputElement>(null);
  const vcode = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);
  const password2 = useRef<HTMLInputElement>(null);
  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <h5 className={styles.title}>忘记密码</h5>
        <div
          className={`${styles.input_container} ${
            focusPhone && styles.focused
          }`}
        >
          <Image src={phoneIconImage} alt="手机号" height={30} width={30} />
          <input
            type="text"
            placeholder="请输入手机号"
            name="phone"
            ref={phone}
            onBlur={() => setFocusPhone(false)}
            onFocus={() => setFocusPhone(true)}
          />
        </div>
        <div
          className={`${styles.input_container} ${
            focusVcode && styles.focused
          }`}
        >
          <Image src={vcodeIconImage} alt="验证码" height={30} width={30} />
          <input
            type="text"
            placeholder="请输入验证码"
            name="vcode"
            ref={vcode}
            onBlur={() => setFocusVcode(false)}
            onFocus={() => setFocusVcode(true)}
          />
          <button type="button">获取验证码</button>
        </div>
        <div
          className={`${styles.input_container} ${
            focusPssword && styles.focused
          }`}
        >
          <Image src={lockIconImage} alt="请输入密码" height={30} width={30} />
          <input
            type="password"
            placeholder="请输入密码"
            name="password"
            ref={password}
            onBlur={() => setFocusPssword(false)}
            onFocus={() => setFocusPssword(true)}
          />
        </div>
        <div
          className={`${styles.input_container} ${
            focusPssword2 && styles.focused
          }`}
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
            ref={password2}
            onBlur={() => setFocusPssword2(false)}
            onFocus={() => setFocusPssword2(true)}
          />
        </div>
        <button type="button" className={styles.submit}>
          确认密码
        </button>
      </form>
    </div>
  );
}
