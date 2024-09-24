import Link from "next/link";

type ButtonLinkProps = {
  text: string;
  href?: string;
  onClick?: () => void;
  className?: string;
};

export default function ButtonLink({
  text,
  href,
  onClick,
  className,
}: ButtonLinkProps) {
  const baseClasses =
    "mt-6 px-[28px] py-4 rounded-[46px] bg-[#BCEC30] hover:bg-[#C6FF00] active:bg-black text-black hover:text-black active:text-white transition-colors duration-300 ease-linear inline-block text-center";

  if (href) {
    return (
      <Link href={href} className={`${baseClasses} ${className}`}>
        {text}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={`${baseClasses} ${className}`}>
      {text}
    </button>
  );
}
