//注册
export interface RegisterFirstStepType {
  focusPhone: boolean;
  focusVcode: boolean;
  focusPssword: boolean;
  focusPssword2: boolean;
  phone: string;
  vcode: string;
  password: string;
  password2: string;
  phoneError: string;
  isShowPhoneError: boolean;
  passwordError: string;
  isShowPasswordError: boolean;
  password2Error: string;
  isShowPassword2Error: boolean;
  vcodeError: string;
  isShowVcodeError: boolean;
}
export interface RegisterSecoundStepType {
  uname: string;
  idcard: string;
  company: string;
  focusUname: boolean;
  focusIdcard: boolean;
  focusCompany: boolean;
  isShowCompany: boolean;
  isOpenCompanyList: boolean;
  isShowUnameError: boolean;
  unameError: string;
  isShowIdcardError: boolean;
  idcardError: string;
  isShowCompanyError: boolean;
  companyError: string;
}

//登录
export interface LoginType {
  phone: string;
  vcode: string;
  password: string;
  focusPhone: boolean;
  focusVcode: boolean;
  focusPssword: boolean;
  phoneError: string;
  isShowPhoneError: boolean;
  passwordError: string;
  isShowPasswordError: boolean;
  vcodeError: string;
  isShowVcodeError: boolean;
  loginType: number;
  ischeck: boolean;
}
