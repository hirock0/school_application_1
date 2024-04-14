"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function AdminSignUp() {
  const router = useRouter();
  const [adminsignData, setAdminSignupData] = useState({
    name: "",
    emailOrnumber: "",
    password: "",
    reTypePassword: "",
    address: "",
    image: "",
  });
  const [ontext, setOntext] = useState(Boolean);
  const onBase64 = (e: any) => {
    const reader: any = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = () => {
      setAdminSignupData({ ...adminsignData, image: reader.result });
    };
  };

  const onLogin = async (e: any) => {
    e.preventDefault();
    if (!ontext) {
      alert("Fill the from");
    } else {
      if (adminsignData.password !== adminsignData.reTypePassword) {
        alert("Password not match");
      } else {
        const sendSignupData = await axios.post(
          "/pages/api/admin/signup",
          adminsignData
        );
        if (sendSignupData.data.success) {
          alert("You have signed successfully");
          router.push("/");
        } else {
          alert("something went wrong");
        }
      }
    }
  };

  const onLoginTextChange = () => {
    if (
      adminsignData.name.length !== 0 &&
      adminsignData.emailOrnumber.length !== 0 &&
      adminsignData.password.length !== 0 &&
      adminsignData.reTypePassword.length !== 0 &&
      adminsignData.image.length !== 0
    ) {
      setOntext(true);
    } else {
      setOntext(false);
    }
  };

  useEffect(() => {
    onLoginTextChange();
  }, [ontext, adminsignData]);
  return (
    <main className=" bg-yellow-900 h-screen  text-white   flex items-center justify-center">
      <div className="bg-black w-96  max-sm:w-72 rounded-md p-5 ">
        <h1 className=" text-center underline underline-offset-4 text-xl">
          Please Sign Up
        </h1>
        <form className=" flex flex-col items-center gap-4 mt-5">
          <div className=" w-full">
            <input
              value={adminsignData.name}
              onChange={(e) =>
                setAdminSignupData({ ...adminsignData, name: e.target.value })
              }
              placeholder="Name"
              type="text"
              name="name"
              className=" w-full h-12 pl-2 rounded-md text-black"
            />
          </div>
          <div className=" w-full">
            <input
              value={adminsignData.emailOrnumber}
              onChange={(e) =>
                setAdminSignupData({
                  ...adminsignData,
                  emailOrnumber: e.target.value,
                })
              }
              placeholder="Email or Number"
              type="text"
              name="name"
              className=" w-full h-12 pl-2 rounded-md text-black"
            />
          </div>
          <div className=" w-full">
            <input
              value={adminsignData.password}
              onChange={(e) =>
                setAdminSignupData({
                  ...adminsignData,
                  password: e.target.value,
                })
              }
              placeholder="Password"
              type="text"
              name="name"
              className=" w-full h-12 pl-2 rounded-md text-black"
            />
          </div>
          <div className=" w-full">
            <input
              value={adminsignData.reTypePassword}
              onChange={(e) =>
                setAdminSignupData({
                  ...adminsignData,
                  reTypePassword: e.target.value,
                })
              }
              placeholder="Re-Type Password"
              type="text"
              name="name"
              className=" w-full h-12 pl-2 rounded-md text-black"
            />
          </div>
          <div className=" w-full">
            <input
              value={adminsignData.address}
              onChange={(e) =>
                setAdminSignupData({
                  ...adminsignData,
                  address: e.target.value,
                })
              }
              placeholder="Address"
              type="text"
              name="name"
              className=" w-full h-12 pl-2 rounded-md text-black"
            />
          </div>
          <div className=" w-full">
            <input
              onChange={onBase64}
              type="file"
              accept="**/image"
              className=" bg-white w-80 max-sm:w-60 h-12 pl-2 rounded-md text-black"
            />
          </div>
          <div>
            <Image
              src={adminsignData.image}
              alt="img"
              width={100}
              height={100}
            />
          </div>

          <button
            onClick={onLogin}
            className=" w-52 h-10 rounded-md bg-emerald-700 hover:bg-emerald-800 active:bg-emerald-900"
          >
            {ontext ? <h1>Sign Up</h1> : <h1>Fill Up</h1>}
          </button>
        </form>
      </div>
    </main>
  );
}
