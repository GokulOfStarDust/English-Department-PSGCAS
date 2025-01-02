import { NavLink, useNavigate } from "react-router-dom";

export default function UpperNavbar() {
  const navigate = useNavigate();

  return (
    <nav className="bg-navbar-brown text-black sticky top-0 flex flex-row rounded-b-2xl w-screen max-w-full h-20 shadow-md border-[0.1px] border-black z-30">
      <ul className="flex flex-row justify-between items-center ml-3 w-screen max-w-full ">
        <li
          onClick={() => {
            navigate("/");
          }}
          className="list-none flex flex-row items-center hover:cursor-pointer"
        >
          <img
            src="/navbar-logo.png"
            alt="english-dept-logo"
            className="w-14 h-14"
          />
          <p className="font-hanuman hidden md:flex text-black text-base xl:text-xl tracking-wide font-bold ">
            DEPARTMENT OF ENGLISH (AIDED)
          </p>
        </li>
        <div className="list-none flex flex-row justify-around font-plex text-black space-x-4 sm:w-1/2 text-sm divide-breakpoint:text-base xl:text-xl">
          <NavLink
            to={"/"}
            className={({ isActive }) =>
              `p-3 transition hover:bg-[#2B2B2B] hover:text-[#EFEFEF] hover:outline hover:outline-1 hover:outline-black cursor-pointer duration-700 rounded-lg `
            }
          >
            Home
          </NavLink>
          <NavLink
            to={"events"}
            className={({ isActive }) =>
              `p-3 transition hover:bg-[#2B2B2B] hover:text-[#EFEFEF] hover:outline hover:outline-1 hover:outline-black cursor-pointer duration-700 rounded-lg `
            }
          >
            Events
          </NavLink>
          <NavLink
            to={"register"}
            className={({ isActive }) =>
              `p-3 transition hover:bg-[#2B2B2B] hover:text-[#EFEFEF] hover:outline hover:outline-1 hover:outline-black cursor-pointer duration-700 rounded-lg `
            }
          >
            Register
          </NavLink>
        </div>
      </ul>
    </nav>
  );
}
