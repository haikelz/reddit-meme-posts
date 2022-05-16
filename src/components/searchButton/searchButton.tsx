import { FaArrowAltCircleRight } from "react-icons/fa";
import Link from "next/link";

const SearchButton = () => {
    return (
        <Link href="/search" passHref>
            <button className="flex justify-center items-center mt-4 px-4 py-2 text-lg font-bold rounded-lg bg-slate-500 hover:bg-slate-600 text-white duration-300 transiton-all shadow-lg">
                <p className="mr-1">Search More</p>
                <FaArrowAltCircleRight className="ml-1" />
            </button>
        </Link>
    )
}

export default SearchButton; 