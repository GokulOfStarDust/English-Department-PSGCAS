import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '/src/index.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

.3

const councilBearers = [
  {
    header : "/joint-secretaries-header.webp",
    male: {
      name: "Sriram",
      position: "Joint Secretary",
      image: "/sriram-secretary.webp",
    },
    female: {
      name: "Deepana",
      position: "Joint Secretary",
      image: "/deepana-secretary.webp",
    }
  },
  {

    header : "/chairperson-header.webp",
    male: {
      name: "Arun",
      position: "Chairperson",
      image: "/arun-chairperson.webp",
    },
    female: {
      name: "Gopika",
      position: "Chairperson",
      image: "/gopika-chairperson.webp",
    }
  },
]


export default function CouncilBearersCarousel() {
    return (
        <Swiper
            spaceBetween={30}
            
            centeredSlides={true}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper items-center justify-center h-full"
          >

          {  councilBearers.map((councilBearer) => {
              return (
                <SwiperSlide className="my-auto">
            
                  <div className="overflow-hidden w-[95vw] min-h-[447px] flex flex-col items-center justify-center  bg-opacity-50 rounded-3xl mx-auto gap-x-6 gap-y-14 lg:gap-y-0 ">
                    <img src={councilBearer.header} alt="" className="w-[70vw] min-w-[350px] max-w-[1100px]" />
                    <div className="w-full flex flex-row justify-around items-center">
                      <div className="flex flex-col items-center justify-center w-full gap-y-2">
                        <img src={councilBearer.male.image} alt="" className="object-contain w-[29%] lg:-mt-10 min-w-[140px] divide-breakpoint:min-w-[190px]" />
                        <p className="text-white text-xl md:text-2xl lg:text-3xl font-josefin font-semibold italic">{councilBearer.male.name}</p>
                      </div>
                      <div className="flex flex-col items-center justify-center w-full gap-y-2">
                        <img src={councilBearer.female.image} alt="" className="object-contain w-[29%] lg:-mt-10 min-w-[140px] divide-breakpoint:min-w-[190px]" /> 
                        <p className="text-white text-xl md:text-2xl lg:text-3xl font-josefin font-semibold italic">{councilBearer.female.name}</p>
                      </div>
                    </div>
                  </div>
                  
                </SwiperSlide>
              )

            })}

            {/* <SwiperSlide className="my-auto">
            
              <div className="overflow-hidden w-[95vw] min-h-[447px] flex flex-col items-center justify-center  bg-opacity-50 rounded-3xl mx-auto gap-x-6 gap-y-14 lg:gap-y-0 ">
                <img src="/joint-sec-white.png" alt="" className="w-[70vw] min-w-[350px] max-w-[1100px]" />
                <div className="w-full flex flex-row justify-around items-center">
                  <div className="flex flex-col items-center justify-center w-full gap-y-2">
                    <img src="/deepana-secretary.webp" alt="" className="object-contain w-[29%] lg:-mt-10 min-w-[140px] divide-breakpoint:min-w-[190px]" />
                    <p className="text-white text-xl md:text-2xl lg:text-3xl font-josefin font-semibold italic">Deepana</p>
                  </div>
                  <div className="flex flex-col items-center justify-center w-full gap-y-2">
                    <img src="/sriram-secretary.webp" alt="" className="object-contain w-[29%] lg:-mt-10 min-w-[140px] divide-breakpoint:min-w-[190px]" /> 
                    <p className="text-white text-xl md:text-2xl lg:text-3xl font-josefin font-semibold italic">Sriram</p>
                  </div>
                </div>
              </div>
              
            </SwiperSlide>
            <SwiperSlide className="my-auto">
              
              <div className="overflow-hidden w-[95vw] min-h-[447px] flex flex-col items-center justify-center  bg-opacity-50 rounded-3xl mx-auto gap-x-6 gap-y-14 lg:gap-y-0 my-auto">
                <img src="/secretaries-header.webp" alt="" className="w-[70vw] min-w-[350px] max-w-[1100px]" />
                <div className="w-full flex flex-row justify-around items-center">
                  <div className="flex flex-col items-center justify-center w-full gap-y-2">
                    <img src="/deepana-secretary.webp" alt="" className="object-contain w-[29%] lg:-mt-10 min-w-[140px] divide-breakpoint:min-w-[190px]" />
                    <p className="text-white text-xl md:text-2xl lg:text-3xl font-josefin font-semibold italic">Deepana</p>
                  </div>
                  <div className="flex flex-col items-center justify-center w-full gap-y-2">
                    <img src="/sriram-secretary.webp" alt="" className="object-contain w-[29%] lg:-mt-10 min-w-[140px] divide-breakpoint:min-w-[190px]" /> 
                    <p className="text-white text-xl md:text-2xl lg:text-3xl font-josefin font-semibold italic">Sriram</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide className="my-auto">
              
              <div className="overflow-hidden w-[95vw] min-h-[447px] flex flex-col items-center justify-center bg-opacity-50 rounded-3xl mx-auto gap-x-6 gap-y-14 lg:gap-y-0 my-auto ">
                <img src="/chairperson-header.webp" alt="" className="w-[70vw] min-w-[350px] max-w-[1100px]" />
                <div className="w-full flex flex-row justify-around items-center">
                  <div className="flex flex-col items-center justify-center w-full gap-y-2">
                    <img src="/arun-chairperson.webp" alt="" className="object-contain w-[29%] lg:-mt-10 min-w-[140px] divide-breakpoint:min-w-[190px]" />
                    <p className="text-white text-xl md:text-2xl lg:text-3xl font-josefin font-semibold italic">Arun</p>
                  </div>
                  <div className="flex flex-col items-center justify-center w-full gap-y-2">
                    <img src="/gopika-chairperson.webp" alt="" className="object-contain w-[29%] lg:-mt-10 min-w-[140px] divide-breakpoint:min-w-[190px]" /> 
                    <p className="text-white text-xl md:text-2xl lg:text-3xl font-josefin font-semibold italic">Gopika</p>
                  </div>
                </div>
              </div>
            </SwiperSlide> */}
            
          </Swiper>
          
    )
}