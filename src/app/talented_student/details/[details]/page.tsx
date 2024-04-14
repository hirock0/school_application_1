import Style from "./details.module.css";
import Image from "next/image";
import AwardImages from "./awardEventPics/awardImage";
import { TalentedStudentSchema } from "@/lib/model/models";
import Link from "next/link";
const TalentedStudentName = async (props: any) => {
  const Name = props;
  if (!Name) {
    return null;
  } else {
    const StudentDetails = await TalentedStudentSchema.find();
    const SplitName = Name.split("%20");
    const reduceName = SplitName.reduce(
      (accu: any, elm: any, idx: any) => accu + " " + elm
    );
    const filterDetails = StudentDetails.filter(
      (item: any) => item.name == reduceName
    );
    const StudentDets = filterDetails[0];
    return [StudentDets, reduceName];
  }
};

export default async function TalentedStudentDetails(props: any) {
  const talentedStudentName = props.params.details;
  const StudentDetails: any = await TalentedStudentName(talentedStudentName);

  return (
    <main>
      <div className=" fixed top-2 left-5  text-white flex items-center justify-center">
        <Link href={"/"}>
          <button className=" hover:bg-green-700 bg-green-600 active:bg-green-900 p-1 rounded-md">
            Home
          </button>
        </Link>
      </div>
      {!StudentDetails ? (
        <div>File not found</div>
      ) : (
        <div className="">
          <div className="bg-black p-5 flex items-center justify-center">
            <Image
              id={Style.StudentImage}
              src={StudentDetails[0]?.img || ""}
              alt="img"
              width={500}
              height={500}
            />
          </div>
          <div className=" bg-yellow-400 p-5">
            {/* Student_details_start */}
            <div className=" flex flex-col gap-3 font-semibold items-center">
              <div className=" flex w-52 justify-between">
                <h1>Name:</h1>
                <h1>{StudentDetails[0]?.name || ""}</h1>
              </div>
              <div className=" flex w-52 justify-between">
                <h1>Age:</h1>
                <h1>{StudentDetails[0]?.age} Years Old</h1>
              </div>
              <div className=" flex w-52 justify-between">
                <h1>Class:</h1>
                <h1>{StudentDetails[0]?.class || ""}</h1>
              </div>
              <div className=" flex w-52 justify-between">
                <h1>Awarded:</h1>
                <h1>{StudentDetails[0]?.awardFor || ""}</h1>
              </div>
            </div>
          </div>

          {/* Student_details_end */}

          <div className=" pr-5 pl-5 w-full mt-3">
            <div>
              <h1 className=" underline underline-offset-4 font-semibold text-xl">
                Descriptions:-
              </h1>
              <p className=" mt-2">{StudentDetails[0]?.desciptions || ""}</p>
            </div>
            <div className=" mt-5">
              <h1 className=" underline  underline-offset-4 font-semibold ">
                Address:-
              </h1>
              <p>{StudentDetails[0]?.address || ""}</p>
            </div>
          </div>
          {/* Image_start */}

          <div className=" mt-5">
            <h1 className=" underline underline-offset-4 font-semibold">
              Award Getting Moments:-
            </h1>
            <AwardImages Name={StudentDetails[1]} />
          </div>

          {/* Image_end */}
        </div>
      )}
    </main>
  );
}
