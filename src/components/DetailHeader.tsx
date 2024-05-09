import { Col, Row } from "react-bootstrap";
import Logo from "../assets/images/blogify-small.svg?react";
import Navigation from "@/components/Navigation.tsx";
import { NavLink } from "react-router-dom";

const DetailHeader = () => {
  return (
    <Row className="align-items-center my-4">
      <Col xs={6}>
        <NavLink to="/">
          <Logo />
        </NavLink>
      </Col>
      <Col xs={6} className="align-self-end d-flex justify-content-end">
        <Navigation />
      </Col>
    </Row>
  );
};

export default DetailHeader;
