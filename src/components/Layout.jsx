import { Outlet } from "react-router-dom";
import UpperNavbar from "./upper-navbar";
import BottomNavbar from "./bottom-navbar";
import Footer from "./Footer";

export default function Layout() {
  return (
    <>
      <UpperNavbar />

      <Outlet />
      <Footer />
    </>
  );
}
