import styled from "styled-components";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import db from "../firebase";

const Detail = (props) => {
  const { id } = useParams();
  const [detailData, setdatailData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const docRef = doc(db, "movies", id);
        const data = await getDoc(docRef);
        if (data.exists()) {
          // cap nhat state voi du lieu tu Firebase
          setdatailData(data.data());
        } else {
          console.log("No such document in Firebase");
        }
      } catch (error) {
        console.log("Error getting document:", error);
      }
    };
    if (id) {
      fetchData();
    }
  }, [id]);
  return (
    <Container>
      <Background>
        <img src={detailData.backgroundImg} alt={detailData.title} />
      </Background>
      <ImageTitle>
        <img src={detailData.titleImg} />
      </ImageTitle>
      <ContentMeta>
        <Control>
          <Player>
            <img src="/images/play-icon-black.png" />
            <span>Play</span>
          </Player>
          <Trailer>
            <img src="/images/play-icon-white.png" />
            <span>Trailer</span>
          </Trailer>
          <AddList>
            <span />
            <span />
          </AddList>
          <Groupwatch>
            <img src="/images/group-icon.png" />
          </Groupwatch>
        </Control>
        <SubTitle>{detailData.subTitle}</SubTitle>
        <Description>{detailData.description}</Description>
      </ContentMeta>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  min-height: calc(100vh-250px);
  /* xuwr lys khi noi dung tran khoi man hinh (visible khong cat | hidden cat | scroll cuon) */
  overflow-x: hidden;
  display: block;
  top: 72px;
  padding: 0 calc(3.5vw + 5px);
`;

const Background = styled.div`
  left: 0px;
  opacity: 0.8;
  position: fixed;
  z-index: -1;
  right: 0;
  top: 0;
  bottom: 0;

  img {
    width: 100%;
    height: 100%;

    @media (max-width: 1024px) {
      /* width của một phần tử về giá trị ban đầu (initial value) */
      width: initial;
    }
  }
`;

const ImageTitle = styled.div`
  align-items: center;
  display: flex;
  -webkit-box-pack: start;
  justify-content: flex-start;
  height: 30vw;
  min-height: 170px;
  padding-bottom: 24px;
  width: 100%;

  img {
    max-width: 600px;
    min-width: 200px;
    width: 35vw;
  }
`;

const ContentMeta = styled.div`
  max-width: 874px;
  display: flex;
  flex-direction: column;
  align-items: start;
`;
const Control = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  margin: 24px 0xp;
  min-height: 56px;
`;

const Player = styled.button`
  font-size: 15px;
  margin: 0px 22px 0px 0px;
  padding: 0px 24px;
  height: 56px;
  align-items: center;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  letter-spacing: 1.8px;
  text-align: center;
  text-transform: uppercase;
  background: rgb(249, 249, 249);
  border: none;
  color: rgb(0, 0, 0);

  img {
    width: 32px;
  }

  &:hover {
    background: rgb(198, 198, 198);
  }

  @media (max-width: 768px) {
    height: 45px;
  }
`;

const Trailer = styled(Player)`
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid rgb(249, 249, 249);
  color: rgb(249, 249, 249);
`;

const AddList = styled.div`
  margin-right: 16px;
  height: 44px;
  width: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.6);
  border-radius: 50%;
  border: 2px solid white;
  cursor: pointer;

  span {
    background-color: rgb(249, 249, 249);
    display: inline-block;

    &:first-child {
      height: 2px;
      transform: translate(1px, 0px) rotate(0deg);
      width: 16px;
    }

    &:nth-child(2) {
      height: 16px;
      transform: translate(-8px, 0) rotate(0deg);
      width: 2px;
    }
  }
`;

const Groupwatch = styled.div`
  height: 43px;
  width: 43px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background: rgb(0, 0, 0);
  border: 2px solid white;

  img {
    width: 100%;
  }
`;

const SubTitle = styled.div`
  color: rgb(249, 249, 249);
  font-size: 15px;
  min-height: 20px;
  padding: 16px 0px 0px;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;
const Description = styled.div`
  line-height: 1.4;
  font-size: 20px;
  padding: 16px 0px;
  color: rgb(249, 249, 249);
  text-align: left;
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;
export default Detail;
