import Image from "next/image";

export default function ProfileInfo() {
  return (
    <div className="bg-white rounded-3xl h-[257px]">
      <div className="flex flex-row  p-[30px]  w-[624px] h-[197px]">
        <Image
          src="/img/profile.svg"
          alt="Фото профиля"
          width={197}
          height={197}
        />
        <div className="flex flex-col h-48 w-96">
          <h1 className="text-[32px]">Сергей</h1>

          <p className="text-[18px]">Логин: sergey.petrov96</p>
          <p className="text-[18px]">Пароль: 4fkhdj880d</p>

          <button className="px-[28px] w-[192px] h-[52px] py-4 rounded-[46px] bg-[#BCEC30] hover:bg-[#C6FF00] transition-colors duration-300 ease-linear">Изменить пароль</button>
          <button className="px-[28px] w-[192px] h-[52px] py-4 rounded-[46px] transition-colors duration-300 ease-linear">Выйти</button>
        </div>
      </div>
    </div>
  );
}
