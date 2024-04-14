"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import { TalentedChildImageWithDetails } from "./imageInfo/imgInfo";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import Link from "next/link";
import axios from "axios";
import { useEffect, useState } from "react";
export default function TalentedStudents() {
  const TalentInfo = TalentedChildImageWithDetails;

  const [allTalent, setAlltalent] = useState([]);
  const AllTalentedStudents = async () => {
    const allData = await axios.get("/pages/api/talentedStudent");
    const allTalentsData = allData.data.allTalents;
    setAlltalent(allTalentsData);
  };
  console.log();

  useEffect(() => {
    AllTalentedStudents();
  }, []);

  return (
    <div className=" mt-5 ">
      <h1 className=" underline underline-offset-4 font-semibold text-xl">
        Talented childrens:-
      </h1>
      <div className=" bg-slate-600 flex items-center justify-center rounded-md overflow-hidden h-96 mt-5">
        <div className=" bg-cyan-600 w-3/4">
          <Swiper
            pagination={true}
            autoplay={{ delay: 5000 }}
            modules={[Autoplay, Navigation, Pagination]}
          >
            {allTalent?.map((item: any) => (
              <SwiperSlide key={item._id}>
                <div className=" h-96 flex items-center justify-center ">
                  <Image
                    src={item.img}
                    alt="thum"
                    width={380}
                    height={500}
                    className=" rounded-md"
                  />
                  <div className=" text-white absolute backdrop:filter backdrop-blur-3xl opacity-90 bottom-0 w-full h-2/5">
                    <h1 className=" text-center underline underline-offset-4 font-semibold">
                      {item.name}
                    </h1>
                    <div className=" flex flex-col items-center mt-2">
                      <div className="">
                        <div className=" flex  gap-5 text-sm font-thin">
                          <h1>Age:</h1>
                          <h1>{item.age} Years old</h1>
                        </div>
                        <div className=" flex  gap-5 text-sm font-thin">
                          <h1>Awarded:</h1>
                          <h1>{item.awardFor}</h1>
                        </div>
                        <div className=" flex  gap-5 text-sm font-thin">
                          <h1>Class:</h1>
                          <h1>{item.Class}</h1>
                        </div>
                      </div>
                      <Link href={`/talented_student/details/${item.name}`}>
                        <button className=" border w-52 rounded-md text-sm mt-1 pt-1 pb-1 hover:bg-green-800 active:bg-green-950">
                          See more...
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
