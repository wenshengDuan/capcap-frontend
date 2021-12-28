import React from "react";
import styled from "styled-components";

const ContainerWrapper = styled.div`
  display: flex;
  width: 100%;
`;

interface IProps {
  children: React.ReactNode;
}

const H5Container: React.FC = (props: IProps) => {
  const { children } = props;
  return <ContainerWrapper>{children}</ContainerWrapper>;
};

export default H5Container;
