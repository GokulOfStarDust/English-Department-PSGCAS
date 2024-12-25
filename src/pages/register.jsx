import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import eventData from "./EventData";
import competitionData from "./CompetitionData";
import { select } from "framer-motion/client";

export default function Register() {
  const [collegeName, setCollegeName] = useState("Select your college");
  const [selectedEvent, setSelectedEvent] = useState("Select any event");
  const [collegeDropdown, setCollegeDropdown] = useState(false);
  const [eventDropdown, setEventDropdown] = useState(false);
  const [totalRegistrationFee, setTotalRegistrationFee] = useState(0);

  async function formDataHandler(data) {
    data.selectedCompetition = Object.values(data.selectedCompetition).filter(
      (value) => {
        return value != false && value != true;
      },
    );
    try {
      const response = await fetch("https://sheetdb.io/api/v1/3yw0iyl2l7e1e", {
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

  useEffect(() => {
    console.log(totalRegistrationFee);
  }, [totalRegistrationFee]);

  useEffect(() => {
    setTotalRegistrationFee(0);
  }, [collegeName]);

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
                setCollegeDropdown(!collegeDropdown);
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
              className={`${collegeDropdown ? "" : "hidden"} top-[60%] w-[90%] min-w-[285px] text-[0.83rem] sm:text-sm lg:text-base  font-plex font-semibold text-[#373636] bg-white p-1 rounded-xl divide-y-2`}
              initial={{ opacity: 0, y: -20 }}
              animate={{
                opacity: collegeDropdown ? 1 : 0,
                y: collegeDropdown ? 0 : -20,
              }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <li
                onClick={(event) => {
                  setCollegeDropdown(false);
                  setCollegeName(event.target.innerText);
                  reset({ ...watch(), selectedCompetition: {} });

                  setValue("collegeName", event.target.innerText);
                }}
                className="w-full rounded-xl p-3 hover:bg-[#373636] hover:text-white cursor-pointer"
              >
                PSG College of Arts & Science
              </li>

              <li
                onClick={(event) => {
                  setCollegeDropdown(false);
                  reset({ ...watch(), selectedCompetition: {} });
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
          className="bg-[url('/registrationFormBg1.png')] bg-cover bg-center flex flex-col flex-wrap items-center justify-center
                                w-[88svw] max-w-[1340px] p-5 pt-10 md:p-8 rounded-3xl"
        >
          <p className="flex justify-center items-center w-[100%] h-[6svh] font-plex font-semibold text-white text-xl md:text-3xl tracking-wider outline outline-1 outline-white rounded-3xl ">
            EVENTS PARTICIPATING
          </p>
          <div className="flex flex-col flex-wrap items-center w-[95%] min-w-[260px] space-y-2 mb-9 md:mb-16">
            <label
              className="font-plex text-white tracking-widest font-medium text-md md:text-xl mt-10 "
              htmlFor="eventdropdown"
            >
              SELECT THE EVENT
            </label>
            <div
              id="eventdropdown"
              className="w-[60%] min-w-[300px] h-11 flex flex-row justify-between items-center text-[0.83rem] sm:text-sm lg:text-base font-plex font-semibold text-[#373636] bg-white rounded-3xl p-2 pl-5 focus:outline-none cursor-pointer"
              onClick={() => {
                setEventDropdown(!eventDropdown);
              }}
            >
              {selectedEvent}
              <img
                src="/dropdownIcon.png"
                alt="Dropdown Icon"
                className="object-contain size-9 pr-1"
              />
            </div>

            <motion.ul
              className={`${eventDropdown ? "" : "hidden"} top-[60%] w-[60%] min-w-[285px] text-[0.83rem] sm:text-sm lg:text-base  font-plex font-semibold text-[#373636] bg-white p-1 rounded-xl divide-y-2`}
              initial={{ opacity: 0, y: -20 }}
              animate={{
                opacity: eventDropdown ? 1 : 0,
                y: eventDropdown ? 0 : -20,
              }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              {eventData.upcomingEvents.map((event, index) => {
                return (
                  <li
                    key={index}
                    onClick={(event) => {
                      setEventDropdown(false);
                      setSelectedEvent(event.target.innerText);
                      setValue("selectedEvent", event.target.innerText);
                    }}
                    className="w-full rounded-xl p-3 hover:bg-[#373636] hover:text-white cursor-pointer"
                  >
                    {event.name}
                  </li>
                );
              })}
            </motion.ul>

            <input
              type="hidden"
              value={selectedEvent}
              {...register("selectedEvent", { required: "Select any event" })}
            />

            {errors.selectedEvent && (
              <p className="text-red-500 text-sm">
                {errors.selectedEvent.message}
              </p>
            )}
          </div>

          <fieldset className="flex flex-col items-center justify-center border border-gray-400 rounded p-6">
            <legend className="font-plex text-white tracking-widest font-medium text-sm md:text-lg mt-10 ">
              SELECT THE COMPETITIONS :
            </legend>
            {selectedEvent == "Select any event" ? (
              <p className="font-plex text-white font-medium text-sm md:text-lg my-3">
                (Select any event to view the competitions)
              </p>
            ) : (
              <div className="flex flex-row flex-wrap">
                {(
                  competitionData[
                    eventData.upcomingEvents.find(
                      (event) => event.name == selectedEvent,
                    )?.id
                  ] || []
                ).map((event, index) => {
                  return (
                    collegeName === event.eventFor && (
                      <div
                        key={index}
                        className="flex flex-row  p-3 mx-2 md:mx-6 space-x-3"
                      >
                        <input
                          id={event.id}
                          type="checkbox"
                          value={event.name}
                          className="size-6 accent-[#ca9b6f] cursor-pointer"
                          {...register(
                            `selectedCompetition.${event.id}`,
                            {
                              validate: () => {
                                const selected = watch("selectedCompetition");
                                const validationResult =
                                  (selected &&
                                    Object.values(selected).some(
                                      (value) => value,
                                    )) ||
                                  "Select at least one competition";
                                console.log(
                                  "Validation Result: ",
                                  validationResult,
                                );
                                return validationResult;
                              },
                            },
                            { onChange: true },
                          )}
                          onChange={(e) => {
                            if (e.target.checked) {
                              setTotalRegistrationFee(
                                (prev) => prev + event.RegisterationFee,
                              );
                            } else {
                              setTotalRegistrationFee(
                                (prev) => prev - event.RegisterationFee,
                              );
                            }
                          }}
                        />
                        <label
                          className="font-plex text-white tracking-widest font-medium text-md md:text-xl cursor-pointer"
                          htmlFor={event.id}
                        >
                          {event.name}
                        </label>
                      </div>
                    )
                  );
                })}
              </div>
            )}
            {errors.selectedCompetition &&
              Object.keys(errors.selectedCompetition).length > 0 && (
                <p className="flex justify-center items-center w-full text-red-500 text-sm mt-5">
                  Select atleast one competition
                </p>
              )}
          </fieldset>
        </div>

        <div className="bg-[url('/registrationFormBg.png')] bg-cover bg-center flex flex-col justify-center items-center w-[88svw] max-w-[1280px] text-white p-5 pt-10 md:p-8 rounded-3xl space-y-2">
          <p className="font-plex font-bold">SCAN THE QR CODE TO PAY</p>
          <a
            className="pb-1"
            href={`upi://pay?pa=gokulgopalan18-1@oksbi&pn=Gokul%20Gopalan&am=${totalRegistrationFee}.00&cu=INR&aid=uGICAgICN1d6XRQ`}
          >
            <img
              src="/qr.jpeg"
              alt="QR code for payment"
              className="size-60 object-contain"
            />
          </a>
          <p className="font-plex font-bold pb-7">
            Amount to be paid : {totalRegistrationFee}
          </p>
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
