import { NavLink } from "react-router-dom";

export default function UpperNavbar() {
  return (
    <nav className="bg-navbar-brown text-black md:sticky top-0 flex flex-row rounded-b-2xl w-screen max-w-full h-20 shadow-md border-[0.1px] border-black z-30">
      <ul className="flex flex-row justify-between items-center ml-3 w-screen max-w-full ">
        <li className="list-none flex flex-row items-center md:w-6/12">
          <img
            src="./navbar-logo.png"
            alt="english-dept-logo"
            className="w-14 h-14"
          />
          <p className="font-hanuman text-black text-base xl:text-xl tracking-wide font-bold ">
            DEPARTMENT OF ENGLISH
          </p>
        </li>
        <div className="list-none hidden md:flex flex-row justify-around font-plex text-black w-6/12 md:text-base xl:text-xl">
          <NavLink
            to={"/"}
            className={({ isActive }) =>
              `p-3 transition hover:bg-[#dad0b9] cursor-pointer duration-700 rounded-lg ${isActive && `underline`}`
            }
          >
            Home
          </NavLink>
          <NavLink
            to={"events"}
            className={({ isActive }) =>
              `p-3 transition hover:bg-[#dad0b9] cursor-pointer duration-700 rounded-lg ${isActive && `underline`}`
            }
          >
            Event
          </NavLink>
          <NavLink
            to={"register"}
            className={({ isActive }) =>
              `p-3 transition hover:bg-[#dad0b9] cursor-pointer duration-700 rounded-lg ${isActive && `underline`}`
            }
          >
            Register
          </NavLink>
        </div>
      </ul>
    </nav>
  );
}
