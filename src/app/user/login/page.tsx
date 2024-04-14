"use client";

import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();

  const [loginData, setLoginData] = useState({
    emailOrnumber: "",
    password: "",
  });
  const [ontext, setOntext] = useState(Boolean);
  const [message, setMessage] = useState({ message1: "", message2: "" });
  const onLogin = async (e: any) => {
    e.preventDefault();
    if (!ontext) {
      alert("Fill the from");
    } else {
      const SendLogindata = await axios.post(
        "/pages/api/user/login",
        loginData
      );
      setMessage({
        ...message,
        message1: SendLogindata.data.message1,
        message2: SendLogindata.data.message2,
      });
      if (!SendLogindata.data.success) {
        console.log("something went wrong");
      } else {
        alert("you have logged in successfully");
        router.push("/");
      }
    }
  };

  const onLoginTextChange = async () => {
    if (
      loginData.emailOrnumber.length !== 0 &&
      loginData.password.length !== 0
    ) {
      setOntext(true);
    } else {
      setOntext(false);
    }
  };

  useEffect(() => {
    onLoginTextChange();
  }, [ontext, loginData]);
  return (
    <main className=" h-screen text-white bg-emerald-800 flex items-center justify-center">
      <div className="bg-black w-96 h-1/2 max-sm:w-72 rounded-md  p-5 ">
        <h1 className=" text-center underline underline-offset-4 text-xl">
          Please Login
        </h1>
        <form className=" flex flex-col items-center gap-4 mt-5">
          <div className=" w-full">
            <input
              value={loginData.emailOrnumber}
              onChange={(e) =>
                setLoginData({ ...loginData, emailOrnumber: e.target.value })
              }
              placeholder="Email or Number"
              type="text"
              name="email"
              className=" w-full h-12 pl-2 rounded-md text-black"
            />
            <div>
              <h1 className=" text-red-600 text-center">{message.message1}</h1>
            </div>
          </div>
          <div className=" w-full">
            <input
              value={loginData.password}
              onChange={(e) =>
                setLoginData({ ...loginData, password: e.target.value })
              }
              placeholder="Password"
              type="text"
              name="name"
              className=" w-full h-12 pl-2 rounded-md text-black"
            />
            <div>
              <h1 className=" text-red-600 text-center">{message.message2}</h1>
            </div>
          </div>

          <button
            onClick={onLogin}
            className=" w-52 h-10 rounded-md bg-emerald-700 hover:bg-emerald-800 active:bg-emerald-900"
          >
            {ontext ? <h1>Login</h1> : <h1>Fill Up</h1>}
          </button>
        </form>
        <div className=" flex justify-center items-center mt-5">
          <Link href={"/user/signup"}>
            <button className=" w-52 h-10 rounded-md bg-cyan-800 hover:bg-cyan-900 active:bg-cyan-950">
              Sign Up
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
}
