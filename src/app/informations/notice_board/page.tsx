"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import Style from "./notice.module.css";
export default function Notice_Board() {
  const [allPdf, setAllPdf] = useState<any>([]);
  const [seacrhData,setSearchData]=useState("")

  const onDownload = (pdf: any) => {
    const aTag = document.createElement("a");
    aTag.href = `${pdf}`;
    aTag.setAttribute("download", pdf);
    aTag.click();
    aTag.remove();
  };

  const onSearchPdf =  async(e:any)=>{
    setSearchData(e)
  const fetchData = await axios.get("/pages/api/notice_board");
  const reqestData = fetchData.data.reqData
  const filterData = reqestData.filter((elm:any)=>elm.pdfName.toLowerCase().includes(e.toLowerCase()))
  setAllPdf(filterData);
  
 }
  const onNotichFatchData = async () => {
    const fetchData = await axios.get("/pages/api/notice_board");
    setAllPdf(fetchData.data?.reqData || "");
  };


  useEffect(() => {
    onNotichFatchData();
  }, []);

  return (
    <main className=" text-white bg-black h-screen overflow-y-scroll">
      <h1 className=" text-center mt-10 text-xl underline underline-offset-4">
        Notice Board
      </h1>
      <div className=" pl-5 mt-5">
        <input placeholder=" Search..." type="text" className="h-10 pl-2 rounded-md text-black" value={seacrhData} onChange={(e)=>onSearchPdf(e.target.value)}/>
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

                {
                  allPdf.map((item:any)=>(
                    <tr key={item._id}>
                      <td className=" text-start pl-5">{item.pdfName}</td>
                      <td>{item.recentDate}</td>
                      <td className=" p-3">
                        <button
                        onClick={() => onDownload(item.pdfFile)}
                        className=" p-2 rounded-md bg-green-600 hover:bg-green-700 active:bg-green-800"
                      >
                        download
                      </button>
                      </td>
                  </tr>
                  ))
                }


            </tbody>
          </table>







        </div>
        <div className=" pr-5 pl-5">
          <h1 className=" text-center mt-5 text-xl underline underline-offset-4">
            Our Policy
          </h1>
          <p className=" mt-2 max-sm:text-xs">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
            optio ex maiores ut tenetur assumenda blanditiis sit omnis
            doloremque voluptas deleniti nihil, quisquam, animi voluptatem quod,
            enim aliquid molestiae atque! Laborum expedita ea, quasi
            consequuntur eum nisi! Possimus explicabo fuga dicta consectetur ad
            enim ab labore in quisquam, voluptatibus magni eveniet quidem odio
            iure velit recusandae itaque eos doloribus. Mollitia?
          </p>
        </div>
      </div>
    </main>
  );
}
