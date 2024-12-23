import { Outlet } from "react-router-dom";
import HeaderComponent from "./components/header/header.component";
import FooterComponent from "./components/footer/footer.component";

const PublicComponent = () => {
  return (
    <>
      <HeaderComponent />
      <Outlet />
      <FooterComponent />
    </>
  );
};

export default PublicComponent;

