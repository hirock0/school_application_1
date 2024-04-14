"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Style from './profile.module.css'
import { Navigation, Pagination } from "swiper/modules";

export default function Profile(props: any) {
  const router = useRouter();
  const userId = props.params.details;

  const [userdata, setUserData] = useState({
    address: "",
    emailOrnumber: "",
    image: "",
    name: "",
    password: "",
    id: "",
  });
  const onUserProfileDetails = async () => {
    const ReqDetails = await axios.get(`/pages/api/user/decodedData/${userId}`);
    const userData = ReqDetails.data.signupData;
    setUserData({
      ...userdata,
      address: userData.address,
      emailOrnumber: userData.emailOrnumber,
      image: userData.image,
      name: userData.name,
      password: userData.password,
      id: userData._id,
    });
  };

  const OnLogut = async () => {
    const logoutData = await axios.get("/pages/api/user/logout");
    if (logoutData.data.success) {
      alert("You have logged out successfully");
      router.push("/");
    } else {
      alert("You are not logged out");
    }
  };
  const onLogutPopup = () => {
    const logoutDiv = document.querySelector("#logoutPopup") as HTMLElement;
    logoutDiv.style.visibility = "visible";
  };
  const onCancel = () => {
    const logoutDiv = document.querySelector("#logoutPopup") as HTMLElement;
    logoutDiv.style.visibility = "hidden";
  };

  const [userImage, setUserImage] = useState("");
  const base64 = (e: any) => {
    if(e.target.files[0].size>100000){
      alert("Image will (100 X 100)pixales and 100kb")
    }else{
    const reader: any = new FileReader();
    console.log(reader)
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = () => {
      setUserImage(reader.result);
    };
    reader.onerror = (error: any) => {
      console.log("something went wrongs" + error);
    };
  }
  };

  const onImageUpdate = async () => {
    const updatePopup = document.querySelector("#updatepopup") as HTMLElement;

    const sendDAte = await axios.post(
      `/pages/api/user/profile/update/imageupdate`,
      { userId, userImage }
    );
    if (!sendDAte.data.success) {
      alert("Image data is blank");
    } else {
      alert("Updation successful,Please refresh the page");
      updatePopup.style.visibility = "hidden";
      router.refresh();
    }
  };

  const onUpdatePopup = () => {
    const updatePopup = document.querySelector("#updatepopup") as HTMLElement;
    updatePopup.style.visibility = "visible";
  };

  // windows clicking_start
  const windowClickingEvent = () => {
    const LogoutBox = document.querySelector("#logoutBox") as HTMLElement;
    const logOutBtn = document.querySelector("#logoutBtn") as HTMLElement;
    const logoutDiv = document.querySelector("#logoutPopup") as HTMLElement;

    const UpdateBox = document.querySelector("#updateBox") as HTMLElement;
    const UpdateBtn = document.querySelector("#updatebtn") as HTMLElement;
    const updatePopup = document.querySelector("#updatepopup") as HTMLElement;
    document.addEventListener("click", (e: any) => {
      if (!LogoutBox.contains(e.target) && !logOutBtn.contains(e.target)) {
        logoutDiv.style.visibility = "hidden";
      }
      if (!UpdateBox.contains(e.target) && !UpdateBtn.contains(e.target)) {
        updatePopup.style.visibility = "hidden";
        setUserImage("");
      }
    });
  };

  const [applydata, setApplydata] = useState([]);
  const onApplication = async () => {
    const reqDecodeddata = await axios.get("/pages/api/user/decodedData");
    const reqData = reqDecodeddata.data.decodeddata;
    if (!reqData) {
      console.log("You are not logged yet");
    } else {
      const loggedUser = await axios.get(
        `/pages/api/user/decodedData/${reqData.id}`
      );
      const loggedData = loggedUser.data.signupData;
      const reqApplyData = await axios.get("/pages/api/informations/apply");
      const applyData = reqApplyData.data?.allApplyData || "";
      const filterData = applyData.filter(
        (item: any) => item.useremail == loggedData.emailOrnumber
      );
      setApplydata(filterData);
    }
  };

  const [editData, setEditData] = useState({
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

  const onBase64 = (e: any) => {
    if(e.target.files[0].size>100000){
      alert("Image will (100 X 100)pixales and 100kb")
    }else{
    const reader: any = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = () => {
      setEditData({ ...editData, image: reader.result });
    };
    reader.onerror = () => {
      console.log("file not found");
    };
  }
  };

  const [applyId, setApplyId] = useState("");
  const onApplyDiv = async (id: any) => {
    setApplyId(id);
    const allapplyDiv = document.querySelector("#AllapplyDiv") as HTMLElement;
    allapplyDiv.style.visibility = "visible";
    const AllApplyData = await axios.get(`/pages/api/informations/apply/${id}`);
    const reqdata = AllApplyData.data.findData;
    setEditData({
      ...editData,
      name: reqdata.name,
      fatherName: reqdata.fatherName,
      motherName: reqdata.motherName,
      dateOfbirth: reqdata.dateOfbirth,
      address: reqdata.address,
      mobile: reqdata.mobile,
      applicationFor: reqdata.applicationFor,
      institutionName: reqdata.institutionName,
      image: reqdata.image,
      useremail: reqdata.useremail,
    });
  };

  const onEdit = async (e: any) => {
    e.preventDefault();
    if(
          editData.name == ""
      || editData.fatherName == ""
      || editData.motherName == ""
      || editData.dateOfbirth == ""
      || editData.address == ""
      || editData.mobile == ""
      || editData.applicationFor == ""
      || editData.institutionName == ""
      || editData.image ==""
      || editData.useremail == ""
    ){
      alert("Some files are blank")
    }else{

    const sendEditData = await axios.post(
      "/pages/api/informations/apply/edit",
      { editData, applyId }
    );
    if (!sendEditData.data.success) {
      alert("something went wrong");
    } else {
      alert("Data is updated!");
    }
  }
  };
  const onBack = ()=>{
    const allapplyDiv = document.querySelector("#AllapplyDiv") as HTMLElement;
    allapplyDiv.style.visibility = "hidden";
  }

  const onDeleteApplication = async()=>{
    const senddeleteData = await axios.post("/pages/api/informations/apply/delete",{applyId});
    if(!senddeleteData.data.success){
        console.log("something went wrong")
    }else{
      alert("Application is deleted successfully!")
      const allapplyDiv = document.querySelector("#AllapplyDiv") as HTMLElement;
      allapplyDiv.style.visibility = "hidden";
      router.refresh()
    }
 
  }

  useEffect(() => {
    windowClickingEvent();
    onUserProfileDetails();
    onApplication();
  }, []);

  return (
    <main id={Style.main} className=" overflow-y-scroll h-screen bg-emerald-600  text-white">
      <div>
        <div className=" flex flex-col items-center ">
          <div className=" relative mt-5">
            <Image
              className=" rounded-full"
              src={userdata.image}
              alt="profile"
              width={200}
              height={200}
            />
            <button
              id="updatebtn"
              onClick={onUpdatePopup}
              className=" bg-black p-1 rounded-md absolute bottom-5 right-10"
            >
              update
            </button>
          </div>

          <div className=" bg-yellow-500  flex flex-col   p-5 text-sm rounded-md gap-2">
            <h1 className=" text-center text-xl underline underline-offset-4">
              Profile
            </h1>
            <div className=" flex gap-2 items-center">
              <h1>Name:</h1>
              <h1>{userdata.name}</h1>
            </div>
            <div className=" flex gap-2 items-center">
              <h1>Email or Number:</h1>
              <h1>{userdata.emailOrnumber}</h1>
            </div>
            <div className=" flex gap-2">
              <h1>Address:</h1>
              <h1>{userdata.address}</h1>
            </div>
          </div>
        </div>
        <div className=" flex justify-center">
          <div className=" mt-5">
            <h1 className=" underline underline-offset-4 text-center text-xl mb-3">
              My Applications
            </h1>
            <div className=" w-96 max-sm:w-72 p-5 bg-cyan-400 rounded-sm ">
              
              {
                !applydata.length?(
                      <div className=" items-center bg-slate-700 rounded-md justify-between p-5 flex gap-5 select-none ">
                          <h1>Applications are empty!</h1>
                      </div>
                ):(
              <ol className=" ">
                <Swiper
                  pagination={true}
                  spaceBetween={10}
                  modules={[Navigation, Pagination]}
                >
                  {
                    applydata.map((item: any) => (
                        <SwiperSlide key={item._id}>
                          <li
                            key={item._id}
                            className=" items-center bg-slate-700 rounded-md justify-between p-5 flex gap-5 select-none "
                          >
                            <div>{item.applicationFor} </div>
                          
                              <button
                                className=" w-20 h-8 bg-red-600 hover:bg-red-700 active:bg-red-900 rounded-md"
                                onClick={() => onApplyDiv(item._id)}
                              >
                                Edit
                              </button>
                        

                          </li>
                        </SwiperSlide>
                      ))
                    }
                </Swiper>
              </ol>
                  )
               }
            </div>
          </div>
        </div>

        <div className=" flex justify-center mt-16 pb-10 ">
          <button
            id="logoutBtn"
            onClick={onLogutPopup}
            className="w-52 h-10 rounded-md  bg-green-700 hover:bg-green-800 active:bg-green-900"
          >
            Logout
          </button>
        </div>
      </div>

      {/* update_popup_start */}

      <div
        id="updatepopup"
        className=" z-50 invisible flex items-center justify-center fixed top-0 right-0 left-0 h-screen bg-slate-800/80"
      >
        <div
          id="updateBox"
          className=" max-sm:w-72 p-10 border rounded-md backdrop:filter backdrop-blur-3xl"
        >
          <div className=" flex flex-col gap-3">
            <h1>Image :</h1>
            <input onChange={base64} type="file" accept="**/image" />
          </div>
          <div className="  mt-5 flex justify-center items-center">
            {userImage ? (
              <Image src={userImage} alt="img" width={100} height={100} />
            ) : null}
          </div>
          <div className=" mt-5 flex items-center justify-center">
            <button
              onClick={onImageUpdate}
              className="  w-52 h-10 rounded-md bg-emerald-700 hover:bg-emerald-800 active:bg-emerald-900"
            >
              Upload
            </button>
          </div>
        </div>
      </div>

      {/* update_popup_end */}

      {/* popup-box-start */}

      <div
        id="logoutPopup"
        className=" z-50 invisible bg-slate-800/80 h-screen w-full fixed top-0 left-0 right-0 flex items-center justify-center"
      >
        <div
          id="logoutBox"
          className=" bg-emerald-700 rounded-md  h-72 w-96 max-sm:w-72 flex flex-col justify-center gap-10  "
        >
          <h1 className=" text-center underline underline-offset-4 ">
            Do you want to logout ?
          </h1>
          <div className="  flex justify-around">
            <button
              className=" bg-green-500 hover:bg-green-700 active:bg-green-900 h-12 w-40 max-sm:w-28 max-sm:text-sm rounded-md"
              onClick={OnLogut}
            >
              Logout
            </button>
            <button
              onClick={onCancel}
              className=" bg-red-500 hover:bg-red-700 active:bg-red-900 h-12 w-40 max-sm:w-28 max-sm:text-sm rounded-md"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
      {/* popup-box-end */}

      {/* application-edit_popup_start */}

      <div
        id="AllapplyDiv"
        className=" overflow-y-scroll invisible fixed top-0 left-0 right-0 z-50 bg-slate-800/80 h-screen"
      >
        <button onClick={onBack} className=" fixed top-3 left-3">Back</button>
        <h1 className=" text-center pt-5 underline underline-offset-4">From</h1>
        <div className=" mt-5 flex items-center flex-col justify-center">
          <form
            id="applyForm"
            className=" p-5 bg-emerald-800 text-white rounded-md sm:w-5/6  md:w-5/6 lg:w-1/2 flex flex-col gap-5 max-sm:items-center  pt-5  pr-10 pl-10"
          >
            <div className="sm:justify-between  flex max-sm:flex-col max-sm:gap-5 sm:gap-4  justify-around">
              <div>
                <div>Name :</div>
                <div>
                  <input
                    value={editData.name}
                    onChange={(e) =>
                      setEditData({ ...editData, name: e.target.value })
                    }
                    placeholder="Full Name"
                    type="text"
                    name="name"
                    className=" pl-2 h-8 rounded-md text-black"
                  />
                </div>
              </div>
              <div>
                <div>Father's Name : </div>
                <div>
                  <input
                    value={editData.fatherName}
                    onChange={(e) =>
                      setEditData({ ...editData, fatherName: e.target.value })
                    }
                    placeholder="Father's Name"
                    type="text"
                    name="name"
                    className=" pl-2 h-8 rounded-md text-black"
                  />
                </div>
              </div>
            </div>

            <div className="  sm:justify-between  flex max-sm:flex-col max-sm:gap-5 sm:gap-4 justify-around">
              <div>
                <div>Mother's Name :</div>
                <div>
                  <input
                    value={editData.motherName}
                    onChange={(e) =>
                      setEditData({ ...editData, motherName: e.target.value })
                    }
                    placeholder="Mother's Name"
                    type="text"
                    name="name"
                    className=" pl-2 h-8 rounded-md text-black"
                  />
                </div>
              </div>
              <div className="">
                <div>Date of Birth :</div>
                <div>
                  <input
                    value={editData.dateOfbirth}
                    onChange={(e) =>
                      setEditData({ ...editData, dateOfbirth: e.target.value })
                    }
                    type="date"
                    name="date"
                    className=" pl-2 h-8 rounded-md text-black"
                  />
                </div>
              </div>
            </div>
            <div className=" sm:justify-between  flex max-sm:flex-col max-sm:gap-5 sm:gap-4 justify-around">
              <div>
                <div>Address :</div>
                <div>
                  <input
                    value={editData.address}
                    onChange={(e) =>
                      setEditData({ ...editData, address: e.target.value })
                    }
                    placeholder="Mother's Name"
                    type="text"
                    name="address"
                    className=" pl-2 h-8 rounded-md text-black"
                  />
                </div>
              </div>
              <div>
                <div>Mobile :</div>
                <div>
                  <input
                    value={editData.mobile}
                    onChange={(e) =>
                      setEditData({ ...editData, mobile: e.target.value })
                    }
                    placeholder="Mobile No:"
                    type="text"
                    name="name"
                    className=" pl-2 h-8 rounded-md text-black"
                  />
                </div>
              </div>
            </div>
            <div className="sm:justify-between flex max-sm:flex-col max-sm:gap-5 sm:gap-4  justify-around">
              <div>
                <div>Application for :</div>
                <div>
                  <input
                    value={editData.applicationFor}
                    onChange={(e) =>
                      setEditData({
                        ...editData,
                        applicationFor: e.target.value,
                      })
                    }
                    type="text"
                    name="address"
                    className=" pl-2 h-8 rounded-md text-black"
                  />
                </div>
              </div>
              <div>
                <div>Institution Name :</div>
                <div>
                  <input
                    value={editData.institutionName}
                    onChange={(e) =>
                      setEditData({
                        ...editData,
                        institutionName: e.target.value,
                      })
                    }
                    type="text"
                    name="name"
                    className=" pl-2 h-8 rounded-md text-black"
                  />
                </div>
              </div>
            </div>
            <div>
              <div>Image : </div>
              <div className=" max-sm:w-60">
                <input
                  onChange={onBase64}
                  type="file"
                  accept="**/image"
                  className=" "
                />
              </div>
            </div>
            {editData.image == "" ? null : (
              <div className=" flex items-center justify-center">
                <Image
                  src={editData.image}
                  alt="img"
                  width={100}
                  height={100}
                  className=" rounded-md text-black"
                />
              </div>
            )}

            <button
              onClick={onEdit}
              className=" max-sm:w-full h-10 rounded-md bg-green-600 hover:bg-green-700 active:bg-green-900"
            >
              submit
            </button>
          </form>
          <div className=" pb-20">
            <h1 className=" text-center mt-5">-Or-</h1>
            <div className=" mt-5"><button onClick={onDeleteApplication} className="bg-red-500 hover:bg-red-700 active:bg-red-900  w-52 h-10 rounded-md">Delete</button></div>
          </div>
        </div>
      </div>

      {/* application_edit-popup_end */}
    </main>
  );
}
