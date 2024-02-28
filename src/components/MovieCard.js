import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
  if (!posterPath) return null;
  return (
    <div className="w-36  md:w-48 pr-4 group">
      <img className="rounded-lg cursor-pointer group-hover:blur-sm hover:!blur-none" alt="Movie Card" src={IMG_CDN_URL + posterPath} />
    </div>
  );
};
export default MovieCard;
