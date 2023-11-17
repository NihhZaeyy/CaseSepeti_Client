import React from "react";
import { NavLink } from "react-router-dom";

//icons
import { IoIosSearch } from "react-icons/io";
import { IoBagOutline } from "react-icons/io5";
import { RiMenu3Line } from "react-icons/ri";
import { MdOutlineDiscount } from "react-icons/md";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center py-5 px-8 border-primaryText border-b text-primaryText">
      <div className="nav-left flex items-center gap-6 w-[250px]">
        <NavLink to="/">
          <p>Home</p>
        </NavLink>
        <NavLink to="/store">
          <p>Store</p>
        </NavLink>
        <NavLink to="/product">
          <p>Product</p>
        </NavLink>
      </div>
      <div className="flex justify-center items-center">
        <p>CaseSepeti</p>
      </div>
      <div className="nav-right flex gap-6 items-center justify-end w-[250px]">
        <NavLink to="/search">
          <IoIosSearch size={24} />
        </NavLink>
        <NavLink to="/menu">
          <MdOutlineDiscount size={24} />
        </NavLink>
        <NavLink to="/my-cart">
          <IoBagOutline size={24} />
        </NavLink>
        <NavLink to="/menu">
          <RiMenu3Line size={24} />
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
