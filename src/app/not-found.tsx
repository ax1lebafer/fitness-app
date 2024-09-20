import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-[60vh]">
      <h1 className="text-6xl font-bold">404</h1>
      <p className="mt-6 text-2xl text-center">
        Упс...
        <br />
        Страницу, которую ты ищешь не найдена
      </p>
      <Link
        href="/"
        className="mt-6 px-[28px] py-4 rounded-[46px] bg-[#BCEC30] hover:bg-[#C6FF00] transition-colors duration-300 ease-linear inline-block text-center"
      >
        Вернуться на главную
      </Link>
    </div>
  );
}
