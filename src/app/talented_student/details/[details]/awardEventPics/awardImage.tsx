"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Swiper, SwiperProps, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import axios from "axios";
import Style from "./awardEvent.module.css";
export default function AwardImages(props: any) {
  const StudentName = props.Name;
  const [eventPics, setEventPics] = useState([]);
  const onStudentPriceCeremonyEvents = async () => {
    const StudentDetailsData = await axios.get("/pages/api/awardGetting");
    const StudentDetails = StudentDetailsData.data.allEventDetails;
    const filterData = StudentDetails.filter(
      (item: any) => item.name == StudentName
    );
    setEventPics(filterData);
  };

  useEffect(() => {
    onStudentPriceCeremonyEvents();
  }, []);
  return (
    <div>
      {!eventPics ? (
        <div>Data not found</div>
      ) : (
        <div className="">
          <Swiper pagination={true} modules={[Pagination, Navigation]}>
            {eventPics.map((item: any) => (
              <SwiperSlide key={item._id}>
                <div className=" flex items-center justify-center p-5">
                  <div className=" relative ">
                    <Image
                      src={item.eventPics}
                      alt="image not in database"
                      width={500}
                      height={500}
                      id={Style.imgs}
                      className=" text-xs rounded-md overflow-hidden"
                    />
                    <div className=" rounded-b-md flex pt-5 flex-col items-center text-white absolute right-0 left-0 bottom-0 h-2/6 backdrop:filter backdrop-blur-3xl opacity-95">
                      <div className=" flex justify-between w-72 max-sm:w-52 max-sm:gap-2 text-nowrap gap-4 max-sm:text-sm">
                        <h1>Reason of award :</h1>
                        <h1>{item.awardReason}</h1>
                      </div>
                      <div className=" flex justify-between w-72 max-sm:w-52 max-sm:gap-2 text-nowrap gap-4 max-sm:text-sm">
                        <h1>Place :</h1>
                        <h1>{item.awardGettingPlace}</h1>
                      </div>
                      <div className="flex justify-between w-72 max-sm:w-52 max-sm:gap-2 text-nowrap gap-4 max-sm:text-sm">
                        <h1>Date :</h1>
                        <h1>{item.Date}</h1>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}
    </div>
  );
}
