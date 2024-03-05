import { Outlet } from "react-router-dom";
import StyledNavbar from "./StyledNavbar";

function AppLayout() {
  return (
    <>
      <StyledNavbar />
      <div style={{ padding: "8vh 3vh 0vh 3vh" }}>
        <Outlet />
      </div>
    </>
  );
}

export default AppLayout;
