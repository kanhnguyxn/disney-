import { useSelector } from "react-redux";
import { selectNewDisney } from "../features/movies/movieSlice";
import Slick from "../components/slickItems";

const NewDisney = () => {
  const newdisney = useSelector(selectNewDisney);

  return <Slick title="New to Disney+" data={newdisney} />;
};

export default NewDisney;
