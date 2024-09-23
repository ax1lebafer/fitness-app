import Banner from "@/components/Banner";
import Tenets from "@/components/Tenets";
import Directions from "@/components/Directions";
import StartBanner from "@/components/StartBanner";

export default function MainCourses() {
  return (
    <main className="flex flex-col justify-center h-full gap-[60px]">
      <Banner />
      <Tenets />
      <Directions />
      <StartBanner />
    </main>
  );
}