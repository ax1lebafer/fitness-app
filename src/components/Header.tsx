"use client";

import Image from "next/image";
import Link from "next/link";
import ButtonLink from "@/components/ui/ButtonLink";
import { useAppSelector } from "@/store/store";

export default function Header() {
  const user = useAppSelector((state) => state.user);
  const { isEntering } = useAppSelector((state) => state.user);

  return (
    <header className="flex justify-between pt-[30px] pb-[60px] items-center">
      <div>
        <Link href="/">
          <Image
            src="/img/logo.svg"
            alt="Логотип Fitness App"
            width={220}
            height={35}
          />
          <span className="sr-only">Логотип Fitness App</span>
        </Link>
        <p className="mt-[15px] opacity-50">
          Онлайн-тренировки для занятий дома
        </p>
      </div>
      {/* {user.email === "" ? ( */}
      {!isEntering ? (
        <ButtonLink text={"Войти"} href={"/signin"} />
      ) : (
        <div className="w-auto h-[50px] flex flex-row gap-[15px]">
          <div>
            <Image
              src="/img/avatar-small.svg"
              alt="avatar"
              width={50}
              height={50}
            />
          </div>
          <div className="text-center text-2xl pt-[6px]">{user.email}</div>
        </div>
      )}
    </header>
  );
}
