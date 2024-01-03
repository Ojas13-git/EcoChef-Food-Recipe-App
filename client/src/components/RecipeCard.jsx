import { HiHeart } from "react-icons/hi2";
import PropTypes from "prop-types";

const RecipeCard = ({id, title, image}) => {
  return (
    <div className="shadow-md flex flex-col justify-between p-3 rounded-lg bg-white">
      <div className="overflow-hidden">
        <img
          src={image}
          alt={title}
          className="rounded-lg hover:scale-110 transition-all duration-500 ease-in-out"
          width={250}
        />
      </div>
      <div className="flex mt-2 justify-between items-center">
        <span> {title.slice(0, 20)} {title.length > 20 ? "..." : null}</span>
        <HiHeart className="text-red-500 hover:scale-125 transition-all duration-500 ease-in-out cursor-pointer"/>
      </div>
    </div>
  );
};

RecipeCard.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default RecipeCard;
