import { Outlet } from "react-router-dom";
import StyledNavbar from "./StyledNavbar";

function AppLayout() {
  return (
    <>
      <StyledNavbar />
      <Outlet />
    </>
  );
}

export default AppLayout;
