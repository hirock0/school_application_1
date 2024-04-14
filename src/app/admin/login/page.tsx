"use client";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
export default function AdminLogin() {
  const router = useRouter();
  const [adminloginData, setAdminLoginData] = useState({
    emailOrnumber: "",
    password: "",
  });
  const [ontext, setOntext] = useState(Boolean);
  const onLogin = async (e: any) => {
    e.preventDefault();
    if (!ontext) {
      alert("Fill the from");
    } else {
      const SendLogindata = await axios.post(
        "/pages/api/admin/login",
        adminloginData
      );
      if (!SendLogindata.data.success) {
        alert("Data not send");
        router.push("/admin/login");
      } else {
        alert("Access is allow");
        router.push("/admin/access");
      }
    }
  };

  const onLoginTextChange = () => {
    if (
      adminloginData.emailOrnumber.length !== 0 &&
      adminloginData.password.length !== 0
    ) {
      setOntext(true);
    } else {
      setOntext(false);
    }
  };

  useEffect(() => {
    onLoginTextChange();
  }, [ontext, adminloginData]);
  return (
    <main className=" h-screen text-white bg-emerald-800 flex items-center justify-center">
      <div className="bg-black w-96 h-1/2 max-sm:w-72 rounded-md  p-5 ">
        <h1 className=" text-center underline underline-offset-4 text-xl">
          Please Login
        </h1>
        <form className=" flex flex-col items-center gap-4 mt-5">
          <div className=" w-full">
            <input
              value={adminloginData.emailOrnumber}
              onChange={(e) =>
                setAdminLoginData({
                  ...adminloginData,
                  emailOrnumber: e.target.value,
                })
              }
              placeholder="Email or Number"
              type="text"
              name="email"
              className=" w-full h-12 pl-2 rounded-md text-black"
            />
          </div>
          <div className=" w-full">
            <input
              value={adminloginData.password}
              onChange={(e) =>
                setAdminLoginData({
                  ...adminloginData,
                  password: e.target.value,
                })
              }
              placeholder="Password"
              type="text"
              name="name"
              className=" w-full h-12 pl-2 rounded-md text-black"
            />
          </div>

          <button
            onClick={onLogin}
            className=" w-52 h-10 rounded-md bg-emerald-700 hover:bg-emerald-800 active:bg-emerald-900"
          >
            {ontext ? <h1>Login</h1> : <h1>Fill Up</h1>}
          </button>
        </form>
        <div className=" flex justify-center items-center mt-5">
          <Link href={"/admin/signup"}>
            <button className=" w-52 h-10 rounded-md bg-cyan-800 hover:bg-cyan-900 active:bg-cyan-950">
              Sign Up
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
}
