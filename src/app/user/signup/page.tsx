"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function SignUp() {
  const router = useRouter();
  const [signData, setSignupData] = useState({
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
      setSignupData({ ...signData, image: reader.result });
    };
  };

  const onLogin = async (e: any) => {
    e.preventDefault();
    if (!ontext) {
      alert("Fill the from");
    } else {
      if (signData.password !== signData.reTypePassword) {
        alert("Password not match");
      } else {
        const sendSignupData = await axios.post(
          "/pages/api/user/signup",
          signData
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
      signData.name.length !== 0 &&
      signData.emailOrnumber.length !== 0 &&
      signData.password.length !== 0 &&
      signData.reTypePassword.length !== 0 &&
      signData.image.length !== 0
    ) {
      setOntext(true);
    } else {
      setOntext(false);
    }
  };

  useEffect(() => {
    onLoginTextChange();
  }, [ontext, signData]);
  return (
    <main className=" bg-yellow-900 h-screen  text-white   flex items-center justify-center">
      <div className="bg-black w-96  max-sm:w-72 rounded-md p-5 ">
        <h1 className=" text-center underline underline-offset-4 text-xl">
          Please Sign Up
        </h1>
        <form className=" flex flex-col items-center gap-4 mt-5">
          <div className=" w-full">
            <input
              value={signData.name}
              onChange={(e) =>
                setSignupData({ ...signData, name: e.target.value })
              }
              placeholder="Name"
              type="text"
              name="name"
              className=" w-full h-12 pl-2 rounded-md text-black"
            />
          </div>
          <div className=" w-full">
            <input
              value={signData.emailOrnumber}
              onChange={(e) =>
                setSignupData({ ...signData, emailOrnumber: e.target.value })
              }
              placeholder="Email or Number"
              type="text"
              name="name"
              className=" w-full h-12 pl-2 rounded-md text-black"
            />
          </div>
          <div className=" w-full">
            <input
              value={signData.password}
              onChange={(e) =>
                setSignupData({ ...signData, password: e.target.value })
              }
              placeholder="Password"
              type="text"
              name="name"
              className=" w-full h-12 pl-2 rounded-md text-black"
            />
          </div>
          <div className=" w-full">
            <input
              value={signData.reTypePassword}
              onChange={(e) =>
                setSignupData({ ...signData, reTypePassword: e.target.value })
              }
              placeholder="Re-Type Password"
              type="text"
              name="name"
              className=" w-full h-12 pl-2 rounded-md text-black"
            />
          </div>
          <div className=" w-full">
            <input
              value={signData.address}
              onChange={(e) =>
                setSignupData({ ...signData, address: e.target.value })
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
            <Image src={signData.image} alt="img" width={100} height={100} />
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
