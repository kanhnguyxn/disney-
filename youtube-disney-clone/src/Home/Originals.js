import { useSelector } from "react-redux";
import { selectOriginal } from "../features/movies/movieSlice";
import Slick from "../components/slickItems";

const Originals = () => {
  const original = useSelector(selectOriginal);
  return <Slick title="Originals" data={original} />;
};

export default Originals;
