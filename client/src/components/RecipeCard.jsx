const RecipeCard = () => {
  return (
    <div className="shadow-md flex flex-col justify-between p-3 rounded-lg bg-white">
      <div className="overflow-hidden">
        <img
          src="https://www.themealdb.com/images/media/meals/sbx7n71587673021.jpg"
          alt=""
          className="rounded-lg hover:scale-110 transition-all duration-500 ease-in-out"
          width={250}
        />
      </div>
    </div>
  );
};

export default RecipeCard;
