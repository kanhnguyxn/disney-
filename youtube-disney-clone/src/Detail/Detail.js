import styled from "styled-components";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  selectRecommend,
  selectNewDisney,
  selectOriginal,
  selectPopular,
  selectTrending,
} from "../features/movies/movieSlice";

const Detail = () => {
  const { id } = useParams();
  const [detailData, setDetailData] = useState({});

  // Use useSelector to get the different movie lists
  const recommendMovies = useSelector(selectRecommend);
  const newDisneyMovies = useSelector(selectNewDisney);
  const originalMovies = useSelector(selectOriginal);
  const popularMovies = useSelector(selectPopular);
  const trendingMovies = useSelector(selectTrending);

  useEffect(() => {
    const fetchData = () => {
      try {
        // Combine all movie lists into one array
        const moviesList = [
          ...recommendMovies,
          ...newDisneyMovies,
          ...originalMovies,
          ...popularMovies,
          ...trendingMovies,
        ];
        console.log(moviesList);
        // Find the movie by ID
        const movie = moviesList.find(
          (movie) => parseInt(movie.id) === parseInt(id)
        );

        if (movie) {
          setDetailData(movie); // Update state with movie details
        } else {
          console.log("Movie not found");
        }
      } catch (error) {
        console.log("Error fetching movie details:", error);
      }
    };

    if (id) {
      fetchData();
    }
  }, [
    id,
    recommendMovies,
    newDisneyMovies,
    originalMovies,
    popularMovies,
    trendingMovies,
  ]);

  return (
    <Container>
      <Background>
        <img src={detailData.backdrop_path} alt={detailData.title} />
      </Background>
      <Title>{detailData.title}</Title>
      <ContentMeta>
        <Control>
          <Player>
            <img src="/images/play-icon-black.png" alt="Play" />
            <span>Play</span>
          </Player>
          <Trailer>
            <img src="/images/play-icon-white.png" alt="Trailer" />
            <span>Trailer</span>
          </Trailer>
          <AddList>
            <span />
            <span />
          </AddList>
          <Groupwatch>
            <img src="/images/group-icon.png" alt="Group Watch" />
          </Groupwatch>
        </Control>
        <SubTitle>
          Date: {detailData.release_date} - Rating: {detailData.vote_average}
        </SubTitle>
        <Description>{detailData.overview}</Description>
      </ContentMeta>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  min-height: calc(100vh - 250px);
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
      width: initial;
    }
  }
`;

const Title = styled.div`
  font-size: 40px;
  font-weight: 1000;
  display: flex;
  justify-content: flex-start;
  align-items: end;
  height: 50vh;
  min-height: 170px;
  padding-bottom: 24px;
  width: 100%;
  @media (max-width: 768px) {
    font-size: 34px;
    font-weight: 800;
  }
`;

const ContentMeta = styled.div`
  max-width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: start;
`;

const Control = styled.div`
  display: flex;
  flex-direction: row;
  margin: 24px 0;
  min-height: 56px;
  align-items: center;
`;

const Player = styled.button`
  border-radius: 4px;
  font-size: 15px;
  margin-right: 22px;
  padding: 0 24px;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  letter-spacing: 1.8px;
  text-transform: uppercase;
  background: rgb(249, 249, 249);
  border: none;
  color: rgb(0, 0, 0);
  cursor: pointer;

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
      width: 16px;
      transform: translate(1px, 0px) rotate(0deg);
    }

    &:nth-child(2) {
      height: 16px;
      width: 2px;
      transform: translate(-8px, 0px) rotate(0deg);
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
  font-weight: 600;
  min-height: 20px;
  padding: 16px 0 0;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

const Description = styled.div`
  line-height: 1.4;
  font-size: 20px;
  padding: 16px 0;
  color: rgb(249, 249, 249);
  text-align: left;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export default Detail;
