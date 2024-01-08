import React, { useState } from "react";
import Image from "next/image";
import styles from "@/styles/Register/Register.module.scss";
import { registerImage } from "@/data/imags";
import FirstStep from "@/components/Register/First/First";
import SecoundStep from "@/components/Register/Secound/Secound";
import Finish from "@/components/Register/Finish/Finish";

export default function Register() {
  const [step, setStep] = useState<number>(1);
  function EnumState() {
    if (step === 1) return <FirstStep nextStepHandler={nextStepHandler} />;
    if (step === 2)
      return (
        <SecoundStep
          finisheHandler={finisheHandler}
          backHandler={backHandler}
        />
      );
    if (step === 3) return <Finish />;
  }
  const nextStepHandler = () => {
    setStep(2);
  };
  const finisheHandler = () => {
    setStep(3);
  };
  const backHandler = () => {
    setStep(1);
  };

  return (
    <div className={styles.container}>
      <div className={styles.registerContainer}>
        <Image
          src={registerImage}
          alt="注册图"
          width={539}
          height={472}
          className={styles.register_img}
        />
        <EnumState />
      </div>
    </div>
  );
}
