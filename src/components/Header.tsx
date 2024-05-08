/// <reference types="vite-plugin-svgr/client" />
import BigLogo from "../assets/images/blogify-big.svg?react";
import { Nav, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Header = () => {
  const { t } = useTranslation();

  return (
    <Row className="justify-content-center my-4">
      <BigLogo />

      <div className="d-flex flex-row align-items-center justify-content-between mt-4">
        <Nav defaultActiveKey="/home">
          <Nav.Item>
            <Nav.Link href="/home">{t("navbar.home")}</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={Link} to="/cooking">
              {t("navbar.cooking")}
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={Link} to="/IT">
              {t("navbar.IT")}
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </div>
    </Row>
  );
};

export default Header;
