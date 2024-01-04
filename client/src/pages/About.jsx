const About = () => {
  return (
    <div className="flex justify-center items-center h-[70vh]">
      <div className="bg-white w-[60vw] p-5 rounded-md">
        <h1 className="text-4xl font-bold mb-4 text-center my-2">
          Welcome to EcoChef!
        </h1>
        <div className="flex flex-col gap-3 my-2">
          <h3 className="text-xl font-bold text-center">About Us</h3>
          <p className="text-gray-600">
            Welcome to EcoChef, your go-to destination for discovering
            delightful recipes based on your favorite ingredients! Our mission
            is to make cooking an enjoyable and sustainable experience, all
            while helping you create mouthwatering dishes with ease.
          </p>
        </div>
        <div className="flex flex-col gap-3 my-2">
          <h3 className="text-xl font-bold text-center">What is EcoChef?</h3>
          <p className="text-gray-600">
            EcoChef is a user-friendly web app that simplifies the process of
            finding the perfect recipe based on your available ingredients. We
            understand the challenges of meal planning and strive to make it as
            convenient as possible for you. With our intuitive interface and
            access to the Meal DB API, we bring a world of delicious recipes
            right to your fingertips.
          </p>
        </div>
        <div className="flex flex-col gap-3 my-2">
          <h3 className="text-xl font-bold text-center">How It Works</h3>
          <p className="text-gray-600">
            <b>Search by Ingredient:</b> Simply enter the ingredient you want to use,
            and EcoChef will present you with a curated list of recipes
            featuring that specific item.
            </p> 
            <p className="text-gray-600">
            <b>Filter and Customize: </b>Tailor your
            search by applying filters such as cuisine type, dietary
            restrictions, or cooking time. Find the perfect recipe that suits
            your taste and schedule. 
            </p>
            <p className="text-gray-600">
            <b>Detailed Instructions:s</b> Each recipe comes
            with clear, step-by-step instructions and vibrant images to guide
            you through the cooking process. Whether you are a seasoned chef or a
            kitchen novice, you will feel confident in your culinary endeavors.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
