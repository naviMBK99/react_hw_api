import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <NavLink to={"/"} style={{ color: "black", fontWeight: "600" }}>
        Home
      </NavLink>

      <NavLink to={"/album"} style={{ color: "black", fontWeight: "600" }}>
        Album
      </NavLink>
      <NavLink
        to={"/albumdetails"}
        style={{ color: "black", fontWeight: "600" }}
      >
        Album Details
      </NavLink>
      <NavLink to={"/users"} style={{ color: "black", fontWeight: "600" }}>
        Users
      </NavLink>
      <NavLink
        to={"/userdetails"}
        style={{ color: "black", fontWeight: "600" }}
      >
        User Details
      </NavLink>
    </div>
  );
};

export default Navbar;
