import { useSelector } from "react-redux";
import { selectTrending } from "../features/movies/movieSlice";
import Slick from "../components/slickItems";

const Trending = () => {
  const trending = useSelector(selectTrending);
  return <Slick title="Trending" data={trending} />;
};

export default Trending;
