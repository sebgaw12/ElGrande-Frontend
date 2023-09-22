import React from 'react';
import { Link } from "react-router-dom";

const Header = () => (
  <header className="bg-blue-500 py-2 px-4 flex justify-between items-center">
    <h1 className="text-white text-2xl font-bold">FootSpot</h1>

    <div className="flex items-center space-x-2">
      <Link to="/restaurant">
        <button className="bg-white text-blue-500 hover:bg-blue-100 text-sm px-3 py-1 rounded-lg">
          Add restaurant
        </button>
      </Link>

      <button className="bg-white text-blue-500 hover:bg-blue-100 text-sm px-3 py-1 rounded-lg">
        Profile
      </button>
    </div>
  </header>
);

export default Header;
