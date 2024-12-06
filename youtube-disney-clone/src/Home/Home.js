import styled from "styled-components";
import { useState } from "react";
import { useDispatch } from "react-redux";

import FetchFilms from "../components/fetchFilms";

import ImgSlider from "./imgSlice";
import Viewer from "./Viewers";
import Recommends from "./Recommends";
import NewDisney from "./NewDisney";
import Trending from "./Trending";
import Originals from "./Originals";

const Home = () => {
  const dispatch = useDispatch();
  const [load, setLoading] = useState(true);

  FetchFilms(dispatch)
    .then(() => setLoading(false))
    .catch((error) => {
      console.log(error);
      setLoading(true);
    });

  if (!load) {
    return (
      <Container>
        <ImgSlider />
        <Viewer />
        <Recommends />
        <NewDisney />
        <Trending />
        <Originals />
      </Container>
    );
  }
};

const Container = styled.main`
  position: relative;
  min-height: calc(100vh - 250px);
  overflow-x: hidden;
  display: block;
  top: 72px;
  padding: 0 calc(3.5vw + 5px);
  &::after {
    background: url("/images/home-background.png") center center / cover
      no-repeat fixed;
    content: "";
    position: absolute;
    inset: 0px;
    opacity: 1;
    z-index: -1;
  }
`;

export default Home;
