import Frame_film from "../components/Frame_film";
import { useSelector } from "react-redux";
import { selectRecommend } from "../features/movies/movieSlice";

const Recommends = (props) => {
  const recommend = useSelector(selectRecommend);
  const title = "Recommended for You";
  return <Frame_film title={title} movies={recommend} />;
};

export default Recommends;
