"use client";

import { useEffect, useState } from "react";
import Style from "./apply.module.css";
import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Apply_Informations(props: any) {
  const router = useRouter();
  const reqProps = props.params.details;
  const [applyData, setApplyData] = useState({
    name: "",
    fatherName: "",
    motherName: "",
    dateOfbirth: "",
    address: "",
    mobile: "",
    applicationFor: "",
    institutionName: "",
    image: "",
    useremail: "",
  });

  const [loginUserData, setLoginUserData] = useState({
    name: "",
    emailOrnumber: "",
    id: "",
  });

  const onBase64 = (e: any) => {
    if(e.target.files[0].size>100000){
      alert("Image will (100 X 100)pixales and 100kb")
    }else{
    const reader: any = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = () => {
      setApplyData({ ...applyData, image: reader.result });
    };
    reader.onerror = () => {
      console.log("file not found");
    };
  }
  };

  const ApplyData = async (e: any) => {
    e.preventDefault();

    if (
      applyData.name == "" ||
      applyData.fatherName == "" ||
      applyData.motherName == "" ||
      applyData.address == "" ||
      applyData.mobile == "" ||
      applyData.applicationFor == "" ||
      applyData.institutionName == "" ||
      applyData.image == ""
    ) {
      alert("Fill the all data");
    } else {
      if (loginUserData.emailOrnumber == "") {
        alert("You are not loged!");
        router.push("/user/login");
      } else {
        alert("congratulations! You have successfully");
        await axios.post("/pages/api/informations/apply", applyData);
        router.back();
      }
    }
  };

  const onUserData = async () => {
    const reqDecodeddata = await axios.get("/pages/api/user/decodedData");
    const reqData = reqDecodeddata.data.decodeddata;
    if (!reqData) {
      console.log("You are not logged yet");
    } else {
      const loggedUser = await axios.get(
        `/pages/api/user/decodedData/${reqData.id}`
      );
      const loggedData = loggedUser.data.signupData;
      setLoginUserData({
        ...loginUserData,
        name: loggedData.name,
        emailOrnumber: loggedData.emailOrnumber,
        id: loggedData._id,
      });
      setApplyData({ ...applyData, useremail: loggedData.emailOrnumber });
    }
  };

  useEffect(() => {
    onUserData();
  }, []);
  return (
    <main className=" bg-slate-100 h-screen overflow-y-scroll">
      <h1 className=" text-center pt-5 underline underline-offset-4">
        {reqProps} From
      </h1>
      <div className=" flex items-center flex-col justify-center">
        <form
          id={Style.form}
          className=" border p-5 bg-emerald-800 text-white rounded-md sm:w-5/6  md:w-5/6 lg:w-1/2 flex flex-col gap-5 max-sm:items-center  pt-5  pr-10 pl-10"
        >
          <div className="sm:justify-between  flex max-sm:flex-col max-sm:gap-5 sm:gap-4  justify-around">
            <div>
              <div>Name</div>
              <div>
                <input
                  value={applyData.name}
                  onChange={(e) =>
                    setApplyData({ ...applyData, name: e.target.value })
                  }
                  placeholder="Full Name"
                  type="text"
                  name="name"
                  className=" pl-2 h-8 rounded-md"
                />
              </div>
            </div>
            <div>
              <div>Father's Name</div>
              <div>
                <input
                  value={applyData.fatherName}
                  onChange={(e) =>
                    setApplyData({ ...applyData, fatherName: e.target.value })
                  }
                  placeholder="Father's Name"
                  type="text"
                  name="name"
                  className=" pl-2 h-8 rounded-md"
                />
              </div>
            </div>
          </div>

          <div className="  sm:justify-between  flex max-sm:flex-col max-sm:gap-5 sm:gap-4 justify-around">
            <div>
              <div>Mother's Name</div>
              <div>
                <input
                  value={applyData.motherName}
                  onChange={(e) =>
                    setApplyData({ ...applyData, motherName: e.target.value })
                  }
                  placeholder="Mother's Name"
                  type="text"
                  name="name"
                  className=" pl-2 h-8 rounded-md"
                />
              </div>
            </div>
            <div className="">
              <div>Date of Birth</div>
              <div>
                <input
                  value={applyData.dateOfbirth}
                  onChange={(e) =>
                    setApplyData({ ...applyData, dateOfbirth: e.target.value })
                  }
                  type="date"
                  name="date"
                  className=" pl-2 h-8 rounded-md"
                />
              </div>
            </div>
          </div>
          <div className=" sm:justify-between  flex max-sm:flex-col max-sm:gap-5 sm:gap-4 justify-around">
            <div>
              <div>Address</div>
              <div>
                <input
                  value={applyData.address}
                  onChange={(e) =>
                    setApplyData({ ...applyData, address: e.target.value })
                  }
                  placeholder="Mother's Name"
                  type="text"
                  name="address"
                  className=" pl-2 h-8 rounded-md"
                />
              </div>
            </div>
            <div>
              <div>Mobile</div>
              <div>
                <input
                  value={applyData.mobile}
                  onChange={(e) =>
                    setApplyData({ ...applyData, mobile: e.target.value })
                  }
                  placeholder="Mobile No:"
                  type="text"
                  name="name"
                  className=" pl-2 h-8 rounded-md"
                />
              </div>
            </div>
          </div>
          <div className="sm:justify-between flex max-sm:flex-col max-sm:gap-5 sm:gap-4  justify-around">
            <div>
              <div>Application for</div>
              <div>
                <input
                  value={(applyData.applicationFor = reqProps)}
                  onChange={(e) =>
                    setApplyData({
                      ...applyData,
                      applicationFor: e.target.value,
                    })
                  }
                  type="text"
                  name="address"
                  className=" pl-2 h-8 rounded-md"
                />
              </div>
            </div>
            <div>
              <div>Institution Name</div>
              <div>
                <input
                  value={
                    (applyData.institutionName = "Bahadurpur Secondary School")
                  }
                  onChange={(e) =>
                    setApplyData({
                      ...applyData,
                      institutionName: e.target.value,
                    })
                  }
                  type="text"
                  name="name"
                  className=" pl-2 h-8 rounded-md"
                />
              </div>
            </div>
          </div>
          <div>
            <div>Image</div>
            <div className=" max-sm:w-60">
              <input
                onChange={onBase64}
                type="file"
                accept="**/image"
                className=" "
              />
            </div>
          </div>
          {applyData.image == "" ? null : (
            <div className=" flex items-center justify-center">
              <Image
                src={applyData.image}
                alt="img"
                width={100}
                height={100}
                className=" rounded-md"
              />
            </div>
          )}

          <button
            onClick={ApplyData}
            className=" max-sm:w-full  h-10 rounded-md bg-green-600 hover:bg-green-700 active:bg-green-900"
          >
            submit
          </button>
        </form>
      </div>
    </main>
  );
}
