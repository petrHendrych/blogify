import { Outlet } from "react-router-dom";
import { Container } from "react-bootstrap";
import DetailHeader from "@/components/DetailHeader.tsx";
import ScrollToTop from "@/components/ScrollToTop.tsx";

const DetailLayout = () => {
  return (
    <Container>
      <ScrollToTop />
      <DetailHeader />
      <Outlet />
    </Container>
  );
};

export default DetailLayout;
