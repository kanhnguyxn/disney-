import { useSelector } from "react-redux";
import { selectRecommend } from "../features/movies/movieSlice";
import Slick from "../components/slickItems";

const Recommends = () => {
  const recommend = useSelector(selectRecommend);
  return <Slick title="Recommended for You" data={recommend} />;
};

export default Recommends;
