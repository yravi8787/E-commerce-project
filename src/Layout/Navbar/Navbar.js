import { Menu, ShoppingCartOutlined } from "@mui/icons-material";
import { Drawer } from "@mui/material";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import { getItems } from "../../fearures/itemsSlice";
import { useSelector } from "react-redux";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));

const Navbar = () => {
  const allItems = useSelector(getItems);
  const [state, setState] = useState(false);
  const toggleDrawer = (open) => {
    setState(open);
  };
  return (
    <div className="navbar_root">
      <div className="container navbar_main">
        <div className="navlogo d-flex align-items-center">
          <div className="hamnurger_menu " onClick={() => toggleDrawer(true)}>
            <Menu fontSize="medium" />
          </div>
          <p>
            <NavLink to={"/"}>E-commerce</NavLink>
          </p>
        </div>
        <div className="navLinks">
          <p className="navLink body2">
            <NavLink to={"/"}>HOME</NavLink>
          </p>
          <p className="navLink body2">
            <NavLink to={"/about"}>ABOUT</NavLink>
          </p>
          <p className="navLink body2">
            <NavLink to={"/products"}>PRODUCTS</NavLink>
          </p>
          <p className="navLink body2">
            <NavLink to={"/contact"}>CONTACT</NavLink>
          </p>
          <p>
            <NavLink to={"/cart"}>
              <StyledBadge badgeContent={allItems.length} color="secondary">
                <ShoppingCartOutlined />
              </StyledBadge>
            </NavLink>
          </p>
        </div>
      </div>
      <Drawer
        anchor={"left"}
        open={state}
        onClose={() => toggleDrawer(false)}
        className="details_drawer_root"
      >
        <div className="nav_drawer_main">
          <div className="navlogo d-flex align-items-center">
            <p>
              <NavLink to={"/"}>E-commerce</NavLink>
            </p>
          </div>
          <div className="navLinks_and">
            <p className="body2">
              <NavLink to={"/"}>HOME</NavLink>
            </p>
            <p className="body2">
              <NavLink to={"/about"}>ABOUT</NavLink>
            </p>
            <p className="body2">
              <NavLink to={"/products"}>PRODUCTS</NavLink>
            </p>
            <p className="body2">
              <NavLink to={"/contact"}>CONTACT</NavLink>
            </p>
          </div>
        </div>
      </Drawer>
    </div>
  );
};

export default Navbar;
