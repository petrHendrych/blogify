import { Button, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import CZ from "@/assets/images/cz.svg?react";
import GB from "@/assets/images/gb.svg?react";

const Navigation = () => {
  const { t, i18n } = useTranslation();

  const handleSwitchLanguage = () => {
    i18n.changeLanguage(i18n.language === "en" ? "cs" : "en");
  };

  return (
    <div className="d-flex justify-content-between align-items-center">
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
          <Nav.Link as={Link} to="/gardening">
            {t("navbar.gardening")}
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <Button variant="link" onClick={handleSwitchLanguage}>
        {i18n.language === "en" ? (
          <CZ height={25} width={25} />
        ) : (
          <GB height={25} width={25} />
        )}
      </Button>
    </div>
  );
};

export default Navigation;
