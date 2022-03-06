import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.header`
  color: white;
  position: fixed;
  top: 0;
  left: 0;
  font-size: 0.8rem;
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  padding: 0px 20px;
  background-color: #00223e;
  z-index: 10;
  /* box-shadow: 0px 1px 5px 2px rgba(0, 0, 0, 0.8); */
`;

const List = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Logo = styled(Link)`
  margin: 0 60px;
  font-weight: 600;
  font-size: 1rem;
  text-decoration: none;
  color: white;
`;

const Category = styled(Link)`
  margin-right: 30px;
  text-decoration: none;
  color: white;
`;

const Header = () => {
  return (
    <Container>
      <List>
        <Logo to="/">Jubi In</Logo>
        <Category to="/">About me</Category>
        {/* <Category>Stack</Category> */}
        <Category to="/project">Project</Category>
        <Category to="/want">Want</Category>
      </List>
    </Container>
  );
};
export default Header;
