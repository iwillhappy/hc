export class Verification {
  //验证手机号是否合规
  VerificationPhone = (phone: string): boolean => {
    const pattern = /^1[3456789]\d{9}$/;
    return pattern.test(phone);
  };
  //验证密码
  VerificationPassword = (password: string): boolean => {
    if (password.length < 6) return false;
    return true;
  };
}
