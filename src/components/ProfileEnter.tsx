"use client";

import ButtonLink from "@/components/ui/ButtonLink";
import { useAppSelector } from "@/store/store";

export default function ProfileEnter() {
  const userMail = useAppSelector((state) => state.user.email);

  return (
    <div className="w-full min-h-full overflow-hidden opacity-75">
      <div className="max-w-full h-lvh my-auto mx-auto relative">
        {/* Позиционирование модального окна в реальности будет другое */}
        <div className="absolute left-[calc(50%-(266px/2))] top-[calc(50%-(280px/2))] opacity-100">
          <form
            className="w-[266px] p-[30px] bg-[white] rounded-[30px] flex flex-col items-center"
            action="#"
          >
            <div className="w-[206px] h-[50px]  mb-[34px]">
              <div className="flex flex-col gap-[10px] text-center text-[18px] font-normal leading-4">
                <p className="text-[#000000]">Сергей</p>
                <p className="text-[#999999]">{userMail}</p>
              </div>
            </div>
            <div className="flex flex-col gap-[10px]">
              <ButtonLink
                text="Мой профиль"
                className="mt-[0px] w-[206px]"
                href="/profile"
              />
              <ButtonLink
                text="Выйти"
                className="mt-[0px] w-[206px] bg-transparent border border-black hover:bg-[#F7F7F7] hover:text-black active:bg-[#E9ECED] active:text-black"
                href="/"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
