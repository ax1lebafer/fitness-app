import ButtonLink from "@/components/ui/ButtonLink";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-[60vh]">
      <h1 className="text-6xl font-bold">404</h1>
      <p className="mt-6 text-2xl text-center">
        Упс...
        <br />
        Страницу, которую ты ищешь не найдена
      </p>
      <ButtonLink text={"Вернуться на главную"} href={"/"} />
    </div>
  );
}
