import Image from "next/image";
import Link from "next/link";

export default function Header() {
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
      <Link href="./login">
        <button className="px-[28px] py-4 rounded-[46px] bg-[#BCEC30] hover:bg-[#C6FF00] transition-colors duration-300 ease-linear">
          Войти
        </button>
      </Link>
    </header>
  );
}
