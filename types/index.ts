export interface navBarType {
  id: number;
  text: string;
  path: string;
  isCourse?: boolean;
}
//课程类型
export interface CourseTypes {
  id: Number;
  type: String;
  isActived: Boolean;
}
//教师列表
export interface TeacherType {
  company?: string;
  fullName: string;
  id?: string;
  idCard?: string;
  introduction: string;
  orderNo?: number;
  photoUrl?: string;
  recommend?: number;
  sex?: string;
  telephone?: string;
  title: string;
}
//logo
export interface setingInfoType {
  logo: string;
  telephone: string;
}
//友情链接
export interface getFriendlyLinksType {
  id: string;
  link: string;
  name: string;
  sortNumber: number;
  type: string;
}
//footer
export interface getFooterInfoType {
  copyRight: string;
  copyright?: string;
  icp: string;
  loyooUrl?: string;
  qqNumber1?: string;
  qqNumber2?: string;
  seoDescription?: string;
  seoKeywords?: string;
  seoTitle?: string;
  serverTime?: string;
  telephone1?: string;
  telephone2?: string;
  zhichidanwei?: string;
  zhubandanwei?: string;
  zhuguandanwei?: string;
}
/**小程序、微信公众号二维码*/
export interface getRecodeImgType {
  addtime: string;
  adzoneId: string;
  description: string;
  id: string;
  linkurl: string;
  name: string;
  priority: number;
  resourceslink: string;
  status: number;
}
/**课程 */
export interface courseType {
  classType: number;
  courseHourCount: number;
  courseName: string;
  hits: number;
  hourCount: number;
  id: string;
  isEmigrated: number;
  picUrl: string;
  price: string;
  teacherId: number;
  teacherName: string;
  type: number;
}
/** 文章 */
export interface articleType {
  addtime: string;
  id: string;
  pageviews: number;
  pictures: string;
  title: string;
}
export interface courseCenterFirstClassType {
  id: number;
  addTime: string;
  columnId: string;
  hierarchy: number;
  icon: string;
  name: string;
  oldId: null;
  orderno: number;
  parentId: number;
  remark: string;
  status: number;
}
