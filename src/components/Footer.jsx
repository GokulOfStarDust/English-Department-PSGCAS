import { useNavigate } from "react-router-dom"

export default function Footer(){

    const navigate = useNavigate();

    return(
        <footer className="flex flex-col w-[99.8%] mx-auto mt-6 rounded-tl-[2rem] rounded-tr-[2rem] text-sm text-background-brown">
            <div className="flex flex-row flex-wrap items-center justify-between bg-[#232323] w-full  mt-6 rounded-tl-[2rem] rounded-tr-[2rem] pt-8 lg:pt-0">
                    <div className="flex flex-row divide-x-2">
                        <ul className="font-plex space-y-3 py-3 pl-9 pr-8 cursor-pointer">
                            <li onClick={()=>{navigate("/")}}>Home</li>
                            <li onClick={()=>{navigate("/events")}}>Events</li>
                            <li onClick={()=>{navigate("/register")}}>Registeration</li>
                        </ul>
                        
                        <div className="flex flex-row flex-wrap items-center justify-center font-plex pl-5">
                            <h1 className="mr-4">Follow us on</h1>
                            <a href="https://www.instagram.com/englishdept.psgcas/?utm_source=ig_web_button_share_sheet" target="_blank">
                                <div className="flex flex-row items-center space-x-2 p-2 border border-white rounded-xl">
                                    <img src="/instagram-icon.svg" alt="" className="size-5 object-contain"/>
                                    <p className="text-[0.7rem]">ENGLISHDEPT.PSGCAS</p>
                                </div>
                            </a>
                        </div>
                    </div>

                    <div className="flex flex-col items-start justify-center font-plex space-y-6 pl-9 pr-5 py-16 lg:py-10 between-lg-xl:mr-24">                             
                        <h1 className="text-bases font-medium underline underline-offset-4">Contact Us</h1>                   
                        <div className="flex flex-col  items-start space-y-4 w-full">
                            <p className="">
                                <span className="font-medium">N.S. Muguntharajan</span> 
                                <span className="text-[#faf7e6]"> (Staff Incharge)</span> - 
                                <a href="tel:9789642676" className=" hover:underline"> 97896 42676</a>
                            </p>                                
                            <p className="">
                                <span className="font-medium">Gopika</span> 
                                <span className="text-[#faf7e6]"> (Chairperson)</span> - 
                                <a href="tel:9789642676" className=" hover:underline"> 97896 42676</a>
                            </p>
                        </div>
                    </div>     
            </div>
                    

               
           
            <div className="flex flex-row items-center justify-center text-black bg-background-brown h-[55px] divide-x-2 divide-black space-x-3 rounded-2xl">
                <div>
                    <p className="text-sm md:text-base font-medium font-plex">
                    Crafted with love by <span className="font-semibold">Gokul G</span>
                    </p>
                </div>
                <div className="flex flex-row space-x-2 pl-3">
                   <a href="https://www.instagram.com/theonefromthestardust/profilecard/?igsh=MW5odXdkNHlyMTh4cw==" target="_blank"> <img src="/instagram-icon-black.png" alt="" className="size-6 object-contain" /> </a>
                   <a href="https://www.linkedin.com/in/gokul-g-046b51292/" target="_blank"> <img src="/linkedin-icon-black.png" alt="" className="size-6 object-contain"/> </a>
                   <a href="https://github.com/GokulOfStarDust" target="_blank"> <img src="/github-icon-black.png" alt="" className="size-6 object-contain"/> </a>
                </div>

            </div>
            

        </footer>
    )
}