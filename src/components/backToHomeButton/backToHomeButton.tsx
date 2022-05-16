import Link from "next/link";
import { FaArrowAltCircleLeft } from "react-icons/fa";

const BackToHomeButton = () => {
  return (
    <Link href="/" passHref>
      <button className="flex justify-center items-center mt-4 px-4 py-2 text-lg font-bold rounded-lg bg-slate-500 hover:bg-slate-600 text-white duration-300 transiton-all shadow-lg">
        <FaArrowAltCircleLeft className="mr-1" />
        <p className="ml-1">Back to Home</p>
      </button>
    </Link>
  );
};

export default BackToHomeButton;
