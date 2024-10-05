import Link from "next/link";
import VideoPlayer from "@/components/VideoPlayer";
import ResultTraining from "@/components/ResultTraining";


export default function MainTraining() {
  return (
    <div>
      <h1 className="text-[60px]">Йога</h1>
      <nav aria-label="breadcrumb">
        <ol className="flex flex-row text-[32px] font-normal pt-6">
          <li><Link href="#"><span className="underline">Красота и здоровье</span></Link></li>
          <li><Link href="#"><span className="underline">Йога на каждый день</span></Link></li>
          <li><Link href="#"><span className="underline">2 день</span></Link></li>
        </ol>
      </nav>
      <VideoPlayer/>
      <ResultTraining/>
    </div>
  );
}