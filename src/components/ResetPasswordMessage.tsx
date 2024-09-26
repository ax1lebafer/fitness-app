import Image from "next/image";
import { useAppSelector } from "@/store/store";

export default function ResetPasswordMessage() {
  const userEmail = useAppSelector((state) => state.user.email);

  return (
    <div className="w-full min-h-full overflow-hidden opacity-75">
      <div className="max-w-full h-lvh my-auto mx-auto relative">
        <div className="absolute left-[calc(50%-(360px/2))] top-[calc(50%-(527px/2))] opacity-100">
          <form
            className="w-[360px] p-[40px] bg-[white] rounded-[30px] flex flex-col items-center pt-[43px] pr-[47px] pb-[47px] pl-[40px]"
            action="#"
          >
            <div className="w-[220px] h-[35px]  mb-[48px]">
              <Image src="/img/logo.svg" alt="logo" width={220} height={35} />
            </div>
            <span className="mt-[10px] text-[#000000] text-[18px] leading-[19.8px] text-center font-normal">
              Ссылка для востановления пароля отправлена на {userEmail}
            </span>
          </form>
        </div>
      </div>
    </div>
  );
}
