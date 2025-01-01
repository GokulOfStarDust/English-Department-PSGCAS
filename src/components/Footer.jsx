import { useNavigate } from "react-router-dom";

export default function Footer() {
  const navigate = useNavigate();

  return (
    <footer className="flex flex-col w-[99.8%] mx-auto rounded-tl-[2rem] rounded-tr-[2rem] text-sm text-white font-plex">
      <div className="flex flex-row flex-wrap items-center justify-between bg-event-card-black w-full rounded-tl-[2rem] rounded-tr-[2rem] pt-8 lg:pt-0 lg:pl-4">
        <div className="flex flex-row divide-x-[1px] divide-[rgba(255,255,255,0.5)]">
          <ul className="font-normal text-[0.76rem] md:text-sm space-y-3 py-3 pl-7 pr-9 cursor-pointer">
            <li
              className="hover:underline hover:underline-offset-4"
              onClick={() => {
                navigate("/");
              }}
            >
              Home
            </li>
            <li
              className="hover:underline hover:underline-offset-4"
              onClick={() => {
                navigate("/events");
              }}
            >
              Events
            </li>
            <li
              className="hover:underline hover:underline-offset-4"
              onClick={() => {
                navigate("/register");
              }}
            >
              Registeration
            </li>
          </ul>

          <div className="flex flex-row flex-wrap items-center justify-center text-[0.76rem] md:text-sm font-plex pl-5 -space-y-7 sm:space-y-0">
            <h1 className="mr-4 font-medium">Follow us on</h1>
            <a
              href="https://www.instagram.com/englishdept.psgcas/?utm_source=ig_web_button_share_sheet"
              target="_blank"
            >
              <div className="flex flex-row items-center space-x-2 p-2 border border-white rounded-xl">
                <img
                  src="/instagram-icon.svg"
                  alt=""
                  className="size-4 object-contain"
                />
                <p className="text-[0.7rem] font-light">ENGLISHDEPT.PSGCAS</p>
              </div>
            </a>
          </div>
        </div>

        <div className="flex flex-col items-start justify-center space-y-4 pl-6 pr-2 pt-8 pb-7 lg:py-10 between-lg-xl:mr-24">
          <h1 className="text-base font-semibold">Contact Us</h1>
          <div className="flex flex-col items-start space-y-1 md:space-y-2 w-full text-[0.75rem] md:text-sm">
            <p className="font-light">
              <span className="">N S Muguntharajan</span>
              <span className="text-gray-200"> (Staff Incharge)</span> -
              <a href="tel:9789642676" className=" hover:underline">
                {" "}
                9789642676
              </a>
            </p>
            <p className="font-light">
              <span className="">Gopika</span>
              <span className="text-gray-200"> (Chairperson)</span> -
              <a href="tel:9789642676" className=" hover:underline">
                {" "}
                9789642676
              </a>
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-row items-center justify-center text-white bg-event-card-black h-[55px] divide-x-2 space-x-3  border-t-2">
        <div>
          <p className="text-[0.75rem] md:text-sm font-medium">
            Crafted with love by <span className="font-bold">Gokul G</span>
          </p>
        </div>
        <div className="flex flex-row space-x-3 pl-3">
          <a
            href="https://www.instagram.com/theonefromthestardust/profilecard/?igsh=MW5odXdkNHlyMTh4cw=="
            target="_blank"
          >
            {" "}
            <img
              src="/instagram-icon-black.png"
              alt=""
              className="size-5 object-contain invert"
            />{" "}
          </a>
          <a
            href="https://www.linkedin.com/in/gokul-g-046b51292/"
            target="_blank"
          >
            {" "}
            <img
              src="/linkedin-icon-black.png"
              alt=""
              className="size-5 object-contain invert"
            />{" "}
          </a>
          <a href="https://github.com/GokulOfStarDust" target="_blank">
            {" "}
            <img
              src="/github-icon-black.png"
              alt=""
              className="size-5 object-contain invert"
            />{" "}
          </a>
        </div>
      </div>
    </footer>
  );
}
