"use client";
import { useEffect, useState } from "react";
import Style from "./nav.module.css";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";
export default function Nav_Bar() {
  const [menuFlag, setMenuFlag] = useState(false);
  const [sideresult, setSideResult] = useState(false);
  const [sideEducation, setSideEducation] = useState(false);
  const [Sideapply, setSideapply] = useState(false);
  const [onresult, setOnresult] = useState(false);
  const [onreducation, setOnEducation] = useState(false);
  const [apply, setApply] = useState(false);
  const [info, setInfo] = useState(false);
  const onMenuLine = () => {
    const MenuDiv = document.querySelector(".menuDiv") as HTMLElement;
    const Menu = document.querySelector(".menu") as HTMLElement;
    const SideEducation = document.querySelector(".education") as HTMLElement;
    const SideResult = document.querySelector(".sideresult") as HTMLElement;
    if (!menuFlag) {
      Menu.style.transform = `translateX(${0}%)`;
      MenuDiv.style.visibility = "visible";
      setMenuFlag((prev) => !prev);
      SideEducation.style.display = "none";
      setSideEducation(false);
      SideResult.style.display = "none";
      setSideResult(false);
    } else {
      Menu.style.transform = `translateX(${110}%)`;
      MenuDiv.style.visibility = "hidden";
      setMenuFlag((prev) => !prev);
    }
  };

  // result_section

  const onResult = () => {
    const Result = document.querySelector("#result") as HTMLElement;
    if (!onresult) {
      Result.style.visibility = "visible";
      setOnresult((prev) => !prev);
    } else {
      Result.style.visibility = "hidden";
      setOnresult((prev) => !prev);
    }
  };
  // result_section_end

  // ----------------------------------------------------

  // eductation_section_start

  const onEducation = () => {
    const Education = document.querySelector("#education") as HTMLElement;
    if (!onreducation) {
      Education.style.visibility = "visible";
      setOnEducation((prev) => !prev);
    } else {
      Education.style.visibility = "hidden";
      setOnEducation((prev) => !prev);
    }
  };

  // edication_section_end

  // apply_start

  const onApply = () => {
    const ApplyDiv = document.querySelector("#applyDiv") as HTMLElement;
    if (!apply) {
      ApplyDiv.style.visibility = "visible";
      setApply((prev) => !prev);
    } else {
      ApplyDiv.style.visibility = "hidden";
      setApply((prev) => !prev);
    }
  };

  // apply-end

  const onClose = () => {
    const MenuDiv = document.querySelector(".menuDiv") as HTMLElement;
    const Menu = document.querySelector(".menu") as HTMLElement;
    const SideEducation = document.querySelector(".education") as HTMLElement;
    const SideResult = document.querySelector(".sideresult") as HTMLElement;
    Menu.style.transform = `translateX(${110}%)`;
    MenuDiv.style.visibility = "hidden";
    setMenuFlag(false);

    SideEducation.style.display = "none";
    setSideEducation(false);

    SideResult.style.display = "none";
    setSideResult(false);
  };

  const onSide_Result = () => {
    const SideEducation = document.querySelector(".education") as HTMLElement;
    const SideResult = document.querySelector(".sideresult") as HTMLElement;
    const SideApply = document.querySelector(".sideapply") as HTMLElement;
    if (!sideresult) {
      SideResult.style.display = "block";
      setSideResult((prev) => !prev);

      SideEducation.style.display = "none";
      setSideEducation(false);
      SideApply.style.display = "none";
      setSideapply(false);
    } else {
      SideResult.style.display = "none";
      setSideResult((prev) => !prev);
    }
  };

  const onSide_Education = () => {
    const SideResult = document.querySelector(".sideresult") as HTMLElement;
    const SideEducation = document.querySelector(".education") as HTMLElement;
    const SideApply = document.querySelector(".sideapply") as HTMLElement;
    if (!sideEducation) {
      SideEducation.style.display = "block";
      setSideEducation((prev) => !prev);

      SideResult.style.display = "none";
      setSideResult(false);
      SideApply.style.display = "none";
      setSideapply(false);
    } else {
      SideEducation.style.display = "none";
      setSideEducation((prev) => !prev);
    }
  };

  const onSide_Apply = () => {
    const SideEducation = document.querySelector(".education") as HTMLElement;
    const SideResult = document.querySelector(".sideresult") as HTMLElement;
    const SideApply = document.querySelector(".sideapply") as HTMLElement;
    if (!Sideapply) {
      SideApply.style.display = "block";
      setSideapply((prev) => !prev);

      SideResult.style.display = "none";
      setSideResult(false);
      SideEducation.style.display = "none";
      setSideEducation(false);
    } else {
      SideApply.style.display = "none";
      setSideapply((prev) => !prev);
    }
  };

  const onInfo = () => {
    const Information = document.querySelector(".InfoUl") as HTMLElement;
    if (!info) {
      Information.style.visibility = "visible";
      setInfo((prev) => !prev);
    } else {
      Information.style.visibility = "hidden";
      setInfo((prev) => !prev);
    }
  };

  const onWindowEvent = () => {
    const MenuDiv = document.querySelector(".menuDiv") as HTMLElement;
    const MenuLine = document.querySelector("#menuLine") as HTMLElement;
    const Menu = document.querySelector(".menu") as HTMLElement;

    const Result = document.querySelector("#result") as HTMLElement;
    const ResultBtn = document.querySelector("#resultBtn") as HTMLElement;

    const Education = document.querySelector("#education") as HTMLElement;
    const EducationBtn = document.querySelector("#educationBtn") as HTMLElement;

    const ApplyDiv = document.querySelector("#applyDiv") as HTMLElement;
    const ApplyBtn = document.querySelector("#applyBtn") as HTMLElement;

    const Information = document.querySelector(".InfoUl") as HTMLElement;
    const Informationbtn = document.querySelector("#infobtn") as HTMLElement;

    window.addEventListener("click", (e: any) => {
      if (!Menu.contains(e.target) && !MenuLine.contains(e.target)) {
        Menu.style.transform = `translateX(${110}%)`;
        MenuDiv.style.visibility = "hidden";
        setMenuFlag(false);
      }
      if (!Result.contains(e.target) && !ResultBtn.contains(e.target)) {
        Result.style.visibility = "hidden";
        setOnresult(false);
      }
      if (!Education.contains(e.target) && !EducationBtn.contains(e.target)) {
        Education.style.visibility = "hidden";
        setOnEducation(false);
      }
      if (!ApplyDiv.contains(e.target) && !ApplyBtn.contains(e.target)) {
        ApplyDiv.style.visibility = "hidden";
        setApply(false);
      }
      if (
        !Information.contains(e.target) &&
        !Informationbtn.contains(e.target)
      ) {
        Information.style.visibility = "hidden";
        setInfo(false);
      }
    });
  };

  const [userdets, setDets] = useState({ name: "", image: "", id: "" });
  const onTokenData = async () => {
    const tokenData = await axios.get("/pages/api/user/decodedData");
    const loggedInId = tokenData.data.decodeddata?.id || "";
    const loggedUser = await axios.get(
      `/pages/api/user/decodedData/${loggedInId}`
    );
    const userDetails = loggedUser.data?.signupData || "";
    setDets({
      ...userdets,
      name: userDetails.name,
      image: userDetails.image,
      id: userDetails._id,
    });
  };

  useEffect(() => {
    onWindowEvent();
    onTokenData();
  }, []);
  return (
    <nav
      id={Style.navbar}
      className=" navbar text-white fixed right-0 left-0 top-0 flex h-24 items-center justify-between pr-10 pl-10 max-sm:pl-5 max-sm:pr-5 bg-slate-800/80 backdrop:filter backdrop-blur-3xl z-50"
    >
      <div
        id={Style.logoDiv}
        className="  p-1 rounded-md bg-slate-600 flex gap-5 max-sm:gap-1 items-center"
      >
        <div className="rounded-full bg-white">
          <Image
            src={"/photos/bd_logo1.png"}
            alt="logo"
            height={60}
            width={60}
            className=" max-sm:w-8 max-sm:h-8 sm:w-10 sm:h-10"
          />
        </div>

        <div>
          <h1 className=" text-center max-sm:text-xs">
            {" "}
            Bahadurpur <span className=" text-cyan-300">High</span>
            <br />
            School
          </h1>
        </div>
      </div>
      {/*--------------------------------------------*/}
      {/* middle_section_start */}

      <div className=" md:block md:flex sm:hidden max-sm:hidden  items-center gap-5">
        <ul className=" flex gap-5">
          <Link href={""}>
            <li className=" cursor-pointer hover:underline hover:underline-offset-4 active:text-orange-500">
              Home
            </li>
          </Link>
          {/* result_start */}
          <li
            id="resultBtn"
            onClick={onResult}
            className=" cursor-pointer hover:underline hover:underline-offset-4 active:text-orange-500"
          >
            Result{" "}
          </li>
          <aside
            id="result"
            className=" invisible pb-4 absolute top-24 max-sm:w-64 sm:w-72 md:w-80 bg-cyan-600 ml-10 rounded-md"
          >
            <ul id={Style.Ul} className=" mt-5 w-full">
              <Link href={"https://eboardresults.com/bn/ebr.app/home/"}>
                <li className="">P.S.C</li>
              </Link>
              <Link href={"https://eboardresults.com/bn/ebr.app/home/"}>
                <li className="">P.S.C</li>
              </Link>
              <Link href={"https://eboardresults.com/bn/ebr.app/home/"}>
                <li className="">P.S.C</li>
              </Link>
            </ul>
          </aside>
          {/* result_end */}
          {/* --------------------------------------------- */}
          <li
            onClick={onEducation}
            id="educationBtn"
            className=" cursor-pointer hover:underline hover:underline-offset-4 active:text-orange-500"
          >
            Form Fillup
          </li>
          <aside
            id="education"
            className="invisible  pb-5 absolute top-24  max-sm:w-64 sm:w-72 md:w-80  bg-cyan-600 ml-16 rounded-md"
          >
            <div className=" flex items-center justify-center">
              <ul id={Style.Ul} className=" mt-5 w-full">
                <Link href={"/informations/form_fillup/P.S.C"}>
                  <li>P.S.C for Registration</li>
                </Link>
                <Link href={"/informations/form_fillup/J.S.C"}>
                  <li>J.S.C Admission</li>
                </Link>
                <Link href={"/informations/form_fillup/S.S.C"}>
                  <li>S.S.C Form Fillup</li>
                </Link>
                <Link href={"/informations/form_fillup/H.S.C"}>
                  <li>H.S.C Admission</li>
                </Link>
              </ul>
            </div>
          </aside>
          {/* --------------------------------------------- */}
        </ul>

        {/* apply_section_start */}
        <div className=" flex gap-5">
          <button
            onClick={onApply}
            id="applyBtn"
            className=" hover:underline hover:underline-offset-4 active:text-orange-500"
          >
            Apply
          </button>
          <div
            id="applyDiv"
            className=" invisible h-52 fixed top-24 w-48 max-sm:right-10 sm:right-10 md:right-40 lg:right-96 bg-slate-600 rounded-md flex items-center justify-center"
          >
            <ul id={Style.ApplyUl} className=" h-full pt-2">
              <Link href={"/informations/apply/P.S.C"}>
                <li>P.S.C for Registration</li>
              </Link>
              <Link href={"/informations/apply/J.S.C"}>
                <li>J.S.C Admission</li>
              </Link>
              <Link href={"/informations/apply/S.S.C"}>
                <li>S.S.C Form Fillup</li>
              </Link>
              <Link href={"/informations/apply/H.S.C"}>
                <li>H.S.C Admission</li>
              </Link>
            </ul>
          </div>
          {!userdets.image ? (
            <Link href={"/user/login"}>
              <button className="border sm:w-32 pr-5 pl-5 pt-1 pb-1 max-sm:pr-0 max-sm:pl-0 max-sm:pt-0 max-sm:pb-0 max-sm:border-0 max-sm:hover:text-yellow-400 rounded-md sm:hover:bg-green-800 sm:active:bg-green">
                Login
              </button>
            </Link>
          ) : (
            <Link href={`/user/profile/${userdets.id}`}>
              <Image
                src={userdets.image}
                alt="profile"
                width={40}
                height={40}
                className=" rounded-full"
              />
            </Link>
          )}
        </div>
        {/* apply_section_end */}
      </div>
      {/* info_section_start */}
      <div className=" md:hidden w-1/2 ">
        <div className=" flex items-center  w-full justify-around">
          <button
            onClick={onInfo}
            id="infobtn"
            className=" border sm:w-32 pr-5 pl-5 pt-1 pb-1 max-sm:pr-0 max-sm:pl-0 max-sm:pt-0 max-sm:pb-0 max-sm:border-0 max-sm:hover:text-yellow-400 rounded-md sm:hover:bg-green-800 sm:active:bg-green"
          >
            <span>Info</span>
            <span className=" max-sm:hidden">rmations</span>
          </button>

          {!userdets.image ? (
            <Link href={"/user/login"}>
              <button className="border sm:w-32 pr-5 pl-5 pt-1 pb-1 max-sm:pr-0 max-sm:pl-0 max-sm:pt-0 max-sm:pb-0 max-sm:border-0 max-sm:hover:text-yellow-400 rounded-md sm:hover:bg-green-800 sm:active:bg-green">
                Login
              </button>
            </Link>
          ) : (
            <Link href={`/user/profile/${userdets.id}`}>
              <Image
                src={userdets.image}
                alt="profile"
                width={40}
                height={40}
                className=" rounded-full"
              />
            </Link>
          )}
        </div>

        <ul
          id={Style.sideUlofMDInfo}
          className=" InfoUl invisible absolute top-24 right-10 bg-red-300 p-5 rounded-md gap-2 flex flex-col"
        >
              <Link href={"/informations/annual_proggram"}>
                <li>Annual Proggram</li>
              </Link>
              <Link href={"/informations/school_exam_result"}>
                <li>School Exam Results</li>
              </Link>
              <Link href={"/informations/syllebus"}>
                <li>Syllebus</li>
              </Link>
              <Link href={"/informations/board_result"}>
                <li>Board Result</li>
              </Link>
              <Link href={"/informations/teacher_weekly_task"}>
                <li>Teacher Weekly Tasks</li>
              </Link>
              <Link href={"/informations/class_monitoring"}>
                <li>Class Monitoring</li>
              </Link>
              <Link href={"/informations/notice_board"}>
                <li>Notice Board</li>
              </Link>
        </ul>
      </div>
      {/* info_section_end */}
      {/* middle_section_end */}

      {/* ----------------------------------------- */}

      <div id="menuLine" onClick={onMenuLine} className=" cursor-pointer">
        <Image
          src={"/all_svg/menu-line.svg"}
          alt="menu"
          width={30}
          height={30}
        />
      </div>

      {/* menu_bar_start */}
      <div
        id={Style.menuDiv}
        className="menuDiv invisible text-black  fixed h-screen w-full top-0 left-0 right-0"
      >
        <div
          id={Style.sidemenu}
          className="  menu translate-x-full bg-white w-96 max-sm:w-60 absolute right-5 top-5 bottom-5 rounded-md "
        >
          <div className=" mt-5 flex justify-end items-center pr-5">
            <div
              onClick={onClose}
              className="  flex gap-2 items-center cursor-pointer"
            >
              <Image
                src={"/all_svg/close-large-line.svg"}
                alt="close"
                width={30}
                height={30}
              />
              <h1 className=" text-cyan-500">close</h1>
            </div>
          </div>

          <div className=" pr-10 pl-10 mt-5 ">
            {/* ------------------------------------------------------------------------------------------------- */}
            <ul id={Style.SideUl} className="md:hidden flex flex-col">
              <li className=" flex justify-between text-inherit cursor-pointer">
                <button
                  onClick={onSide_Result}
                  className=" border p-2 rounded-md  w-full  flex bg-cyan-300"
                >
                  Result
                </button>

                <ul
                  id={Style.liInsideUl}
                  className=" text-xs sideresult border p-2 border-l-0 hidden w-52 "
                >
                  <Link href={"https://eboardresults.com/bn/ebr.app/home/"}>
                    <li className="">P.S.C</li>
                  </Link>
                  <Link href={"https://eboardresults.com/bn/ebr.app/home/"}>
                    <li className="">P.S.C</li>
                  </Link>
                  <Link href={"https://eboardresults.com/bn/ebr.app/home/"}>
                    <li className="">P.S.C</li>
                  </Link>
                </ul>
              </li>

              <li className=" flex justify-between  text-inherit  cursor-pointer">
                <button
                  onClick={onSide_Education}
                  className="border p-2 rounded-md  w-full  flex bg-cyan-300 "
                >
                  Form Fillup
                </button>
                <ul
                  id={Style.liInsideUl}
                  className="text-xs  education border p-2 border-l-0 hidden w-52 "
                >
                  <Link href={"/informations/form_fillup/P.S.C"}>
                    <li>P.S.C Registration</li>
                  </Link>
                  <Link href={"/informations/form_fillup/J.S.C"}>
                    <li>J.S.C Admission</li>
                  </Link>
                  <Link href={"/informations/form_fillup/S.S.C"}>
                    <li>S.S.C Form Fillup</li>
                  </Link>
                  <Link href={"/informations/form_fillup/H.S.C"}>
                    <li>H.S.C Admission</li>
                  </Link>
                </ul>
              </li>
              {/* Apply-start */}

              <li className=" flex justify-between  text-inherit  cursor-pointer">
                <button
                  onClick={onSide_Apply}
                  className="border p-2 rounded-md  w-full  flex bg-cyan-300 "
                >
                  Apply
                </button>
                <ul
                  id={Style.liInsideUl}
                  className="text-xs  sideapply border p-2 border-l-0 hidden w-52 "
                >
                  <Link href={"/informations/apply/P.S.C"}>
                    <li>P.S.C Registration</li>
                  </Link>
                  <Link href={"/informations/apply/J.S.C"}>
                    <li>J.S.C Admission</li>
                  </Link>
                  <Link href={"/informations/apply/S.S.C"}>
                    <li>S.S.C Form Fillup</li>
                  </Link>
                  <Link href={"/informations/apply/H.S.C"}>
                    <li>H.S.C Admission</li>
                  </Link>
                </ul>
              </li>

              {/* apply-end */}
              <div className="  flex items-center justify-center">
                <Link href={"/admin/login"}>
                  <button
                    className=" border bg-cyan-300 hover:bg-cyan-600 active:bg-cyan-700 h-10 mt-10 w-40 max-sm:w-36 rounded-md
                "
                  >
                    Admin
                  </button>
                </Link>
              </div>
            </ul>

            {/* ----------------------------------------------------------------------------------- */}
            <ul id={Style.sideUlofMD} className="">
              <Link href={"/informations/annual_proggram"}>
                <li>Annual Proggram</li>
              </Link>
              <Link href={"/informations/school_exam_result"}>
                <li>School Exam Results</li>
              </Link>
              <Link href={"/informations/syllebus"}>
                <li>Syllebus</li>
              </Link>
              <Link href={"/informations/board_result"}>
                <li>Board Result</li>
              </Link>
              <Link href={"/informations/teacher_weekly_task"}>
                <li>Teacher Weekly Tasks</li>
              </Link>
              <Link href={"/informations/class_monitoring"}>
                <li>Class Monitoring</li>
              </Link>
              <Link href={"/informations/notice_board"}>
                <li>Notice Board</li>
              </Link>
              <Link href={"/admin/login"}>
                <li>Admin</li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
