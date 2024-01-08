import React, { useEffect, useState } from "react";
import styles from "./City.module.scss";
import { Select } from "@arco-design/web-react";
import { provices } from "@/data/city";
const Option = Select.Option;
export default function City() {
  const provicesList = provices.map((item) => item.name);
  const [cities, setCities] = useState([]);
  const [areas, setAreas] = useState([]);
  const [provinceValue, setProvinceValue] = useState("");
  const [cityValue, setCityValue] = useState("选择市");
  const [areaValue, setAreaValue] = useState("选择区");
  const [isCityDisabled, setIsCityDisabled] = useState<boolean>(true);
  const [isAreaDisabled, setIsAreaDisabled] = useState<boolean>(true);
  const selectProvince = (value: string) => {
    setProvinceValue(value);
    setIsCityDisabled(false);
    setIsAreaDisabled(true);
    setCityValue("选择市");
    setAreaValue("选择区");
  };
  const selectCity = (value: string) => {
    setCityValue(value);
    setIsAreaDisabled(false);
    setAreaValue("选择区");
  };
  const selectArea = (value: string) => {
    setAreaValue(value);
  };
  useEffect(() => {
    if (provinceValue) {
      const citys: any = provices.find((item) => item.name === provinceValue);
      if (citys.children.length > 0) {
        setCities(citys.children.map((city: any) => city.name));
      } else {
        setCities([]);
      }
    }
  }, [provinceValue]);
  useEffect(() => {
    if (provinceValue) {
      const _city: any = provices.find((item) => item.name === provinceValue);
      let _area: any;
      if (_city.children && cityValue !== "选择市") {
        _area = _city.children.find((item: any) => item.name === cityValue);
        if (_area.children && _area.children.length > 0) {
          setAreas(_area.children.map((item: any) => item.name));
        }
      }
    }
  }, [cityValue]);
  return (
    <div className={styles.container}>
      <Select
        placeholder="选择省"
        style={{ width: 157 }}
        onChange={(value) => selectProvince(value)}
      >
        {provicesList.map((option, index) => (
          <Option key={index} value={option}>
            {option}
          </Option>
        ))}
      </Select>
      <Select
        placeholder="选择市"
        style={{ width: 157 }}
        onChange={(value) => selectCity(value)}
        disabled={isCityDisabled}
        value={cityValue}
      >
        {cities.map((option, index) => (
          <Option key={index} value={option}>
            {option}
          </Option>
        ))}
      </Select>
      <Select
        placeholder="选择区"
        style={{ width: 157 }}
        onChange={(value) => selectArea(value)}
        disabled={isAreaDisabled}
        value={areaValue}
      >
        {areas.map((option, index) => (
          <Option key={index} value={option}>
            {option}
          </Option>
        ))}
      </Select>
    </div>
  );
}
