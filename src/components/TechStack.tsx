import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 30%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Title = styled.div`
  font-weight: 700;
  font-size: 2rem;
  margin: 15px;
`;

const Desc = styled.div`
  font-weight: 600;
  width: 100%;
  display: flex;
  margin: 10px;
  font-size: 1.1rem;
`;
const TechStack = () => {
  return (
    <Container>
      <Title></Title>
    </Container>
  );
};

export default TechStack;
