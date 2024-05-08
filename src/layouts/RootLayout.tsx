import { Outlet } from "react-router-dom";
import Header from "../components/Header.tsx";
import { Container } from "react-bootstrap";

const RootLayout = () => {
  return (
    <Container>
      <Header />
      <Outlet />
    </Container>
  );
};

export default RootLayout;
