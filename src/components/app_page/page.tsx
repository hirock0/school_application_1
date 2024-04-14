"use client";
import Nav_Bar from "../nav_bar/nav";
import Style from "./app.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import Image from "next/image";
import Page2 from "./page_2/page2";
import Bottom from "./bottom/bottom";
export default function App_Page() {
  return (
    <main className=" pt-24">
      <Nav_Bar />
      <div id={Style.page_1} className=" pge1  flex flex-col items-center">
        <h1 className=" text-center mt-5 text-xl underline underline-offset-4">Welcome to our school</h1>
        <div id={Style.thumImage} className=" flex items-center justify-center h-96 w-full mt-5">
            <div className="  w-full pl-16 flex items-center justify-center">
              <Swiper
                autoplay={
                  {
                    delay:5000,
                  } 
                }
                modules={[Pagination,Autoplay,Navigation]}
              >
                  <SwiperSlide>
                    <p id={Style.headingtext} className=" flex justify-center items-center  ">
                    আপনার শিশুকে স্কুলে পাঠান।
                    </p>
                  </SwiperSlide>
                  <SwiperSlide>
                    <p id={Style.headingtext} className=" flex justify-center items-center ">

                    আপনার শিশু আগামী দিনের ভবিষ্যৎ।
                    </p>
                  </SwiperSlide>
              </Swiper>
            </div>
          
        </div>
        <h1 className=" text-center mt-3 underline underline-offset-4 text-xl">
          Overall Institute Details
        </h1>

        <div className="  w-5/6 flex justify-end items-center select-none">
          <div>swipe</div>
          <div>
            <Image
              src={"/all_svg/arrow-right-line.svg"}
              alt="arrow"
              width={25}
              height={25}
            />
          </div>
        </div>
        <div
          id={Style.facilityDiv}
          className=" text-white max-sm:w-5/6 sm:w-5/6  rounded-md overflow-hidden m-4 "
        >
          <Swiper pagination={true} modules={[Pagination, Navigation]}>
            <SwiperSlide>
              <div className=" border bg-slate-800 h-96 flex items-center flex-col ">
                <h1 className=" text-center  underline underline-offset-4 text-xl mt-5 ">
                  Our Teachers
                </h1>
                <div className="  h-full  p-5 ">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
                  cupiditate aliquam, beatae, odio sit nostrum ut assumenda
                  praesentium quasi necessitatibus cum. Dolor in, voluptates ut
                  excepturi distinctio impedit dolores at!
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className=" border bg-cyan-800 h-96 flex items-center flex-col ">
                <h1 className=" text-center  underline underline-offset-4 text-xl mt-5 ">
                  Our Teachers
                </h1>
                <div className="  h-full  p-5 ">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
                  cupiditate aliquam, beatae, odio sit nostrum ut assumenda
                  praesentium quasi necessitatibus cum. Dolor in, voluptates ut
                  excepturi distinctio impedit dolores at!
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className=" border bg-green-800 h-96 flex items-center flex-col ">
                <h1 className=" text-center  underline underline-offset-4 text-xl mt-5 ">
                  Our Teachers
                </h1>
                <div className="  h-full  p-5 ">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
                  cupiditate aliquam, beatae, odio sit nostrum ut assumenda
                  praesentium quasi necessitatibus cum. Dolor in, voluptates ut
                  excepturi distinctio impedit dolores at!
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <Page2 />
      <Bottom />
    </main>
  );
}
