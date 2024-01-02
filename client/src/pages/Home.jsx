import RecipeCard from "../components/RecipeCard"


const Home = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div>
        <input 
          type="text"
          name="search"
          id="search"
          placeholder="Search the ingredient"
          className="outline-none border px-5 py-3 rounded-xl w-[60vw] shadow-md focus:border-red-500"
        />
      </div>
      <div className="my-10">
        <RecipeCard/>
      </div>
    </div>
  )
}

export default Home