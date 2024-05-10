import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Navigation = () => {
  const { t } = useTranslation();

  return (
    <Nav defaultActiveKey="/">
      <Nav.Item>
        <Nav.Link href="/">{t("navbar.home")}</Nav.Link>
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
      <Nav.Item>
        <Nav.Link as={Link} to="/IT">
          {t("navbar.gardening")}
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
};

export default Navigation;
