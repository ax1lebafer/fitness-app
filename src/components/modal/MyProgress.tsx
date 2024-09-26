import { InputMyProgress } from "./InputMyProgress";

export default function MyProgress() {
  return (
    <div
      className="fixed top-[calc(50%-(487px/2))] left-[calc(50%-(343px/2))] lg:top-[calc(50%-(596px/2))] lg:left-[calc(50%-(426px/2))]
       bg-white  rounded-[30px] shadow-def w-[343px] p-[30px] lg:w-[426px] lg:p-10"
    >
      <h1 className="font-skyeng text-[32px] text-black mb-12">Мой прогресс</h1>
      <div className="w-[237px] lg:w-[320px] max-h-[350px]  mb-[34px] overflow-x-hidden">
        <InputMyProgress />
      </div>
    </div>
  );
}
