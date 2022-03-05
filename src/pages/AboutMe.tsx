import styled from "styled-components";
import photo from "../assets/photo.png";
import Info from "../components/aboutme/Info";
import Education from "../components/Education";

const Container = styled.div`
  height: calc(100vh - 50px);
  background-color: whitesmoke;
  display: flex;
  padding: 100px 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  color: #000000;
`;
const DescContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 30;
`;
const Img = styled.img`
  width: 8%;
  object-fit: contain;
`;

const Name = styled.div`
  font-weight: 700;
  font-size: 3rem;
  margin: 10px;
`;

const Desc = styled.div`
  text-align: center;
  line-height: 1.5;
  font-weight: 600;
  font-size: 1.2rem;
`;

const InfoContainer = styled.div`
  width: 70%;
  height: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  @media screen and (max-width: 500px) {
    flex-direction: column;
  }
`;

const AboutMe = () => {
  return (
    <Container>
      <DescContainer>
        <Img src={photo}></Img>
        <Name>인주비</Name>
        <Desc>
          변화는 저를 지치지 않고 개발에 몰입할 수 있게 하는 원동력입니다.{" "}
          <br />
          새로운 기술을 접하고, 도전하는 것이 저를 더욱 “00한” 개발자로 성장하게
          합니다.
          <br />더 나아가, 변화를 기다리는 것이 아닌, 먼저 변화하는 프론트엔드
          개발자가 되겠습니다.
        </Desc>
      </DescContainer>

      <InfoContainer>
        <Education />
        <Info name="Tech Stack" />
        <Info name="Link" />
      </InfoContainer>
    </Container>
  );
};

export default AboutMe;
