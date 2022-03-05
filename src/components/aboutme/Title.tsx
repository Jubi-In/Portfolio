import React from "react";
import styled from "styled-components";

const Container = styled.div`
  font-weight: 700;
  font-size: 2rem;
  margin: 15px;
`;

interface TitleProps {
  name: string;
}
const Title: React.FC<TitleProps> = (props) => {
  return <Container>{props.name}</Container>;
};

export default Title;
