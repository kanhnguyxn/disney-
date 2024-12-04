import styled from "styled-components";
import "slick-carousel/slick/slick.css"; // Slick slider styles
import "slick-carousel/slick/slick-theme.css"; // Slick theme styles
import Slider from "react-slick";

const ImgSlider = (props) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <Carousel {...settings}>
      {films.map((film, index) => (
        <Wrap>
          <a href={film.link}>
            <img src={film.img} alt={film.name || "Film image"} />
          </a>
        </Wrap>
      ))}
    </Carousel>
  );
};

const films = [
  {
    name: "Film 1",
    img: "/images/slider-badag.jpg",
    link: "#",
  },
  {
    name: "Film 2",
    img: "/images/slider-badging.jpg",
    link: "#",
  },
  {
    name: "Film 3",
    img: "/images/slider-scale.jpg",
    link: "#",
  },
  {
    name: "Film 4",
    img: "/images/slider-scales.jpg",
    link: "#",
  },
];

const Carousel = styled(Slider)`
  margin-top: 20px;

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

export default ImgSlider;
