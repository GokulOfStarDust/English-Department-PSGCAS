import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

export default function Register() {
  const [collegeName, setCollegeName] = useState("Select your college");
  const [dropdown, setDropdown] = useState(false); 

  async function formDataHandler(data) {
    try {
      const response = await fetch("https://sheetdb.io/api/v1/9qv7pkohx21b7", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const result = await response.json();
      alert("Submit Successfully");
      reset();
      
    } catch (error) {
      console.error("Error posting data:", error);
    }
  }

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    watch,
    formState: { errors },
  } = useForm();


  const events = [
    {
      id: "literature-quiz",
      eventName: "Literature Quiz",
      eventFor: "PSG College of Arts & Science",
      registrationFee: 20,
    },
    {
      id: "pop-quiz",
      eventName: "Pop Quiz",
      eventFor: "PSG College of Arts & Science",
      registrationFee: 20,
    },
    { id: "general-quiz", eventName: "General Quiz", eventFor: "Others", registrationFee: 30, },
  ];

  // const [eventParticipating, setEventParticipating] = useState([])
  // setEventParticipating(Array.isArray(watch("eventParticipating")) ? watch("eventParticipating") : [watch("eventParticipating")]);
  // useEffect(() =>{
  //   console.log(eventParticipating)
  // }
  //  ,[eventParticipating]);

  // useEffect(()=>{console.log(registrationFee)},[registrationFee])


  return (
    <motion.div
      className="bg-[url('/bg.png')] bg-cover bg-center bg-fixed flex flex-col space-y-11 justify-start items-center w-full "
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2, delay: 0.1 }}
    >
      <div
        className="flex items-center justify-center bg-[url('/resgistrationTitleBg.png')] bg-no-repeat bg-cover bg-center w-[90svw] min-h-[60px] md:min-h-[80px] my-16
                            font-josefin text-white font-bold text-[1.7rem] md:text-4xl tracking-[3.8px]
                            rounded-3xl outline outline-1 outline-black"
      >
        REGISTRATION
      </div>

      <form
        className="flex flex-col items-center space-y-5"
        onSubmit={handleSubmit(formDataHandler)}
      >
        <div
          onLoad={() => {
            console.log("Bgloaded");
          }}
          className="bg-[url('/registrationFormBg.png')] bg-cover bg-center w-[88svw] max-w-[1280px] p-5 pt-10 md:p-8 flex flex-row flex-wrap rounded-3xl"
        >
          <div className="flex flex-col w-[90%] md:w-2/4 min-w-[260px] space-y-2 mb-9 md:mb-16">
            <label
              className="font-plex text-white tracking-widest font-medium text-md md:text-xl ml-2"
              htmlFor="name"
            >
              NAME{" "}
            </label>
            <input
              id="name"
              className="w-[90%] min-w-[300px] font-poppins text-black rounded-3xl p-2 pl-4 focus:outline-none"
              type="text"
              {...register("name", { required: "Name is required" })}
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name.message}</p>
            )}
          </div>

          <div className="flex flex-col w-[90%] md:w-2/4 min-w-[260px] space-y-2 mb-9 md:mb-16">
            <label
              className=" font-plex text-white tracking-widest font-medium text-md md:text-xl ml-2"
              htmlFor="phoneNumber"
            >
              PHONE NO
            </label>
            <input
              id="phoneNumber"
              className="w-[90%] min-w-[300px] font-poppins text-black rounded-3xl p-2 pl-4 focus:outline-none"
              type="tel"
              {...register("phoneNumber", {
                required: "Number is required",
                minLength: { value: 10, message: "There must be 10 digits" },
                maxLength: { value: 10, message: "There must be 10 digits" },
              })}
            />
            {errors.phoneNumber && (
              <p className="text-red-500 text-sm">
                {errors.phoneNumber.message}
              </p>
            )}
          </div>

          <div className="flex flex-col w-[90%] md:w-2/4 min-w-[260px] space-y-2 mb-9 md:mb-16">
            <label
              className="font-plex text-white tracking-widest font-medium text-md md:text-xl ml-2"
              htmlFor="email"
            >
              EMAIL ID
            </label>
            <input
              id="email"
              className="w-[90%] min-w-[300px] font-poppins text-black rounded-3xl p-2 pl-4 focus:outline-none"
              type="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Enter a valid email",
                },
              })}
            />

            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}
          </div>

          <div className="flex flex-col w-[90%] md:w-2/4 min-w-[260px] space-y-2 mb-9 md:mb-16">
            <label
              className="font-plex text-white tracking-widest font-medium text-md md:text-xl ml-2"
              htmlFor="department"
            >
              DEPARTMENT
            </label>
            <input
              type="text"
              id="department"
              className="w-[90%] min-w-[300px] font-poppins text-black rounded-3xl p-2 pl-4 focus:outline-none"
              {...register("department", { required: "Enter your department" })}
            />

            {errors.department && (
              <p className="text-red-500 text-sm">
                {errors.department.message}
              </p>
            )}
          </div>

          <div className="flex flex-col w-[90%] md:w-2/4 min-w-[260px] space-y-2 mb-9 md:mb-16">
            <label
              className="font-plex text-white tracking-widest font-medium text-md md:text-xl ml-2"
              htmlFor="collegeName"
            >
              COLLEGE
            </label>
            <div
              className="w-[90%] min-w-[300px] h-11 flex flex-row justify-between items-center text-[0.83rem] sm:text-sm lg:text-base font-plex font-semibold text-[#373636] bg-white rounded-3xl p-2 pl-4 focus:outline-none cursor-pointer"
              onClick={() => {
                setDropdown(true);
              }}
            >
              {collegeName}
              <img
                src="/dropdownIcon.png"
                alt="Dropdown Icon"
                className="object-contain size-9 pr-1"
              />
            </div>

            <motion.ul
              className={`${dropdown ? "" : "hidden"} top-[60%] w-[90%] min-w-[285px] text-[0.83rem] sm:text-sm lg:text-base  font-plex font-semibold text-[#373636] bg-white p-1 rounded-xl divide-y-2`}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: dropdown ? 1 : 0, y: dropdown ? 0 : -20 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <li
                onClick={(event) => {
                  setDropdown(false);
                  setCollegeName(event.target.innerText);
                  setValue("collegeName", event.target.innerText);
                }}
                className="w-full rounded-xl p-3 hover:bg-[#373636] hover:text-white cursor-pointer"
              >
                PSG College of Arts & Science
              </li>

              <li
                onClick={(event) => {
                  setDropdown(false);
                  setCollegeName(event.target.innerText);
                  setValue("collegeName", event.target.innerText);
                }}
                className="w-full rounded-xl p-3 hover:bg-[#373636] hover:text-white cursor-pointer"
              >
                Others
              </li>
            </motion.ul>

            <input
              type="hidden"
              value={collegeName}
              {...register("collegeName", { required: "Select your college" })}
            />

            {errors.collegeName && (
              <p className="text-red-500 text-sm">
                {errors.collegeName.message}
              </p>
            )}
          </div>

          {collegeName === "PSG College of Arts & Science" && (
            <div className="flex flex-col w-[90%] md:w-2/4 min-w-[260px] space-y-2 mb-9 md:mb-16">
              <label
                className="font-plex text-white tracking-widest font-medium text-md md:text-xl ml-2"
                htmlFor="rollNumber"
              >
                ROLL NUMBER
              </label>
              <input
                id="rollNumber"
                className="w-[90%] min-w-[300px] font-poppins text-black rounded-3xl p-2 pl-4 focus:outline-none"
                type="text"
                {...register("rollNumber", {
                  required: "Roll Number is required",
                })}
              />

              {errors.rollNumber && (
                <p className="text-red-500 text-sm">
                  {errors.rollNumber.message}
                </p>
              )}
            </div>
          )}

          {collegeName === "Others" && (
            <div className="flex flex-col w-[90%] md:w-2/4 min-w-[260px] space-y-2 mb-9 md:mb-16">
              <label
                className="font-plex text-white tracking-widest font-medium text-md md:text-xl ml-2"
                htmlFor="otherCollegeName"
              >
                COLLEGE NAME
              </label>
              <input
                id="otherCollegeName"
                className="w-[90%] min-w-[300px] font-poppins text-black rounded-3xl p-2 pl-4 focus:outline-none"
                type="text"
                {...register("otherCollegeName", {
                  required: "College Name is required",
                })}
              />

              {errors.otherCollegeName && (
                <p className="text-red-500 text-sm">
                  {errors.otherCollegeName.message}
                </p>
              )}
            </div>
          )}
        </div>

        {/*It dynamically adds the events to be selected */}

        <div
          className="bg-[url('/registrationFormBg1.png')] bg-cover bg-center flex flex-row flex-wrap items-center justify-center
                                w-[88svw] max-w-[1340px] p-5 pt-10 md:p-8 rounded-3xl"
        >
          <p className="flex justify-center items-center w-[100%] h-[6svh] font-plex font-semibold text-white text-xl md:text-3xl tracking-wider outline outline-1 outline-white rounded-3xl ">
            EVENTS PARTICIPATING
          </p>
          {events.map((event, index) => {
            return (
              (collegeName === event.eventFor) && (
                <div
                  key={index}
                  className="flex flex-row p-3 mx-2 md:mx-6 space-x-3 mt-10"
                >
                  <input
                    id={event.id}
                    type="checkbox"
                    value={event.eventName}
                    className="size-6 accent-[#ca9b6f] cursor-pointer"
                    {...register(`eventParticipating`, {
                      required: "Select atleast one event",
                    })}
                  />
                  <label
                    className="font-plex text-white tracking-widest font-medium text-md md:text-xl cursor-pointer"
                    htmlFor={event.id}
                  >
                    {event.eventName}
                  </label>
                </div>
              )
            );
          })}
          {errors.eventParticipating && (
            <p className="flex justify-center items-center w-full text-red-500 text-sm mt-5">
              {errors.eventParticipating.message}
            </p>
          )}
        </div>

        <div className="bg-[url('/registrationFormBg.png')] bg-cover bg-center flex flex-col justify-center items-center w-[88svw] max-w-[1280px] text-white p-5 pt-10 md:p-8 rounded-3xl space-y-2">
          <p className="font-plex font-bold">SCAN THE QR CODE TO PAY</p>
          <a
            className="pb-8"
            href={`upi://pay?pa=gokulgopalan18-1@oksbi&pn=Gokul%20Gopalan&am=${registrationFee}.00&cu=INR&aid=uGICAgICN1d6XRQ`}
          >
            <img
              src="/qr.jpeg"
              alt="QR code for payment"
              className="size-60 object-contain"
            />
          </a>
          <label className="" htmlFor="transactionID">
            Enter UPI transaction ID
          </label>
          <input
            id="transactionID"
            type="text"
            placeholder="Eg: 12345678XXXX"
            className="text-text-black rounded-3xl p-2 pl-4"
            {...register("transactionID", {
              required: "UPI transaction ID is required",
              minLength: { value: 12, message: "There must be 12 digits" },
              maxLength: { value: 12, message: "There must be 12 digits" },
            })}
          />
          {errors.transactionID && (
            <p className="text-red-500 text-sm">
              {errors.transactionID.message}
            </p>
          )}
        </div>

        <button
          type="submit"
          className="bg-[url('/registrationFormBg.png')] bg-cover bg-center w-[30%] min-w-[200px] text-lg md:text-3xl text-white font-plex font-bold tracking-widest rounded-3xl p-4 !my-32 "
        >
          SUBMIT
        </button>
      </form>
    </motion.div>
  );
}
