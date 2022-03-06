import React from "react";
import styled from "styled-components";
import AboutMe from "./AboutMe";
import Project from "./Project";

const Container = styled.div`
  /* height: calc(100vh - 60px); */
`;

const MainContainer = styled.div`
  margin: 50px 50px;
  height: calc(100vh - 50px);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TextContainer = styled.div`
  width: 50%;
  padding-top: 40px;
  @media screen and (max-width: 1500px) {
    width: 80%;
  }
  @media screen and (max-width: 1000px) {
    width: 100%;
  }
`;

const Title = styled.h1`
  font-size: 6rem;
  margin-bottom: 10px;
  color: #00223e;
  font-weight: 800;
  line-height: 1.5;
`;

const Main = () => {
  return (
    <Container>
      <MainContainer>
        <TextContainer>
          <Title>안녕하세요.</Title>
          <Title>
            변화와 융합하는
            <Title>프론트엔드 개발자</Title>
            <Title>인주비입니다.</Title>
          </Title>
        </TextContainer>
      </MainContainer>
      <AboutMe />
      <Project />
    </Container>
  );
};

export default Main;
