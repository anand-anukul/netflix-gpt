import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { API_OPTIONS } from '../utils/constants';
import { Addtrailers } from '../utils/movieSlice';

const useMovieTrailer = (movie_id) => {
    const dispatch=useDispatch();

    const trailer=useSelector(store=>store.movies.trailer)

    const getMoviesVideo = async () => {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/"+movie_id+"/videos?language=en-US",
        API_OPTIONS
      );
      const json = await data.json();
      const filterTrailer = json.results.filter((video) => video.type === "Trailer");
      const trailer=filterTrailer[0]
      dispatch(Addtrailers(trailer))
    };
  
    useEffect(() => {
      if(!trailer) getMoviesVideo();
    }, []);
    
  
}

export default useMovieTrailer
