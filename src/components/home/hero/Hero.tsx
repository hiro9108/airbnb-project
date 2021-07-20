import React from "react";
import Booking from "../../../pages/booking";
import Navbar from "../../navbar/Navbar";
import Search from "../../search/Search";
import SearchBar from "../../search/SearchBar";

const Hero = () => {
  return (
    <div className="hero">
      <Navbar classNameNavbar="navbar_home" classNameUser="navbar_user_home" />
      {/* <Search /> */}
      {/* <Booking /> */}
      <SearchBar />
      <Search />
      <div className="hero_content">
        <div className="mb-6">
          <h4>Not sure where to go? Perfect.</h4>
        </div>
        <div className="flexible_btn">
          <h4 className="flexible_text">I'm flexible!</h4>
        </div>
      </div>
    </div>
  );
};

export default Hero;
