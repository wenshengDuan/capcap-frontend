import React from "react";
// plugins
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { ConfigProvider } from "antd";

// components
import App from "./App";

// styles
import "./app.less";

// language
import { IntlProvider } from "react-intl";
const language = localStorage.getItem("language") || "zh_CN";
const messages = require(`./locales/${language}.json`);
const antdMessage = require(`antd/lib/locale-provider/zh_CN`);

console.log("process.env.NODE_ENV :>> ", process.env.NODE_ENV);

ReactDOM.render(
  <IntlProvider messages={messages} locale="en">
    <ConfigProvider locale={antdMessage}>
      <BrowserRouter basename="/">
        <App />
      </BrowserRouter>
    </ConfigProvider>
  </IntlProvider>,
  document.getElementById("app") as HTMLElement
);
