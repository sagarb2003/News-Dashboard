import React from "react";
import "./Nav_daily.css";
import HamburgerDrawer from "./HamburgerDrawer";

const Nav_daily = ({ setCategory,setSearchQuery }) => {

  const handleSearch=(e)=>{
    setSearchQuery(e.target.value);
  }
  return (
    <div className="nav">
      <div className="icon">
        <HamburgerDrawer setCategory={setCategory} />
      </div>
      <h1 style={{ cursor: "pointer" }}>News Dashboard </h1>
      <input type="text" placeholder="Search News" onChange={handleSearch}/>
      
    </div>
  );
};

export default Nav_daily;
