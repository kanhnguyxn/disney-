import styled from "styled-components";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css"; // Slick slider styles
import "slick-carousel/slick/slick-theme.css"; // Slick theme styles
import Slider from "react-slick";

const Slick = ({ title, data, slick }) => {
  const setting = {
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    centerPadding: "50px",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };

  if (title) {
    return (
      <Container>
        <h4>{title}</h4>
        <Content {...setting}>
          {data.map((item, key) => (
            <WrapContent key={key}>
              <Link to={`/detail/${item.id}`}>
                <img src={item.poster_path} alt={item.title || "Film image"} />
              </Link>
            </WrapContent>
          ))}
        </Content>
      </Container>
    );
  } else {
    return (
      <Carousel {...slick}>
        {data.map((item, key) => (
          <Wrap key={key}>
            <Link to={`/detail/${item.id}`}>
              <img src={item.poster_path} alt={item.title || "Film image"} />
            </Link>
          </Wrap>
        ))}
      </Carousel>
    );
  }
};
// Styled Components
const Container = styled.div`
  padding: 0 0 26px;
  text-align: start;
`;

const Content = styled(Slider)`
  margin-top: 20px;
`;

const Carousel = styled(Content)`
  & > button {
    opacity: 0;
    height: 100%;
    width: 5vw;
    z-index: 1;
    &:hover {
      opacity: 1;
      transition: opacity 0.2s ease 0s;
    }
  }
  ul li button {
    &::before {
      font-size: 10px;
      color: rgb(150, 151, 171);
    }
  }
  li.slick-active button:before {
    color: white;
  }
  .slick-list {
    overflow: initial;
  }
  .slick-prev {
    left: -75px;
  }
  .slick-next {
    right: -75px;
  }
`;

const Wrap = styled.div`
  border-radius: 4px;
  cursor: pointer;
  position: relative;

  a {
    border-radius: 4px;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
      rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    cursor: pointer;
    display: block;
    position: relative;
    padding: 4px;

    img {
      width: 100%;
      height: 100%;
    }

    &:hover {
      padding: 0;
      border: 4px solid rgb(249, 249, 249, 0.8);
      transition-duration: 300ms;
    }
  }
`;

const WrapContent = styled(Wrap)`
  a {
    margin: 0 20px;
  }
`;

export default Slick;
