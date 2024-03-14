import { ForEach } from "../../components/ForEach";
import BookCard from "../../components/bookCard/BookCard";
import Hero from "../../components/hero/Hero";

const Home = () => {
  return (
    <div>
      <Hero
        heading="Welcome to Book Emporium"
        description="Explore and buy from our vast collection of books"
        button="Get Started"
      />
      <div>
        <p className="text-center p-8	"></p>
        <div className="flex flex-wrap	">
          <ForEach
            of={[]}
            render={(item,index) => (
              <BookCard
                title="The Ecf Collection"
                price="1"
                imageSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Gutenberg_Bible%2C_Lenox_Copy%2C_New_York_Public_Library%2C_2009._Pic_01.jpg/1280px-Gutenberg_Bible%2C_Lenox_Copy%2C_New_York_Public_Library%2C_2009._Pic_01.jpg"
              />
            )}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
