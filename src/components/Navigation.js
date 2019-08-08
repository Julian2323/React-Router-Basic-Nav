import React from 'react';
import { BrowserRouter as Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div>
      <div className="App">
        <h1>React Router Mini</h1>
        <div>
          <Link to={"/"}>
            <a href="">Home</a>
          </Link>
        </div>
        <div>
          <Link to={"/about"}>
            <a href="">About</a>
          </Link>
        </div>
        <div>
          <Link to ={"/contact"}>
            <a href="">Contact</a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navigation;

