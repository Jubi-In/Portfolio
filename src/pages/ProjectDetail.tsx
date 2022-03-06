import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: calc(100vh);
  background-color: whitesmoke;
  display: flex;
  padding: 100px 300px;
  display: flex;
  /* justify-content: space-around; */
  /* align-items: center; */
  flex-direction: column;
  color: #000000;
  @media screen and (max-width: 1500px) {
    padding: 100px 200px;
  }
  @media screen and (max-width: 1000px) {
    padding: 100px 100px;
  }
`;

const Number = styled.div`
  font-weight: 700;
  font-size: 2.5rem;
  margin: 50px;
`;

const Title = styled.div`
  font-weight: 700;
  font-size: 3rem;
  margin: 0 50px;
`;

const ProjectDetail = () => {
  return (
    <Container>
      <Number>첫 번째</Number>
      <div>비대면 통합 교육 플랫폼</div>
      <Title>Drawing Dream</Title>
    </Container>
  );
};

export default ProjectDetail;
