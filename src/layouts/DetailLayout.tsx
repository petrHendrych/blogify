import { Outlet } from "react-router-dom";
import { Container } from "react-bootstrap";
import DetailHeader from "@/components/DetailHeader.tsx";

const DetailLayout = () => {
  return (
    <Container>
      <DetailHeader />
      <Outlet />
    </Container>
  );
};

export default DetailLayout;
