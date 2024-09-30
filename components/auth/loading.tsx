import Image from "next/image";

export const Loading = () => {
  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <Image
        src="/logo.svg"
        alt="logo"
        width={200}
        height={200}
        className="animate-pulse duration-700"
      ></Image>
    </div>
  );
};
