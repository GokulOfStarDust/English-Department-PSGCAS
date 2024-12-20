import { Outlet } from "react-router-dom";
import UpperNavbar from "./upper-navbar";
import BottomNavbar from "./bottom-navbar";

export default function Layout() {
  return (
    <>
      <UpperNavbar />
      <BottomNavbar />
      <Outlet />
    </>
  );
}
