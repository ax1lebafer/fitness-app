import { arrayTrainingProps } from "@/components/ResultTraining";

interface TargetListProps {
  targetList: arrayTrainingProps[];
}

export default function TargetList({ targetList }: TargetListProps) {
  return (
    <ol className="mt-[20px] flex flex-col flex-wrap h-[202px]">
      {targetList.map((arrayTraining, index) => (
        <li className="w-[320px] mb-[20px]" key={index}>
          <p className="text-[18px]">
            {`${arrayTraining.target} ${arrayTraining.result}%`}
          </p>
          <progress
            className="w-full h-1.5"
            value={arrayTraining.result}
            max={100}
          />
        </li>
      ))}
    </ol>
  );
}