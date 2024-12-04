import Frame_film from "../components/Frame_film";
import { useSelector } from "react-redux";
import { selectOriginal } from "../features/movies/movieSlice";

const Trending = (props) => {
  const title = "Originals";
  const original = useSelector(selectOriginal);
  return <Frame_film title={title} movies={original} />;
};

export default Trending;
