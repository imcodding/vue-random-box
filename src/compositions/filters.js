import TYPE from "/@/enums/category"

export const useFilter = () => {
  
  const getAllList = (list) => {
    return list.value.slice().sort()
  }
  const getKoreaList = (list) => {
    return list.value
    .filter((item) => item.type == TYPE.KOREA)
    .slice()
    .sort()
  }
  const getChinaList = (list) => {
    return list.value
    .filter((item) => item.type == TYPE.CHINA)
    .slice()
    .sort()
  }
  const getJapanList = (list) => {
    return list.value
    .filter((item) => item.type == TYPE.JAPAN)
    .slice()
    .sort()
  }
  const getWesternList = (list) => {
    return list.value
    .filter((item) => item.type == TYPE.WESTERN)
    .slice()
    .sort()
  }
  const getEtcList = (list) => {
    return list.value
    .filter((item) => item.type == TYPE.ETC)
    .slice()
    .sort()
  }

  return {
    getAllList,
    getKoreaList,
    getChinaList,
    getJapanList,
    getWesternList,
    getEtcList
  }
}