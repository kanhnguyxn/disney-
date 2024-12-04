import Frame_film from "../components/Frame_film";
import { useSelector } from "react-redux";
import { selectTrending } from "../features/movies/movieSlice";

const Trending = (props) => {
  const title = "Trending";
  const trending = useSelector(selectTrending);
  return <Frame_film title={title} movies={trending} />;
};

export default Trending;
