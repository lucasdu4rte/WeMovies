import { Outlet } from "react-router-dom";
import { Container } from "../Container";
import Header from "../Header";

const RootLayout = () => {
  return (
    <>
      <Header />

      <Container>
        <Outlet />
      </Container>
    </>
  )
};

export default RootLayout;
