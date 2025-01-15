import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import eventData from "./EventData";
import competitionData from "./CompetitionData";

export default function Register() {
  const [collegeName, setCollegeName] = useState("Select your college");
  const [selectedEvent, setSelectedEvent] = useState("Select any event");
  const [collegeDropdown, setCollegeDropdown] = useState(false);
  const [eventDropdown, setEventDropdown] = useState(false);
  const [totalRegistrationFee, setTotalRegistrationFee] = useState(0);
  const [UPIRegistratoinLink, setUPIRegistratoinLink] = useState("");
  const [submitInfo, setSubmitInfo] = useState(false);
  const [submitMessage, setSubmitMessage] = useState(" ");
  const [loadingAnimation, setLoadindAnimation] = useState(false);

  async function formDataHandler(data) {
    setSubmitInfo(true);
    data.selectedCompetition = Object.values(data.selectedCompetition).filter(
      (value) => {
        return value != false && value != true;
      },
    );
    console.log(data)
    try {
      const response = await fetch("https://sheetdb.io/api/v1/7egulrlzjjdai", {
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
      setLoadindAnimation(false);
      setSubmitMessage("THANK YOU FOR REGISTERING!!");
      setSubmitInfo(true);
      reset();
    } catch (error) {
      setSubmitMessage("Error Occured. Contact the concerned.");
      setSubmitInfo(true);
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
    

    setUPIRegistratoinLink(
      `upi://pay?pa=vidhyahanumanthk@okicici&pn=Vidhya%20Hanumanth%20Kanagaraj&am=${totalRegistrationFee}&cu=INR&aid=uGICAgMDoj7-7Jg`,
    );
  }, [totalRegistrationFee]);

  useEffect(() => {
    setTotalRegistrationFee(0);
    setValue("selectedCompetition.general-quiz", "");  // Reset all checkboxes
    reset({ ...watch(), selectedCompetition: [] });
  }, [collegeName]);

  return (
    <motion.div
      className="bg-[url('/bg.webp')] bg-cover bg-center bg-fixed flex flex-col space-y-11 justify-start items-center w-full "
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2, delay: 0.1 }}
    >
      <motion.div
        initial={{ opacity: 0, y: 200 }} // Start with opacity 0 and slightly below the viewport
        animate={{ opacity: 1, y: 0 }} // Fade in and slide to its final position
        exit={{ opacity: 0, y: 200 }} // On exit, slide down and fade out
        transition={{ duration: 2, ease: "easeInOut" }}
        className={`${submitInfo ? "" : "hidden"} flex flex-row items-center justify-center bg-[rgba(0,0,0,0.5)] fixed w-[100vw] h-[100svh] !-mt-20 z-40`}
      >
        <div className="bg-[url('/PopUpBackground.jpg')] flex flex-row items-center justify-center w-[94%] max-w-[481px] h-[250px] rounded-xl">
          <div className="flex flex-col  justify-center items-center border border-black w-[97%] max-w-[481px] h-[235px] rounded-lg">
            <h1 className="text-xl sm:text-2xl font-plex font-semibold">
              {submitMessage}
            </h1>
            {loadingAnimation || (
              <p className="text-sm font-plex pt-2 px-5 text-center">
                You'll receive a confirmation mail soon.
                <br />
                Don’t let your partner miss out! Drag them here to register!{" "}
              </p>
            )}
            {loadingAnimation && <div class="loaderRegisterPage"></div>}
            {loadingAnimation || (
              <button
                className="mt-14 p-3 px-8 text-lg font-plex rounded-3xl bg-event-card-black text-white"
                onClick={() => {
                  setSubmitInfo(false);
                  setSubmitMessage("");
                }}
              >
                Close
              </button>
            )}
          </div>
        </div>
      </motion.div>
      <div
        className="flex items-center justify-center bg-[url('/resgistrationTitleBg.webp')] bg-no-repeat bg-cover bg-center w-[90svw] min-h-[60px] md:min-h-[80px] !my-16
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
          className="bg-[url('/registrationFormBg.webp')] bg-cover bg-center w-[88svw] max-w-[1280px] p-5 pt-10 md:p-8 flex flex-row flex-wrap rounded-3xl"
        >
          <div className="flex flex-col w-[90%] md:w-2/4 min-w-[260px] space-y-2 mb-9 md:mb-16">
            <label
              className="font-plex text-white tracking-widest font-medium text-md md:text-xl ml-2"
              htmlFor="name"
            >
              {/* styling of <sup> is available in index.css */}
              NAME<sup>*</sup>
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
              PHONE NO<sup>*</sup>
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
              EMAIL ID<sup>*</sup>
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
              DEPARTMENT<sup>*</sup>
            </label>
            <input
              type="text"
              id="department"
              placeholder="Eg:  B.A. English (SF / Aided)"
              className="w-[90%] min-w-[300px] font-poppins text-black rounded-3xl p-2 pl-4 focus:outline-none placeholder:text-sm"
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
              COLLEGE<sup>*</sup>
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
              {...register("collegeName", {
                validate: (value) =>
                  value == "PSG College of Arts & Science" ||
                  value == "Others" ||
                  "Oops! Looks like you forgot to tell us your college.",
              })}
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
                ROLL NUMBER<sup>*</sup>
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
                COLLEGE NAME<sup>*</sup>
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
          className="bg-[url('/registrationFormBg1.webp')] bg-cover bg-center flex flex-col flex-wrap items-center justify-center
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
              SELECT THE EVENT<sup>*</sup>
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
              {eventData.upcomingEvents.length == 0 ? 
              <li key={"noEvents"} className="w-full rounded-xl p-3 hover:bg-[#373636] hover:text-white cursor-pointer"
              onClick={()=>{setEventDropdown(false);}}>
                No events at the moment.
              </li> :
              eventData.upcomingEvents.map((event, index) => {
                return (
                 (collegeName === event.eventFor ||
                  event.eventFor == "All") ?
                   <li
                    key={`${index}`}
                    onClick={(event) => {
                      setEventDropdown(false);
                      setSelectedEvent(event.target.innerText);
                      setValue("selectedEvent", event.target.innerText);
                    }}
                    className="w-full rounded-xl p-3 hover:bg-[#373636] hover:text-white cursor-pointer"
                  >
                    {event.name}
                  </li>
                  :
                  <li key={"noEventsDropdown"} className="w-full rounded-xl p-3 hover:bg-[#373636] hover:text-white cursor-pointer"
                    onClick={()=>{setEventDropdown(false);}}>
                      No events at the moment.
                  </li>
                );
              })}
            </motion.ul>

            <input
              type="hidden"
              value={selectedEvent}
              {...register("selectedEvent", {
                validate: (value) =>
                  value !== "Select any event" ||
                  "Oops! You forgot to select an event.",
              })}
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
            {(collegeName == "Select your college" || selectedEvent == "Select any event") ? (
              <p className="font-plex text-white font-medium text-sm md:text-lg my-3">
                (Select your college & any event to view the competitions)
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
                    (collegeName === event.eventFor ||
                      event.eventFor == "All") && (event.status == "open") && (
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
                                  "Select atleast one competition";
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

        <div className="bg-[url('/registrationFormBg.webp')] bg-cover bg-center flex flex-col justify-center items-center w-[88svw] max-w-[1280px] text-white p-5 pt-10 md:p-8 rounded-3xl space-y-2">
          <p className="font-plex font-bold mb-4">SCAN THE QR CODE TO PAY</p>
          {totalRegistrationFee == 0 ? <p className="size-[18.2rem] flex flex-row items-center justify-center text-sm outline outline-white outline-1 p-7">(Select the competition to view the QR Code.)</p> :
          <a href={UPIRegistratoinLink} target="_blank">
              <img src={`${totalRegistrationFee}.jpeg`} alt="QR Code to pay the registration fee" className="size-72 object-contain"/>
          </a>
            
          }
          
          {/* <a className="pb-1 bg-white" href={UPIRegistratoinLink}>
            <QRCodeCanvas
              value={UPIRegistratoinLink}
              className="size-60 object-contain m-3"
            />
          </a> */}
          <p className="font-plex font-bold pb-7">
            Amount to be paid : {totalRegistrationFee}
          </p>
          <p className="font-plex text-center text-[0.75rem] sm:text-sm lg:text-base font-medium pb-7">
            If the QR Code doesn't work, send the coressponding registration fee to this number: 9791440504 <br/> (Sorry for the Inconvenicence :/ )
          </p>
          <label
            className="font-plex text-sm font-medium"
            htmlFor="transactionID"
          >
            Enter UPI transaction ID<sup>*</sup>
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
          className="bg-[url('/registrationFormBg.webp')] bg-cover bg-center w-[30%] min-w-[200px] text-lg md:text-3xl text-white font-plex font-bold tracking-widest rounded-3xl p-4 !my-32 "
          onClick={() => {
            setLoadindAnimation(true);
          }}
        >
          SUBMIT
        </button>
      </form>
    </motion.div>
  );
}
