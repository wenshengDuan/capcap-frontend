import React from "react";
import styled from "styled-components";

const ContainerWrapper = styled.div`
  height: 100%;
  width: 100%;
`;

interface IProps {
  children: React.ReactNode;
}

const AppContainer: React.FC = (props: IProps) => {
  const { children } = props;
  return <ContainerWrapper>{children}</ContainerWrapper>;
};

export default AppContainer;
