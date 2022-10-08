import React, { useEffect } from "react";
import "./Home.css";
import { useDispatch, useSelector } from "react-redux";
import Banner from "./../Banner/Banner";
import Cards from "./../Cards/Cards";
import { listListing } from "./../../Action/ListingActions";

const Home = () => {
  const dispatch = useDispatch();

  const listingList = useSelector((state) => state.listingList);
  const { loading, error, listings } = listingList;

  useEffect(() => {
    dispatch(listListing());
  }, [dispatch]);
  return (
    <div>
      <div className="home">
        <Banner />
        {loading ? (
          <h2>Loading...</h2>
        ) : error ? (
          <h3>{error}</h3>
        ) : (
          <div className="home_section">
            {listings.map((listing) => (
              <Cards
                src={listing.img}
                title={listing.title}
                description={listing.description}
                price={listing.price}
              />
            ))}
          </div>
        )}
        {/*
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
            */}
      </div>
    </div>
  );
};
export default Home;
