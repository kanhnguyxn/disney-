import Frame_film from "./Frame_film";
import { useSelector } from "react-redux";
import { selectNewDisney } from "../features/movies/movieSlice";

const NewDisney = (props) => {
  const newDisney = useSelector(selectNewDisney);
  const title = "New to Disney+";
  return <Frame_film title={title} movies={newDisney} />;
};

export default NewDisney;
