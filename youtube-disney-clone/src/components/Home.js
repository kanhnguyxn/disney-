import styled from "styled-components";
import ImgSlider from "./imgSlice";
import Viewer from "./Viewers";
import Recommends from "./Recommends";
import NewDisney from "./NewDisney";
import Trending from "./Trending";
import Originals from "./Originals";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import db from "../firebase";
import { collection, onSnapshot } from "firebase/firestore";
import { setMovie } from "../features/movies/movieSlice";
import { selectUserName } from "../features/user/userSlice";

const Home = (props) => {
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);

  useEffect(() => {
    const fetchMovies = async () => {
      const recommend = [];
      const newdisney = [];
      const trending = [];
      const originals = [];

      const movieCollection = collection(db, "movies");

      // Lắng nghe sự thay đổi dữ liệu Firestore (realtime)
      onSnapshot(movieCollection, (snapshot) => {
        snapshot.docs.forEach((doc) => {
          const data = doc.data();
          switch (data.type) {
            case "recommend":
              recommend.push({ id: doc.id, ...data });
              break;
            case "new":
              newdisney.push({ id: doc.id, ...data });
              break;
            case "trending":
              trending.push({ id: doc.id, ...data });
              break;
            case "original":
              originals.push({ id: doc.id, ...data });
              break;
            default:
              break;
          }
        });

        dispatch(
          setMovie({
            recommend: recommend,
            newdisney: newdisney,
            trending: trending,
            original: originals,
          })
        );
      });
    };

    if (userName) {
      fetchMovies();
    }
  }, [userName, dispatch]);

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
