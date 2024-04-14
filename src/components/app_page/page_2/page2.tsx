import Link from "next/link";
import Style from "./page2.module.css";
import TalentedStudents from "./talentedStudents/talents";
export default function Page2() {
  return (
    <div id="pge2" className=" pr-5 pl-5 ">
      <h1 className=" underline underline-offset-4 text-xl">
        School Achievments:-
      </h1>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae,
        in, autem aperiam aliquam temporibus dolor ratione cumque distinctio
        necessitatibus tempora culpa quo. Neque explicabo officiis aspernatur
        voluptatibus, id officia reiciendis! Cum error dolores qui expedita ut
        consectetur eum enim, id aut vel neque laboriosam! Expedita, et! Fuga,
        vel. Accusamus molestias optio officia eveniet distinctio adipisci
        reiciendis doloremque dolore illum. Cum! Cum temporibus eos consectetur
        deserunt quisquam distinctio dolorum, quia adipisci mollitia
        reprehenderit labore atque vel architecto minima perferendis illum?
        Rerum nemo ipsam impedit consequuntur repudiandae ut quod hic accusamus
        dolorem! Sit earum officiis debitis quas m quisquam corrupti nihil odit
        reiciendis commodi voluptates deleniti incidunt, temporibus, voluptatum
        nobis excepturi cum? Quas cumque earum libero sint! Aperiam
        exercitationem eius asperiores obcaecati unde quibusdam error
        praesentium sapiente, sint nostrum laborum pariatur! Quia reprehenderit,
        quibusdam ipsam eos fugiat suscipit? Dolorum dolorem consequatur beatae
        excepturi provident? Veniam, consequuntur. Sunt!
      </p>
      <div className=" mt-5 ">
        <h1 className=" text-xl underline underline-offset-4">
          Teachers Pannel:-
        </h1>
        <div className=" mt-3  p-10 flex justify-between gap-5 max-sm:gap-2 max-sm:text-sm max-sm:pr-5 max-sm:pl-5 sm:pr-10 sm:pl-10 md:pr-14 md:pl-14 lg:pl-20 lg:pr-20 bg-yellow-300 rounded-md">
          <div className="  w-full flex flex-col items-center ">
            <h1 className=" underline underline-offset-4 font-semibold">
              Science
            </h1>
            <ul
              id={Style.TeacherUl}
              className=" mt-4 w-full flex flex-col gap-3"
            >
              <Link href={`/teachers/teachers_details/${"sir name"}`}>
                <li>Ashim Dhar</li>
              </Link>
              <Link href={`/teachers/teachers_details/${"sir name"}`}>
                <li>Bimol Biswas</li>
              </Link>
              <Link href={`/teachers/teachers_details/${"sir name"}`}>
                <li>Bishawa Biswas</li>
              </Link>
              <Link href={`/teachers/teachers_details/${"sir name"}`}>
                <li>Jahangir</li>
              </Link>
              <Link href={`/teachers/teachers_details/${"sir name"}`}>
                <li>Jahangir</li>
              </Link>
              <Link href={`/teachers/teachers_details/${"sir name"}`}>
                <li>Jahangir</li>
              </Link>
            </ul>
          </div>
          <div className="  w-full flex flex-col items-center ">
            <h1 className=" underline underline-offset-4 font-semibold">
              Arts
            </h1>
            <ul
              id={Style.TeacherUl}
              className=" mt-4 w-full flex flex-col gap-3"
            >
              <Link href={`/teachers/teachers_details/${"sir name"}`}>
                <li>Jahangir</li>
              </Link>
              <Link href={`/teachers/teachers_details/${"sir name"}`}>
                <li>Jahangir</li>
              </Link>
              <Link href={`/teachers/teachers_details/${"sir name"}`}>
                <li>Jahangir</li>
              </Link>
              <Link href={`/teachers/teachers_details/${"sir name"}`}>
                <li>Jahangir</li>
              </Link>
              <Link href={`/teachers/teachers_details/${"sir name"}`}>
                <li>Jahangir</li>
              </Link>
              <Link href={`/teachers/teachers_details/${"sir name"}`}>
                <li>Jahangir</li>
              </Link>
            </ul>
          </div>
          <div className="  w-full flex flex-col items-center ">
            <h1 className=" underline underline-offset-4 font-semibold">
              Comerce
            </h1>
            <ul
              id={Style.TeacherUl}
              className=" mt-4 w-full flex flex-col gap-3"
            >
              <Link href={`/teachers/teachers_details/${"sir name"}`}>
                <li>Jahangir</li>
              </Link>
              <Link href={`/teachers/teachers_details/${"sir name"}`}>
                <li>Jahangir</li>
              </Link>
              <Link href={`/teachers/teachers_details/${"sir name"}`}>
                <li>Jahangir</li>
              </Link>
              <Link href={`/teachers/teachers_details/${"sir name"}`}>
                <li>Jahangir</li>
              </Link>
              <Link href={`/teachers/teachers_details/${"sir name"}`}>
                <li>Jahangir</li>
              </Link>
              <Link href={`/teachers/teachers_details/${"sir name"}`}>
                <li>Jahangir</li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
      {/* Talented Students list */}
      <TalentedStudents />
      {/* Talented Students list end */}

      <div className=" mt-5">
        <h1 className=" text-center underline underline-offset-4 text-xl">
          School Activities
        </h1>
        <p className=" pt-2 max-sm:text-sm max-sm:pr-0 ">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus
          recusandae, ut atque ullam molestiae dolorum aliquid est deleniti
          sapiente labore nam voluptas, velit cum corrupti vero dolores modi
          amet magni? Eum consequatur error repellendus sint, itaque eius libero
          sit amet distinctio, natus veniam sed dolore vel cupiditate quos
          numquam voluptatem asperiores! Quae nostrum necessitatibus accusamus
          quibusdam, et ea error corrupti. Harum nobis culpa inventore magni,
          suscipit nesciunt tempore minima veniam nemo perspiciatis. Nulla
          aperiam doloribus molestias possimus id culpa. Veritatis dolore, amet
          dignissimos facilis officia rem distinctio delectus saepe sit. A
          beatae laborum similique cum in est deleniti impedit exercitationem
          ratione architecto molestiae illo, officia excepturi. Rerum, odio a.
          Earum unde dicta sunt suscipit corporis vero eos? Illum, nam dolorum!
          Tenetur architecto nulla voluptatibus reprehenderit voluptas sunt,
          consequatur id temporibus sint voluptates culpa, quas distinctio
          blanditiis obcaecati eos accusantium repellendus aut veritatis
          aspernatur assumenda eaque. Voluptas ipsum vitae quibusdam a? Non
          autem perferendis officia odit quia natus, excepturi beatae quae.
          Dolorum sunt dolor exercitationem possimus veritatis aspernatur quidem
          in aut omnis, suscipit nemo. Unde natus corporis exercitationem
          necessitatibus molestiae eaque. Nemo quis quod cupiditate recusandae
          fuga, tenetur incidunt ipsum deleniti numquam! Iste, earum quam veniam
          beatae ipsa eveniet nesciunt ea itaque consectetur! Qui ea facere, a
          incidunt blanditiis nihil nobis. Ex ducimus numquam porro laudantium,
          repellendus eum explicabo vero voluptate nemo ad sed fugit. Dicta,
          eius nesciunt laboriosam iure cupiditate quam vitae impedit at qui
          nostrum magni ea eaque suscipit! Quos ab laboriosam vero temporibus
          fuga facere aliquam. Ad illo, molestiae sunt quod placeat perferendis
          id at eligendi veritatis iure omnis fugiat nemo magni unde, rem
          doloribus exercitationem possimus accusamus? Temporibus necessitatibus
          architecto enim eaque porro, exercitationem quos expedita in sit at
          natus ratione! Animi, nihil sapiente ut assumenda nemo rerum molestiae
          nisi quibusdam, earum possimus ullam numquam eius minus.
        </p>
      </div>
    </div>
  );
}
