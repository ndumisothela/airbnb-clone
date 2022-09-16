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
            description="Enjoy the amazing stay inSoweto with this stunning penthouse "
            price="R300/night"
          />
          <Cards
            src="https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=600"
            title="Penthouse in Vosloorus"
            description="Enjoy the amazing stay inSoweto with this stunning penthouse "
            price="R1500/night"
          />
          <Cards
            src="https://images.pexels.com/photos/262048/pexels-photo-262048.jpeg?auto=compress&cs=tinysrgb&w=600"
            title="Penthouse in Thokoza"
            description="Enjoy the amazing stay inSoweto with this stunning penthouse "
            price="R2500/night"
          />
          <Cards
            src="https://images.pexels.com/photos/259593/pexels-photo-259593.jpeg?auto=compress&cs=tinysrgb&w=600"
            title="Penthouse in Daveyton"
            description="Enjoy the amazing stay inSoweto with this stunning penthouse "
            price="R500/night"
          />
        </div>
        <div className="home_section">
          <Cards
            src="https://images.pexels.com/photos/1918291/pexels-photo-1918291.jpeg?auto=compress&cs=tinysrgb&w=600"
            title="Penthouse in Soweto"
            description="Enjoy the amazing stay inSoweto with this stunning penthouse "
            price="R5500/night"
          />
          <Cards
            src="https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=600"
            title="Penthouse in Vosloorus"
            description="Enjoy the amazing stay inSoweto with this stunning penthouse "
            price="R750/night"
          />
          <Cards
            src="https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&w=600"
            title="Penthouse in Thokoza"
            description="Enjoy the amazing stay inSoweto with this stunning penthouse "
            price="R5400/night"
          />
          <Cards
            src="https://images.pexels.com/photos/1449729/pexels-photo-1449729.jpeg?auto=compress&cs=tinysrgb&w=600"
            title="Penthouse in Daveyton"
            description="Enjoy the amazing stay inSoweto with this stunning penthouse "
            price="R600/night"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
