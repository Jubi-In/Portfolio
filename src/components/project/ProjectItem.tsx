import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 30%;
  height: 50%;
  background-color: whitesmoke;
  border-radius: 20px;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
  @media screen and (max-width: 500px) {
    width: 50%;
    height: 30%;
  }
`;

const ProjectItem = () => {
  return <Container></Container>;
};

export default ProjectItem;
