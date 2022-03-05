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

const Date = styled.div`
  width: 50%;
`;
const Name = styled.div`
  width: 50%;
`;
const Education = () => {
  return (
    <Container>
      <Title>Education</Title>
      <Desc>
        <Date>2017.03 ~ 2021.02</Date>
        <Name>동덕여자대학교 컴퓨터학과</Name>
      </Desc>
      <Desc>
        <Date>2021.07 ~</Date>
        <Name>삼성청년SW아카데미</Name>
      </Desc>
    </Container>
  );
};

export default Education;
