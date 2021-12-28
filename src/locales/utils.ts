export const getComponentLanguage = (language: string) => {
  if (language === "en") {
    return {
      intl: "en",
      antd: "en_US",
      moment: "en-gb",
    };
  } else if (language === "zh") {
    return {
      intl: "zh",
      antd: "zh_CN",
      moment: "zh-cn",
    };
  }
  return {
    intl: "en",
    antd: "en_US",
    moment: "en-gb",
  };
};
