import { collection, onSnapshot } from "firebase/firestore";
import db from "../firebase";
import { setMovies } from "../features/movies/movieSlice";

const FetchFilms = async (dispatch) => {
  try {
    console.log("Starting data fetch");

    // Get the collection of movies
    const moviesCollection = collection(db, "movies_update");
    let moviesList = [];

    // Fetch movies
    await new Promise((resolve, reject) => {
      console.log("Fetching data...");
      onSnapshot(moviesCollection, (snapshot) => {
        const movies = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        if (movies.length > 0) {
          moviesList = movies;
          resolve();
        } else {
          reject("No movies found");
        }
      });
    });

    console.log("Data fetched successfully");

    // Sort and categorize movies
    const popular = getPopularMovies(moviesList);
    const newDisney = getNewDisneyMovies(moviesList, popular);
    const recommend = getRecommendedMovies(moviesList, popular, newDisney);
    const trending = getTrendingMovies(
      moviesList,
      popular,
      newDisney,
      recommend
    );
    const original = getOriginalMovies(
      moviesList,
      popular,
      newDisney,
      recommend,
      trending
    );

    // Dispatch the categorized movies to Redux store
    dispatch(
      setMovies({
        popular,
        newdisney: newDisney,
        recommend,
        original,
        trending,
      })
    );
    console.log("Data processed and dispatched");

    return true;
  } catch (error) {
    return error;
  }
};

const getPopularMovies = (moviesList) => {
  return [...moviesList]
    .sort((a, b) => b.vote_average - a.vote_average)
    .slice(0, Math.round(moviesList.length * 0.125));
};

const getNewDisneyMovies = (moviesList, popular) => {
  return moviesList
    .filter((movie) => !popular.some((p) => p.id === movie.id))
    .sort((a, b) => dateToHour(b.release_date) - dateToHour(a.release_date))
    .slice(0, Math.round(moviesList.length - popular.length) * 0.23);
};

const getRecommendedMovies = (moviesList, popular, newDisney) => {
  const excludeIds = getExcludedIds(popular, newDisney);
  return moviesList
    .filter((movie) => !excludeIds.has(movie.id))
    .sort((a, b) => b.vote_count - a.vote_count)
    .slice(0, Math.round(moviesList.length - excludeIds.size) * 0.23);
};

const getTrendingMovies = (moviesList, popular, newDisney, recommend) => {
  const excludeIds = getExcludedIds(popular, newDisney, recommend);
  return moviesList
    .filter((movie) => !excludeIds.has(movie.id))
    .sort((a, b) => b.vote_average - a.vote_average)
    .slice(0, Math.round(moviesList.length - excludeIds.size) * 0.23);
};

const getOriginalMovies = (
  moviesList,
  popular,
  newDisney,
  recommend,
  trending
) => {
  const excludeIds = getExcludedIds(popular, newDisney, recommend, trending);
  return moviesList.filter((movie) => !excludeIds.has(movie.id));
};

const dateToHour = (dateString) => {
  return new Date(dateString).getTime() / (1000 * 60 * 60);
};

const getExcludedIds = (...lists) => {
  return new Set(lists.flat().map((movie) => movie.id));
};

export default FetchFilms;
