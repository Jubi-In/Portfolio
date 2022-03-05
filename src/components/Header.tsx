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

const Logo = styled.li`
  margin: 0 60px;
  font-weight: 600;
  font-size: 1rem;
`;

const Category = styled.li`
  margin-right: 30px;
`;

const Header = () => {
  return (
    <Container>
      <List>
        <Logo>Jubi In</Logo>
        <Category>About me</Category>
        {/* <Category>Stack</Category> */}
        <Category>Project</Category>
        <Category>Want</Category>
      </List>
    </Container>
  );
};
export default Header;
