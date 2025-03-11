import React from "react";
import Navigation from "./Navigation";

const Header = () => {
  return (
    <div className="p-4 bg-red-500 flex justify-end">
      <Navigation />
    </div>
  );
};

export default Header;
