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
      <SearchResults />
    </div>
  );
};

export default SearchPage;
