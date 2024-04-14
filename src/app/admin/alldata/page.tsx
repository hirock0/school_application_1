"use client";
import Style from "./alldata.module.css";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
export default function AllData() {
  const router = useRouter();
  const [awardData, setAwardData] = useState([]);
  const [TalentedData, setTalentedData] = useState([]);
  const [id, setId] = useState("");
  const AllData = async () => {
    const AwardGettingEvents = await axios.get("/pages/api/awardGetting");
    const AwardData = AwardGettingEvents.data.allEventDetails;
    setAwardData(AwardData);
    const Talenteddetails = await axios.get("/pages/api/talentedStudent");
    const TalentedStudentData = Talenteddetails.data.allTalents;
    setTalentedData(TalentedStudentData);
  };

  const OnClickData = (Id: any) => {
    setId(Id);
    const Clikpopup = document.querySelector("#clickpopupbox") as HTMLElement;
    Clikpopup.style.visibility = "visible";
  };
  const onBack = () => {
    const Clikpopup = document.querySelector("#clickpopupbox") as HTMLElement;
    Clikpopup.style.visibility = "hidden";
  };

  const OnDelete = async (e: any) => {
    const DeleteId = await axios.delete(`/pages/api/talentedStudent/${e}`);
    if (!DeleteId.data.success) {
      alert("something went wrong");
    } else {
      alert("Data is deleted");
      const Clikpopup = document.querySelector("#clickpopupbox") as HTMLElement;
      Clikpopup.style.visibility = "hidden";
      router.refresh();
    }
  };

  // -------------------------------------------------------------------------------------------------------

  // notice_board_start

  // notice-Board

  const [allPdf, setAllPdf] = useState<any>([]);
  const [seacrhData, setSearchData] = useState("");
  const onDelete = async (Id: any) => {
    const deletedata = await axios.delete(`/pages/api/notice_board/${Id}`);
    if (!deletedata.data.success) {
      alert("Something went wrong !");
    } else {
      alert("File is deleted");
      router.refresh();
    }
  };

  const onSearchPdf = async (e: any) => {
    setSearchData(e);
    const fetchData = await axios.get("/pages/api/notice_board");
    const reqestData = fetchData.data.reqData;
    const filterData = reqestData.filter((elm: any) =>
      elm.pdfName.toLowerCase().includes(e.toLowerCase())
    );
    setAllPdf(filterData);
  };
  const onNotichFatchData = async () => {
    const fetchData = await axios.get("/pages/api/notice_board");
    setAllPdf(fetchData.data?.reqData || "");
  };

  useEffect(() => {
    onNotichFatchData();
  }, []);

  useEffect(() => {
    AllData();
  }, [TalentedData, awardData]);

  // notice_board_end

  // ---------------------------------------------------------------------------------------------------------

  return (
    <main className=" text-white">
      <div className=" bg-red-300 p-5">
        <div>
          <h1 className=" font-semibold text-center  mb-2 text-xl underline underline-offset-4">
            Talented Student List
          </h1>
        </div>
        <div className=" flex items-center justify-center">
          <input
            placeholder="Search..."
            type="text"
            name="search"
            className=" h-10 pl-3 rounded-md"
          />
        </div>

        <div className=" bg-blue-400 mt-2 rounded-md h-96 overflow-y-scroll max-sm:overflow-x-scroll">
          <table className=" w-full">
            <thead>
              <tr id={Style.theadTr}>
                <td>Name</td>
                <td>Class</td>
                <td>Events</td>
                <td>Image</td>
                <td>Button</td>
              </tr>
            </thead>
            <tbody id={Style.tbodyTr}>
              {TalentedData.map((item: any) => (
                <tr key={item._id} className=" ">
                  <td>{item.name}</td>
                  <td>{item.Class}</td>
                  <td>{item.awardFor}</td>
                  <td className=" mt-2 flex items-center justify-center">
                    <Image src={item.img} alt="img" width={50} height={50} />
                  </td>
                  <td>
                    <button
                      onClick={() => OnClickData(item._id)}
                      className=" w-20 h-8 rounded-md bg-green-600 text-white"
                    >
                      click
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* --------------------------------------------------------------------------------------- */}

      <div className=" bg-cyan-300 p-5">
        <div>
          <h1 className=" font-semibold text-center  mb-2 text-xl underline underline-offset-4">
            Award Getting Events
          </h1>
        </div>
        <div className="  flex items-center justify-center">
          <input
            placeholder="Search..."
            type="text"
            name="search"
            className=" h-10 pl-3 rounded-md"
          />
        </div>

        <div className=" bg-blue-400 mt-2 rounded-md h-96 overflow-y-scroll max-sm:overflow-x-scroll">
          <table className=" w-full">
            <thead>
              <tr id={Style.theadTr}>
                <td>Name</td>
                <td>Award For</td>
                <td>Place</td>
                <td>Image</td>
                <td>Button</td>
              </tr>
            </thead>
            <tbody id={Style.tbodyTr}>
              {awardData.map((item: any) => (
                <tr key={item._id} className=" ">
                  <td>{item.name}</td>
                  <td>{item.awardReason}</td>
                  <td>{item.awardGettingPlace}</td>
                  <td className=" mt-2 flex items-center justify-center">
                    <Image
                      src={item.eventPics}
                      alt="img"
                      width={50}
                      height={50}
                    />
                  </td>
                  <td>
                    <button
                      onClick={() => OnClickData(item._id)}
                      className=" w-20 h-8 rounded-md bg-green-600 text-white"
                    >
                      click
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* ------------------------------------------------------------------------------ */}
      {/* --------------------------------------------------------------------------------------- */}
      <div>
        {/* notice_board_start */}

        <div className=" bg-emerald-500 rounded-md overflow-hidden mt-5">
          <h1 className=" text-center mt-10 text-xl underline underline-offset-4">
            Notice Board
          </h1>
          <div className=" pl-5 mt-5">
            <input
              placeholder=" Search..."
              type="text"
              className="h-10 pl-2 rounded-md text-black"
              value={seacrhData}
              onChange={(e) => onSearchPdf(e.target.value)}
            />
          </div>

          <div>
            <div
              id={Style.noticedata}
              className="   bg-emerald-800 h-96 mt-5 overflow-y-scroll "
            >
              <table className=" w-full border text-center">
                <thead id={Style.thead} className=" ">
                  <tr>
                    <td>Name</td>
                    <td>Date</td>
                    <td>PDF</td>
                  </tr>
                </thead>
                <tbody id={Style.tbody}>
                  {allPdf.map((item: any) => (
                    <tr key={item._id}>
                      <td className=" text-start pl-5">{item.pdfName}</td>
                      <td>{item.recentDate}</td>
                      <td className=" p-3">
                        <button
                          onClick={() => onDelete(item._id)}
                          className=" p-2 rounded-md bg-green-600 hover:bg-green-700 active:bg-green-800"
                        >
                          delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* notice_board_end */}
      </div>

      {/* ------------------------------------------------------------------------------ */}

      <div
        id="clickpopupbox"
        className=" flex-col opacity-95 flex items-center justify-center invisible bg-black h-screen w-full fixed top-0 left-0 right-0"
      >
        <div className=" fixed top-4 left-4">
          <button onClick={onBack}>Back</button>
        </div>
        <div id="inclickbox" className=" border bg-red-400  p-5 rounded-md ">
          <h1 className=" text-center underline underline-offset-4">
            Do you want to Delete or Edit
          </h1>
          <div className=" flex flex-col justify-center p-5 h-72 w-96">
            <div className="  gap-10 flex justify-center mt-2">
              <button
                onClick={() => OnDelete(id)}
                className=" hover:bg-red-700 border w-32 h-12 rounded-md"
              >
                Delete
              </button>
              <button className=" hover:bg-green-700 border w-32 h-12 rounded-md">
                Edit
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
