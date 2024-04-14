import Link from "next/link";
import Style from "./btm.module.css";
import Image from "next/image";

export default function Bottom() {
  return (
    <section
      id={Style.bottom}
      className="text-white border-t mt-5 pr-5 pl-5 pb-10 bg-emerald-500"
    >
      <h1 className=" text-xl text-center mt-4 underline underline-offset-4">
        Contact Us
      </h1>
      <div className="  flex bg-sky-800 rounded-md pr-5 pl-5 max-sm:pl-2 max-sm:pr-2 mt-2 pt-2 pb-2 max-sm:text-xs justify-between">
        <Link href={"https://www.facebook.com/profile.php?id=100028605347325"}>
          <div className=" cursor-pointer select-none flex flex-col items-center  hover:text-yellow-400 active:text-yellow-700">
            <div>
              <Image
                src={"/all_svg/facebook-fill.svg"}
                alt="logo"
                width={25}
                height={30}
                className=" "
              />
            </div>
            <div>facebook</div>
          </div>
        </Link>
        <Link href={"https://call.whatsapp.com/video/mjTYdQoRrSKVSMKWATRzIe"}>
          <div className=" cursor-pointer select-none flex flex-col items-center  hover:text-yellow-400 active:text-yellow-700">
            <div>
              <Image
                src={"/all_svg/whatsapp-fill.svg"}
                alt="logo"
                width={25}
                height={30}
                className=" "
              />
            </div>
            <div>whatsApp</div>
          </div>
        </Link>
        <Link href={""}>
          <div className=" cursor-pointer select-none flex flex-col items-center  hover:text-yellow-400 active:text-yellow-700">
            <div>
              <Image
                src={"/all_svg/linkedin.svg"}
                alt="logo"
                width={23}
                height={30}
                className=" "
              />
            </div>
            <div>linked</div>
          </div>
        </Link>
        <Link href={""}>
          <div className=" cursor-pointer select-none flex flex-col items-center  hover:text-yellow-400 active:text-yellow-700">
            <div>
              <Image
                src={"/all_svg/twitter-fill.svg"}
                alt="logo"
                width={25}
                height={30}
                className=" "
              />
            </div>
            <div>twitter</div>
          </div>
        </Link>
      </div>
      <div className=" mt-5">
        <h1 className="  text-center text-xl underline underline-offset-4">
          Address
        </h1>
        <div className=" max-sm:text-sm mt-2 flex justify-center max-sm:flex-col">
          <div className=" text-black  bg-pink-200  w-full p-5">
            <h1 className=" underline underline-offset-4 text-center">
              Local Address:
            </h1>
            <p className=" p-5 max-sm:p-2">
              Bahadurpur,Manirampur,Jashore
              <br />
              Road No:107,UttarPara Road
              <br />
              Mobile : 01700554293,01945055264
            </p>
          </div>
          <div className=" bg-lime-700  w-full p-5">
            <h1 className=" underline underline-offset-4 text-center">
              Committee Address:
            </h1>
            <p className=" p-5 max-sm:p-2">
              Bahadurpur,Manirampur,Jashore
              <br />
              Road No:107,UttarPara Road
              <br />
              Mobile : 01700554293,01945055264,
              <br />
              Head Teacher Contact:01796685988,01756587865
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
