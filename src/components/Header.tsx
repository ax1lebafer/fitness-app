import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="flex justify-between pt-[50px] pb-[60px] items-center">
      <div>
        <Link href="/">
          <Image src="/img/logo.svg" alt="Логотип" width={220} height={35} />
        </Link>
        <p className="mt-[15px] opacity-50">
          Онлайн-тренировки для занятий дома
        </p>
      </div>
      <button className="px-[28px] py-4 rounded-[46px] bg-[#BCEC30]">
        Войти
      </button>
    </header>
  );
}
