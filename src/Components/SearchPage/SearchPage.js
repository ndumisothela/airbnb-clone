import React from "react";
import { Button } from "@mui/material";
import "./SearchPage.css";
import SearchResults from "./../SearchResults/SearchResults";

const SearchPage = () => {
  return (
    <div className="searchpage">
      <div className="searchpage_info">
        <p>62 stays . 26 August to 30th August . 2 guests</p>
        <h1>Stays nearby</h1>
        <Button variant="outlined">Cancellation Flexibility</Button>
        <Button variant="outlined">Type of place</Button>
        <Button variant="outlined">Price</Button>
        <Button variant="outlined">Rooms and beds</Button>
        <Button variant="outlined">More filters</Button>
      </div>
      <SearchResults
        img="https://images.pexels.com/photos/2635038/pexels-photo-2635038.jpeg?auto=compress&cs=tinysrgb&w=600"
        location="Private room in center of Zola"
        title="Stay at this spacious Edwardian House"
        description="1guest . 1 bedroom . 1.5 shared bathroom . wifi . Kitchen ."
        star={4.5}
        price="R500/ night"
        total="R 2000 total"
      />
      <SearchResults
        img="https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&w=600"
        location="Private room in center of Zola"
        title="Stay at this spacious Edwardian House"
        description="1guest . 1 bedroom . 1.5 shared bathroom . wifi . Kitchen ."
        star={4.5}
        price="R750/ night"
        total="R 1500 total"
      />
      <SearchResults
        img="https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=600"
        location="Private room in center of Zola"
        title="Stay at this spacious Edwardian House"
        description="1guest . 1 bedroom . 1.5 shared bathroom . wifi . Kitchen ."
        star={4.5}
        price="R600/ night"
        total="R 1200 total"
      />
      <SearchResults
        img="https://images.pexels.com/photos/259962/pexels-photo-259962.jpeg?auto=compress&cs=tinysrgb&w=600"
        location="Private room in center of Zola"
        title="Stay at this spacious Edwardian House"
        description="1guest . 1 bedroom . 1.5 shared bathroom . wifi . Kitchen ."
        star={4.5}
        price="R1500/ night"
        total="R 6000 total"
      />
    </div>
  );
};

export default SearchPage;
