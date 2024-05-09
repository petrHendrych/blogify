import BigLogo from "../assets/images/blogify-big.svg?react";
import { Row } from "react-bootstrap";
import Navigation from "@/components/Navigation.tsx";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <Row className="justify-content-center my-4">
      <NavLink to="/" className="text-center">
        <BigLogo />
      </NavLink>
      <Navigation />
    </Row>
  );
};

export default Header;
