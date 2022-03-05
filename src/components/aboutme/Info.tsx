import React from "react";
import styled from "styled-components";
import Title from "./Title";

const Container = styled.div`
  width: 30%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
interface InfoProps {
  name: string;
}

const Info: React.FC<InfoProps> = (props) => {
  return (
    <Container>
      <Title name={props.name}></Title>
    </Container>
  );
};

export default Info;
