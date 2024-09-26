import ButtonLink from "@/components/ui/ButtonLink";
import Image from "next/image";

export default function StartBanner() {
  return (
    <section className="bg-white rounded-[30px] w-full mt-[42px] relative mb-[50px]">
      <div className="flex flex-col h-[406px] w-[437px] m-[40px]">
        <h2 className="text-[60px] font-medium leading-[60px] mb-7">
          Начните путь к новому телу
        </h2>
        <ol className="opacity-60 font-normal text-[24px] list-disc list-inside pb-1">
          <li>проработка всех групп мышц</li>
          <li>тренировка суставов</li>
          <li>улучшение циркуляции крови</li>
          <li>упражнения заряжают бодростью</li>
          <li>помогают противостоять стрессам</li>
        </ol>
        <ButtonLink text="Войдите, чтобы добавить курс" href="/signin" />
      </div>
      <div className="relative">
        <div className="absolute overflow-hidden w-[634px] h-[386px] top-[-386px] right-[6px]">
          <Image
            src="/img/icons/vector-2.svg"
            alt="Зелёная линия"
            width={670}
            height={390}
            draggable={false}
            className="absolute select-none"
          />
        </div>
        <Image
          src="/img/icons/man.svg"
          alt="Спортсмен"
          width={487}
          height={542}
          draggable={false}
          className="absolute top-[-582px] left-[646px] z-50 select-none"
        />
        <Image
          src="/img/icons/vector-1.svg"
          alt="Черная линия"
          width={50}
          height={42.5}
          draggable={false}
          className="absolute top-[-463px] left-[757px] select-none"
        />
      </div>
    </section>
  );
}
