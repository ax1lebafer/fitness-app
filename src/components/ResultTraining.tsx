import TargetList from "@/components/TargetList";
import ButtonLink from "@/components/ui/ButtonLink";

export interface arrayTrainingProps {
  target: string,
  result: number,
}

export default function ResultTraining() {
  const arrayTraining: arrayTrainingProps[] = [
    {
      target: 'Наклоны вперед',
      result: 0,
    },
    {
      target: 'Наклоны назад',
      result: 10,
    },
    {
      target: 'Поднятие ног, согнутых в коленях',
      result: 0,
    },
    {
      target: 'Наклоны вперед',
      result: 0,
    },
    {
      target: 'Наклоны назад',
      result: 10,
    },
    {
      target: 'Поднятие ног, согнутых в коленях',
      result: 0,
    },
    {
      target: 'Наклоны вперед',
      result: 0,
    },
    {
      target: 'Наклоны назад',
      result: 10,
    },
    {
      target: 'Поднятие ног, согнутых в коленях',
      result: 0,
    },
  ]
  return (
    <div className="w-[100%] rounded-[30px] overflow-hidden mt-[40px] p-10 bg-white">
      <div>
        <h2 className="text-[32px]">Упражнения тренировки 2</h2>
        <TargetList targetList={arrayTraining} />
        <ButtonLink text={"Заполнить свой прогресс"} className="w-[320px] mt-[20px]"/>
      </div>
    </div>
  );
}