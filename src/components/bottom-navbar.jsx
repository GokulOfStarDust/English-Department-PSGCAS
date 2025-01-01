import { NavLink } from "react-router-dom";

export default function BottomNavbar() {
  return (
    <nav
      className="fixed left-0 right-0 bottom-[30px] flex md:hidden flex-row justify-around items-center
         bg-event-card-black bg-opacity-80 border-2 border-black border-opacity-20 rounded-xl h-20 w-2/4 min-w-[308px] mx-auto z-40"
    >
      <NavLink
        to={"/"}
        className="w-14 h-14 rounded-full border-4 border-black border-opacity-80 bg-background-brown"
      >
        <img
          className="p-3 opacity-95"
          src="/home-nav-icon.svg"
          alt="home icon"
        />
      </NavLink>
      <NavLink
        to={"events"}
        className="w-14 h-14 rounded-full border-4 border-black border-opacity-80 bg-background-brown"
      >
        <img
          className="p-2 opacity-85"
          src="/calendar-nav-icon.svg"
          alt="event icon"
        />
      </NavLink>
      <NavLink
        to={"register"}
        className="w-14 h-14 rounded-full border-4 border-black border-opacity-80 bg-background-brown"
      >
        <img
          className="p-[0.65rem] ml-[0.1rem] opacity-90"
          src="/register-nav-icon.svg"
          alt="register icon"
        />
      </NavLink>
    </nav>
  );
}
