"use client";

import Image from "next/image";
import Link from "next/link";
import ProgressBar from "@/components/ProgressBar";
import { usePathname } from "next/navigation";

export default function Card() {
  const pathname = usePathname();
  const isProfilePage = pathname === "profile";

  return (
    <div className="w-[360px] bg-white rounded-[30px]">
      <div className="relative h-[325px]">
        <Image
          className="rounded-[30px]"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          src="/img/train-1.png"
          alt="Курс"
        />
        <Image
          src="/img/icons/add.svg"
          alt="Добавить"
          width={26}
          height={26}
          className="absolute right-6 top-6 cursor-pointer hover:scale-125 transition ease-linear"
        />
      </div>
      <div className="flex px-[30px] py-5 flex-col gap-5">
        <Link className="hover:underline" href="/">
          <p className="text-3xl font-medium leading-none">Йога</p>
        </Link>
        <div className="flex gap-1.5 flex-wrap">
          <div className="bg-[#F7F7F7] p-[10px] rounded-[50px] flex gap-1.5">
            <Image
              src="/img/icons/calendar.svg"
              alt="Календарь"
              width={15}
              height={15}
            />
            <p className="text-[16px]">25 дней</p>
          </div>
          <div className="bg-[#F7F7F7] p-[10px] rounded-[50px] flex gap-1.5">
            <Image
              src="/img/icons/clock.svg"
              alt="Часы"
              width={15}
              height={15}
            />
            <p className="text-[16px]">20-50 мин/день</p>
          </div>
          <div className="bg-[#F7F7F7] p-[10px] rounded-[50px] flex gap-1.5">
            <Image
              src="/img/icons/level.svg"
              alt="Часы"
              width={15}
              height={15}
            />
            <p className="text-[16px]">Сложность</p>
          </div>
        </div>
        {isProfilePage && <ProgressBar />}
      </div>
    </div>
  );
}
