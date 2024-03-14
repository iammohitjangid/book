const Hero = ({ heading, description, button }) => (
  <div className="bg-blue-900 text-white py-20">
    <div className="container mx-auto text-center">
      <h1 className="text-4xl font-bold mb-4">{heading}</h1>
      <p className="text-lg">{description} </p>
      {/* <button className="bg-white text-blue-900 px-8 py-2 mt-8 rounded-full hover:bg-blue-100 hover:text-blue-800 transition duration-300">
        {button}
      </button> */}
    </div>
  </div>
);

export default Hero;
