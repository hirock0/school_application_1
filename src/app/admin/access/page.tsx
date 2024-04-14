"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import axios from "axios";
import { useRouter } from "next/navigation";
import Link from "next/link";
export default function Admin(props:any) {
  const router = useRouter();
  const [TalentedDetails, setTalentedDetails] = useState({
    name: "",
    age: "",
    Class: "",
    awardFor: "",
    desciptions: "",
    address: "",
    img: "",
  });

  const [Picture, setPicture] = useState("");
  const onBase64Pics = (e: any) => {
    try {
      const reader: any = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload = () => {
        setPicture(reader.result);
        setTalentedDetails({ ...TalentedDetails, img: reader.result });
      };
    } catch (error: any) {
      console.log("file not found");
    }
  };

  const onTalentStudentDetails = async (e: any) => {
    e.preventDefault();
    const SendData = await axios.post(
      "/pages/api/talentedStudent",
      TalentedDetails
    );
    const validator = SendData.data.success;
    if (!validator) {
      alert("File is not sent!");
    } else {
      alert("File is sent successfully!");
      setTalentedDetails({
        ...TalentedDetails,
        name: "",
        age: "",
        Class: "",
        awardFor: "",
        desciptions: "",
        address: "",
        img: "",
      });
    }
  };

  // Award Getting start

  const [AwardGetting, setAwardGetting] = useState({
    name: "",
    awardReason: "",
    awardGettingPlace: "",
    Date: "",
    eventPics: "",
  });
  const [eventPicture, setEventPicture] = useState("");
  const onBase64EventPics = async (e: any) => {
    try {
      const reader: any = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload = () => {
        setEventPicture(reader.result);
        setAwardGetting({ ...AwardGetting, eventPics: reader.result });
      };
    } catch (error: any) {
      console.log("file not found");
    }
  };

  const onAwardGettingDetails = async (e: any) => {
    e.preventDefault();
    const Senddata = await axios.post("/pages/api/awardGetting", AwardGetting);
    const validator = Senddata.data.success;
    if (!validator) {
      alert("Data is not sent");
    } else {
      alert("Data is sent successfully!");
      setAwardGetting({
        ...AwardGetting,
        name: "",
        awardReason: "",
        awardGettingPlace: "",
        Date: "",
        eventPics: "",
      });
    }
  };
  // Notice_board_start

  const [pdfData, setPdfData] = useState({
    pdfName: "",
    pdfFile: "",
    recentDate: "",
  });
  const [pdf, setPdf] = useState("");
  const onBase64NoticeBoard = async (e: any) => {
    try {
      const reader: any = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload = () => {
        setPdf(reader.result);
        setPdfData({ ...pdfData, pdfFile: reader.result });
      };
    } catch (error: any) {
      console.log("file not found");
    }
  };

  const onNoticeBoard = async (e: any) => {
    e.preventDefault();
    const sendNoticeData = await axios.post("/pages/api/notice_board", pdfData);
    if (!sendNoticeData.data.success) {
      alert("Something went wrong");
    } else {
      alert("Data is sent");
      router.refresh();
      setPdfData({
        pdfName: "",
        pdfFile: "",
        recentDate: "",
      });
    }
  };

  const onDateAndTime = () => {
    const alldateAndtime = new Date();
    const date = alldateAndtime.toLocaleDateString();
    setPdfData({ ...pdfData, recentDate: date });
  };














// notice_board_end









  useEffect(() => {
    onDateAndTime();
  }, []);

  return (
    <main className="text-white p-5">
      <div className=" flex flex-col gap-4  ">
        <div className=" bg-red-400 p-5 rounded-md ">
          <h1 className=" text-center   underline underline-offset-4">
            Upload Talented student details
          </h1>
          <form className=" mt-5 flex flex-col gap-3 items-center">
            <div className=" flex items-center justify-between w-96 ">
              <h1>Name: </h1>
              <div>
                <input
                  value={TalentedDetails.name}
                  onChange={(e) =>
                    setTalentedDetails({
                      ...TalentedDetails,
                      name: e.target.value,
                    })
                  }
                  placeholder="Name"
                  name="name"
                  type="text"
                  className=" pl-2 h-10 rounded-md text-black"
                />
              </div>
            </div>
            <div className=" flex items-center justify-between w-96 ">
              <h1>Age: </h1>
              <div>
                <input
                  value={TalentedDetails.age}
                  onChange={(e) =>
                    setTalentedDetails({
                      ...TalentedDetails,
                      age: e.target.value,
                    })
                  }
                  placeholder="Age"
                  name="age"
                  type="text"
                  className=" pl-2 h-10 rounded-md text-black"
                />
              </div>
            </div>
            <div className=" flex items-center justify-between w-96 ">
              <h1>Class: </h1>
              <div>
                <input
                  value={TalentedDetails.Class}
                  onChange={(e) =>
                    setTalentedDetails({
                      ...TalentedDetails,
                      Class: e.target.value,
                    })
                  }
                  placeholder="Class"
                  name="class"
                  type="text"
                  className=" pl-2 h-10 rounded-md text-black"
                />
              </div>
            </div>
            <div className=" flex items-center justify-between w-96 ">
              <h1>Award For: </h1>
              <div>
                <input
                  value={TalentedDetails.awardFor}
                  onChange={(e) =>
                    setTalentedDetails({
                      ...TalentedDetails,
                      awardFor: e.target.value,
                    })
                  }
                  placeholder="Award For"
                  name="awardFor"
                  type="text"
                  className=" pl-2 h-10 rounded-md text-black"
                />
              </div>
            </div>
            <div className=" flex items-center justify-between w-96 ">
              <h1>Desciptions: </h1>
              <div>
                <input
                  value={TalentedDetails.desciptions}
                  onChange={(e) =>
                    setTalentedDetails({
                      ...TalentedDetails,
                      desciptions: e.target.value,
                    })
                  }
                  placeholder="Desciptions"
                  name="desciptions"
                  type="text"
                  className=" pl-2 h-10 rounded-md text-black"
                />
              </div>
            </div>
            <div className=" flex items-center justify-between w-96 ">
              <h1>Address: </h1>
              <div>
                <input
                  value={TalentedDetails.address}
                  onChange={(e) =>
                    setTalentedDetails({
                      ...TalentedDetails,
                      address: e.target.value,
                    })
                  }
                  placeholder="Address"
                  name="address"
                  type="text"
                  className=" pl-2 h-10 rounded-md text-black"
                />
              </div>
            </div>
            <div className=" flex items-center justify-between w-96 ">
              <h1>Image: </h1>
              <div>
                <input
                  onChange={onBase64Pics}
                  type="file"
                  accept="**/image"
                  className=" pl-2 h-10 w-52 rounded-md text-black"
                />
              </div>
            </div>
            {!Picture ? null : (
              <div className=" flex items-center justify-center p-5">
                <Image src={Picture} alt="img" width={100} height={100} />
              </div>
            )}

            <div>
              <button
                onClick={onTalentStudentDetails}
                className="   w-52 h-10 rounded-md bg-green-700 hover:bg-green-800 active:bg-green-900"
              >
                Upload
              </button>
            </div>
          </form>
        </div>

        {/* award_getting_start */}
        <div className=" bg-green-400 p-5 rounded-md ">
          <h1 className=" text-center   underline underline-offset-4">
            Award getting events
          </h1>
          <form className=" mt-5 flex flex-col gap-3 items-center">
            <div className=" flex items-center justify-between w-96 ">
              <h1>Name: </h1>
              <div>
                <input
                  value={AwardGetting.name}
                  onChange={(e) =>
                    setAwardGetting({ ...AwardGetting, name: e.target.value })
                  }
                  placeholder="Name"
                  name="name"
                  type="text"
                  className=" pl-2 h-10 rounded-md text-black"
                />
              </div>
            </div>
            <div className=" flex items-center justify-between w-96 ">
              <h1>AwardReason: </h1>
              <div>
                <input
                  value={AwardGetting.awardReason}
                  onChange={(e) =>
                    setAwardGetting({
                      ...AwardGetting,
                      awardReason: e.target.value,
                    })
                  }
                  placeholder="Award Reason"
                  name="awardReason"
                  type="text"
                  className=" pl-2 h-10 rounded-md text-black"
                />
              </div>
            </div>
            <div className=" flex items-center justify-between w-96 ">
              <h1>AwardGettingPlace: </h1>
              <div>
                <input
                  value={AwardGetting.awardGettingPlace}
                  onChange={(e) =>
                    setAwardGetting({
                      ...AwardGetting,
                      awardGettingPlace: e.target.value,
                    })
                  }
                  placeholder="AwardGettingPlace"
                  name="awardGettingPlace"
                  type="text"
                  className=" pl-2 h-10 rounded-md text-black"
                />
              </div>
            </div>
            <div className=" flex items-center justify-between w-96 ">
              <h1>Date: </h1>
              <div>
                <input
                  value={AwardGetting.Date}
                  onChange={(e) =>
                    setAwardGetting({ ...AwardGetting, Date: e.target.value })
                  }
                  type="date"
                  className=" pl-2 h-10 rounded-md text-black"
                />
              </div>
            </div>

            <div className=" flex items-center justify-between w-96 ">
              <h1>EventPics: </h1>
              <div>
                <input
                  onChange={onBase64EventPics}
                  type="file"
                  accept="**/image"
                  className=" pl-2 h-10 w-52 rounded-md text-black"
                />
              </div>
            </div>

            {!eventPicture ? null : (
              <div className=" flex items-center justify-center p-5">
                <Image src={eventPicture} alt="img" width={100} height={100} />
              </div>
            )}

            <div>
              <button
                onClick={onAwardGettingDetails}
                className="   w-52 h-10 rounded-md bg-green-700 hover:bg-green-800 active:bg-green-900"
              >
                Upload
              </button>
            </div>
          </form>
        </div>
        {/* Notice_board-start */}

        <div className=" bg-green-400 p-5 rounded-md">
          <h1 className=" text-center   underline underline-offset-4">
            Notice Board Data
          </h1>
          <form className=" mt-5 flex flex-col gap-3 items-center">
            <div className=" flex items-center justify-between w-96 ">
              <h1>Name of PDF: </h1>
              <div>
                <input
                  value={pdfData.pdfName}
                  onChange={(e) =>
                    setPdfData({ ...pdfData, pdfName: e.target.value })
                  }
                  placeholder="Name"
                  name="PDF Name"
                  type="text"
                  className=" pl-2 h-10 rounded-md text-black"
                />
              </div>
            </div>
            <div className=" flex items-center justify-between w-96 ">
              <h1>PDF File: </h1>

              <div>
                <input
                  onChange={onBase64NoticeBoard}
                  type="file"
                  accept=".pdf"
                  className=" pl-2 h-10 w-52 rounded-md text-black"
                />
              </div>
            </div>

            <div>
              <button
                onClick={onNoticeBoard}
                className="   w-52 h-10 rounded-md bg-green-700 hover:bg-green-800 active:bg-green-900"
              >
                Upload
              </button>
            </div>
          </form>
        </div>
      </div>


                
       







      {/* Alll-data-start */}

      <div className=" mt-5 rounded-md bg-cyan-400 h-52 flex items-center justify-center">
        <div className="  flex flex-col gap-5">
          <h1 className=" text-center underline underline-offset-4 text-xl">
            This all data store
          </h1>
          <Link href={"/admin/alldata"}>
            <button className=" w-52 h-10 rounded-md bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800">
              All Data
            </button>
          </Link>
        </div>
      </div>



    </main>
  );
}
