"use client";

import Image from "next/image";
import ButtonLink from "./ui/ButtonLink";
import { useAppSelector } from "@/store/store";

export default function ProfileInfo() {
  const userProfile = useAppSelector((state) => state.user.email);
  // const userProfile = user.email;
  console.log("Profile.user: ", userProfile);

  return (
    <div className="bg-[#FFFFFF] rounded-[30px] sm:px-[30px] px-[10px] py-[30px]">
      <div className="flex flex-wrap flex-row sm:space-x-[33px]">
        <div className="relative sm:w-[197px] w-[141px] sm:h-[197px] h-[141px] sm:mx-[0px] mx-[90px]">
          <Image
            src="/img/profile.png"
            alt="Фото профиля"
            /* className="w-full h-full object-cover" */
            width={197}
            height={197}
          />
        </div>
        <div className="flex flex-col sm:gap-[20px] gap-[13px] sm:mt-0 mt-[22px] sm:ml-0 ml-[19px]">
          <div className="sm:text-[32px] text-[24px] font-bold">Сергей</div>
          <div className="flex flex-col gap-[2px]">
            {/* <p className="text-[18px]">Логин: sergey.petrov96</p> */}
            <p className="text-[18px]">Логин: {userProfile}</p>
            <p className="text-[18px]">Пароль: ***********</p>
          </div>
          <div className="flex flex-wrap flex-col align-center md:flex-row gap-[15px]">
            <ButtonLink text={"Изменить пароль"} />
            <button className="w-[192px] h-[52px] mt-6 px-[28px] py-4 rounded-[46px] border border-black  text-[#000000] hover:bg-[#F7F7F7] active:bg-[#E9ECED] cursor-custom">
              Выйти
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}