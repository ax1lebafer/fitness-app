import Card from "@/components/Card";
import ProfileInfo from "@/components/ProfileInfo";

export default function profile() {
  return (
    <div className="box-border">
      <h1 className="sm:mt-[0px] mt-[36px] sm:mb-[31px] mb-[19px] sm:text-[40px] text-[24px] font-bold">
        Профиль
      </h1>
      <ProfileInfo />
      <h2 className="sm:mt-[53px] mt-[23px] sm:mb-[31px] mb-[12px] sm:text-[40px] text-[24px] font-bold">
        Мои курсы
      </h2>
      <div className="flex gap-[40px]">
      <Card />
      <Card />
      <Card />
      </div>
    </div>
  );
}
