import Image from "next/image";

export default function MainCourses() {
  return (
    <main className="flex flex-col justify-center h-full gap-[60px]">
      <section
        className="flex flex-row justify-between rounded-[30px] bg-[#FFC700] overflow-hidden h-[310px] w-full relative">
        <div className="p-10 text-[60px] text-white font-medium">Йога</div>
        <Image src="/img/size-1.svg"
               alt="Женщина занимается йогой"
               width={800}
               height={683}
               className="absolute left-[50%] translate-x-[-20%] h-full"
        />
      </section>
      <section>
        <h2 className="text-[40px] font-semibold leading-[44px]">Подойдет для вас, если:</h2>
        <div className="flex flex-wrap gap-[17px] text-white flex-row pt-10">
          <div
            className="bg-[linear-gradient(115.81deg,_#151720_34.98%,_#1E212E_91.5%)] rounded-[28px] w-[369px] h-[141px] p-5">
            <div className="flex gap-[25px] items-center h-[101px]">
              <p className="text-[#BCEC30] text-[75px] leading-[75px]">1</p>
              <p className="text-[24px] font-normal break-words">Давно хотели попробовать йогу,<br /> но не решались
                начать</p>
            </div>
          </div>
          <div
            className="bg-[linear-gradient(115.81deg,_#151720_34.98%,_#1E212E_91.5%)] rounded-[28px] w-min-[320px] h-[141px] p-5">
            <div className="flex gap-[25px] items-center h-[101px]">
              <p className="text-[#BCEC30] text-[75px] leading-[75px]">2</p>
              <p className="text-[24px] font-normal break-words">Хотите укрепить<br /> позвоночник, избавиться<br /> от
                болей в спине и суставах</p>
            </div>
          </div>
          <div
            className="bg-[linear-gradient(115.81deg,_#151720_34.98%,_#1E212E_91.5%)] rounded-[28px] w-min-[320px] h-[141px] p-5">
            <div className="flex gap-[25px] items-center h-[101px]">
              <p className="text-[#BCEC30] text-[75px] leading-[75px]">3</p>
              <p className="text-[24px] font-normal break-words">Ищете активность,<br /> полезную для тела<br /> и души
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="w-[100%]">
        <h2 className="text-[40px] font-semibold leading-[44px] mb-10">Направления</h2>
        <ul
          className="flex flex-wrap flex-row text-[24px] font-normal bg-[#BCEC30] rounded-[28px] w-[100%] p-[30px] ">
          <ul className="flex flex-col gap-[30px] w-[284px]">
            <li className="flex gap-2"><Image src="img/Sparcle.svg" width={26} height={26} alt="Изображение звезды" />Йога
              для новичков
            </li>
            <li className="flex gap-2"><Image src="img/Sparcle.svg" width={26} height={26} alt="Изображение звезды" />Классическая
              йога
            </li>
          </ul>
          <ul className="flex flex-col gap-[30px] w-[284px]">
            <li className="flex gap-2"><Image src="img/Sparcle.svg" width={26} height={26} alt="Изображение звезды" />Кундалини-йога
            </li>
            <li className="flex gap-2"><Image src="img/Sparcle.svg" width={26} height={26} alt="Изображение звезды" />Йогатерапия
            </li>
          </ul>
          <ul className="flex flex-col gap-[30px] w-[284px]">
            <li className="flex gap-2"><Image src="img/Sparcle.svg" width={26} height={26} alt="Изображение звезды" />Хатха-йога
            </li>
            <li className="flex gap-2"><Image src="img/Sparcle.svg" width={26} height={26} alt="Изображение звезды" />Аштанга-йога
            </li>
          </ul>
        </ul>
      </section>
      <section className="bg-white rounded-[30px] w-[100%]">
        <div className="flex flex-col h-[406px] w-[437px]">
          <h2 className="text-[60px] font-medium leading-[60px]">Начните путь
            к новому телу</h2>
          <ol className="opacity-60 font-normal text-[24px] list-disc list-inside">
            <li>проработка всех групп мышц</li>
            <li>тренировка суставов</li>
            <li>улучшение циркуляции крови</li>
            <li>упражнения заряжают бодростью</li>
            <li>помогают противостоять стрессам</li>
          </ol>
        </div>
        <div>
          <Image src="/img/icons/man.svg"
                 alt="Спортсмен"
                 width={487}
                 height={542} />
          <Image src="/img/icons/vector-1.svg"
                 alt="Спортсмен"
                 width={50}
                 height={42.5} />
          <Image src="/img/icons/vector-2.svg"
                 alt="Спортсмен"
                 width={670}
                 height={391} />
        </div>
      </section>
    </main>
  );
}