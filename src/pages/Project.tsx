import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import ProjectItem from "../components/project/ProjectItem";

const Container = styled.div`
  height: calc(100vh - 50px);
  background-color: #d9d9d9;
  display: flex;
  padding: 100px 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  color: #000000;
`;

const Title = styled.div`
  font-weight: 700;
  font-size: 2rem;
`;

const DetailLink = styled(Link)`
  color: #000000;
  font-size: 1.1rem;
`;

const Project = () => {
  return (
    <Container>
      <Title>PROJECT</Title>
      <ProjectItem />
      <DetailLink to="/project"> &gt; PROJECT 상세 페이지로 이동</DetailLink>
    </Container>
  );
};

export default Project;
