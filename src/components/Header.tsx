/// <reference types="vite-plugin-svgr/client" />
import BigLogo from "../assets/images/blogify-big.svg?react";
import { Form, InputGroup, Nav, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Row className="justify-content-center my-4">
      <BigLogo />

      <div className="d-flex flex-row align-items-center justify-content-between mt-4 p-0">
        <Nav defaultActiveKey="/home">
          <Nav.Item>
            <Nav.Link href="/home">Home</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={Link} to="/contact">
              Cooking
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-2">IT</Nav.Link>
          </Nav.Item>
        </Nav>

        <InputGroup className="w-auto">
          <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
          <Form.Control
            placeholder="Search post..."
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
        </InputGroup>
      </div>
    </Row>
  );
};

export default Header;
