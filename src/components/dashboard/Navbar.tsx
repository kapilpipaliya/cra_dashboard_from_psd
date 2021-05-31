import * as React from "react";
import "./Navbar.scss";
import Brand from "../../images/Brand.png";

interface NavbarProps {}
export const Navbar = (props: NavbarProps) => {
  return (
    <div className="flex-horizontal">
      <div className="bg-blue color-white flex-align-items-center flex-horizontal logo">
        <img src={Brand} />
        <h1>Infinity</h1>
      </div>
      <div className="flex-align-items-center  flex-grow flex-horizontal bg-light-blue color-white header-nav">
        <h3>Dashbaord</h3>
        <div className="flex-grow">
          <div className="flex-horizontal flex-justify-content-end">
            <div className="bedge">
              <i className="far fa-bell"></i> <span>3</span>
            </div>
            <div className="bedge">
              <i className="far fa-envelope"></i> <span>4</span>
            </div>
            <div className="bedge">
              <i className="fas fa-search"></i>
            </div>
            <div className="bedge">
              <i className="fas fa-th"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
