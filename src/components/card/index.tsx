import { cn } from "src/utils/className";
import { useAtom } from "jotai";
import { isLoadingAtom } from "src/store";
import { FaUserCircle } from "react-icons/fa";
import { Posts } from "src/interface";
import Image from "next/image";
import Link from "next/link";

const Card = ({ posts }: Posts) => {
  const [isLoading, setIsLoading] = useAtom(isLoadingAtom);

  return (
    <>
      <div className="mt-8 grid grid-rows-1 grid-cols-1 md:grid-rows-2 md:grid-cols-2 lg:grid-rows-3 lg:grid-cols-3 gap-4">
        {posts.map((eachPost, index: number) => (
          <Link href={eachPost.postLink} key={index} passHref>
            <div className="relative flex flex-col rounded-lg p-3 group overflow-hidden bg-white shadow-lg cursor-pointer">
              <h1 className="mb-2 text-2xl font-bold group-hover:text-blue-500 duration-300 transition-all">
                r/{eachPost.subreddit}
              </h1>
              <Image
                src={
                  eachPost.url === null
                    ? "https://via.placeholder.com/400"
                    : eachPost.url
                }
                alt={`Image ${index + 1}`}
                width="300px"
                height="250px"
                loading="lazy"
                className={cn(
                  "group-hover:opacity-75 duration-700 ease-in-out",
                  !isLoading
                    ? "grayscale blur-2xl scale-110"
                    : "grayscale-0 blur-0 scale-100"
                )}
                onLoadingComplete={() => setIsLoading(true)}
              />
              <p className="text-base font-medium mt-1">{eachPost.title}</p>
              <div className="flex mt-2 justify-start items-center">
                <FaUserCircle className="mr-1" />
                <p className="ml-1 text-sm font-medium">{eachPost.author}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Card;
