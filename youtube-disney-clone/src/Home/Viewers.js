import styled from "styled-components";

const Viewers = (props) => {
  return (
    <Container>
      {list_video.map((video) => {
        return (
          <Wrap>
            <img src={video.img} alt={video.name} />
            <video autoPlay loop playsInline muted>
              <source src={video.video} type="video/mp4" />
            </video>
          </Wrap>
        );
      })}
    </Container>
  );
};

const list_video = [
  {
    name: "disney",
    img: "/images/viewers-disney.png",
    video: "/videos/1564674844-disney.mp4",
  },
  {
    name: "marvel",
    img: "/images/viewers-marvel.png",
    video: "/videos/1564676115-marvel.mp4",
  },
  {
    name: "national-geographic",
    img: "/images/viewers-national.png",
    video: "/videos/1564676296-national-geographic.mp4",
  },
  {
    name: "pixar",
    img: "/images/viewers-pixar.png",
    video: "/videos/1564676714-pixar.mp4",
  },
  {
    name: "startwars",
    img: "/images/viewers-starwars.png",
    video: "/videos/1608229455-star-wars.mp4",
  },
];

const Container = styled.div`
  margin-top: 30px;
  padding: 30px 0px 20px;
  display: grid;
  gap: 25px;
  /* Sử dụng 5 cột, mỗi cột có chiều rộng tối thiểu là 0 và tối đa là 1 phần của khoảng trống có sẵn (1 fraction unit) */
  grid-template-columns: repeat(5, minmax(0, 1fr));

  @media (max-width: 768px) {
    /* Khi màn hình nhỏ hơn hoặc bằng 768px, Grid Layout sẽ chỉ có 1 cột (thay vì 5 cột). */
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
`;

const Wrap = styled.div`
  padding-top: 56.25%;
  border-radius: 10px;
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 /73%) 0px 16px 10px -10px;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  border: 3px solid rgba(249, 249, 249, 0.1);

  img {
    /* cách viết gọn của việc đặt các giá trị top, right, bottom, và left thành 0 */
    inset: 0;
    display: block;
    height: 100%;
    /* Điều chỉnh cách hình ảnh được cắt và hiển thị để bao phủ hoàn toàn phần tử chứa mà không làm méo hình ảnh */
    object-fit: cover;
    /* do mo  */
    opacity: 1;
    position: absolute;
    /* Tạo hiệu ứng chuyển đổi mượt mà cho thuộc tính opacity trong 500ms.
    ease-in-out: Hiệu ứng bắt đầu và kết thúc mượt mà.
    0s: Không có độ trễ trước khi hiệu ứng bắt đầu. */
    transition: opacity 500ms ease-in-out 0s;
    width: 100%;
    z-index: 1;
  }

  video {
    width: 100%;
    height: 100%;
    position: absolute;
    inset: 0;
    opacity: 0;
    z-index: 0;
  }

  &:hover {
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
      rgb(0 0 0 /72%) 0px 30px 22px -10px;

    transform: scale(1.05);
    border-color: rgb(249, 249, 249, 0.8);

    video {
      opacity: 1;
    }
  }
`;
export default Viewers;
