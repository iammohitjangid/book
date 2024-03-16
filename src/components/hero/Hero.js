const Hero = ({ heading, description, button }) => (
  <div className=" bg-blue-900 text-white py-20">
    <div className="container mx-auto text-center">
      <h1 className="text-4xl font-bold mb-4">{heading}</h1>
      <p className="text-lg ">{description} </p>
    </div>
  </div>
);

export default Hero;
