import React, { useContext, useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
  NavbarText,
  NavbarBrand,
} from "reactstrap";
import { Link } from "react-router-dom";
import { UserContext } from "../Context/UserContext";

const NavbarTop = () => {
  const context = useContext(UserContext);
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  return (
    <Navbar color="info" light expand="md">
      <NavbarBrand>
        <Link to="/" className="text-white text-decoration-none logo">
          Github Search App
        </Link>
      </NavbarBrand>
      <NavbarText className="text-white welcome">
        {" "}
         {context.user?.email ?`Welcome ${context.user.email}` : ""}{" "}
      </NavbarText>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="ms-auto links" navbar>
          {context.user ? (
            <NavItem>
              <NavLink tag={Link} className="text-white" onClick={()=> context.setUser(null)}>
                Logout
              </NavLink>
            </NavItem>
          ) : (
            <React.Fragment>
              <NavItem>
                <NavLink tag={Link} to="/signup" className="text-white">
                  Signup
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to="/login" className="text-white">
                  Login
                </NavLink>
              </NavItem>
            </React.Fragment>
          )}
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default NavbarTop;
