"use client";
import { useRouter } from "next/navigation";
import { IoChevronBackOutline } from "react-icons/io5";

const BackToHome = () => {
  const route = useRouter();
  return (
    <div
      onClick={() => route.push("/")}
      className="flex items-center space-x-2 mb-6"
    >
      <IoChevronBackOutline className="w-4 h-4" />
      <a href="#" className="text-sm font-medium">
        Back to podcast
      </a>
    </div>
  );
};

export default BackToHome;
