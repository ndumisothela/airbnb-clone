import React from "react";
import "./Home.css";
import Banner from "./../Banner/Banner";
import Cards from "./../Cards/Cards";

const Home = () => {
  return (
    <div>
      <div className="home">
        <Banner />
        <div className="home_section">
          <Cards
            src="https://images.pexels.com/photos/53610/large-home-residential-house-architecture-53610.jpeg?auto=compress&cs=tinysrgb&w=600"
            title="Penthouse in Soweto"
            description="Enjoy the aamazing stay inSoweto with this stunning penthouse "
            price="R3500/night"
          />
          <Cards
            src="https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=600"
            title="Penthouse in Vosloorus"
            description="Enjoy the aamazing stay inSoweto with this stunning penthouse "
            price="R3500/night"
          />
          <Cards
            src="https://images.pexels.com/photos/262048/pexels-photo-262048.jpeg?auto=compress&cs=tinysrgb&w=600"
            title="Penthouse in Thokoza"
            description="Enjoy the aamazing stay inSoweto with this stunning penthouse "
            price="R3500/night"
          />
          <Cards
            src="https://images.pexels.com/photos/259593/pexels-photo-259593.jpeg?auto=compress&cs=tinysrgb&w=600"
            title="Penthouse in Daveyton"
            description="Enjoy the aamazing stay inSoweto with this stunning penthouse "
            price="R3500/night"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
