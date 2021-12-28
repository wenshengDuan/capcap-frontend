import * as React from "react";
import Loadable from "react-loadable";
import { Spin } from "antd";
import styled from "styled-components";

const Wrapper = styled.div`
  height: 200px;
  line-height: 200px;
  text-align: center;
`;

const loadingComponent = () => (
  <Wrapper>
    <Spin />
  </Wrapper>
);

export default (loader, loading = loadingComponent) => {
  return Loadable({
    loader,
    loading,
  });
};
