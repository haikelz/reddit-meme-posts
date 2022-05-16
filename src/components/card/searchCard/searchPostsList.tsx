import { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { cn } from "../../../utils/classes";
import Image from "next/image";

const SearchPostsList = ({ post }: { post: any }) => {
  const [isLoading, setIsLoading] = useState(true);
  return (
    <>
      {post.map((eachPost: any, index: number) => (
        <a href={eachPost.postLink} key={index}>
          <div className="flex flex-col rounded-lg p-3 group overflow-hidden bg-white shadow-lg">
            <h1 className="text-2xl font-bold group-hover:text-blue-500 duration-300 transition-all">
              r/{eachPost.subreddit}
            </h1>
            <Image
              src={eachPost.preview[0]}
              alt={`Image ${index + 1}`}
              width="300px"
              height="250px"
              loading="lazy"
              className={cn(
                "group-hover:opacity-75 duration-700 ease-in-out",
                isLoading
                  ? "grayscale blur-2xl scale-110"
                  : "grayscale-0 blur-0 scale-100"
              )}
              onLoadingComplete={() => setIsLoading(false)}
            />
            <p className="text-base font-medium mt-1">{eachPost.title}</p>
            <div className="flex mt-2 justify-start items-center">
              <FaUserCircle className="mr-1" />
              <p className="ml-1 text-sm font-medium">{eachPost.author}</p>
            </div>
          </div>
        </a>
      ))}
    </>
  );
};

export default SearchPostsList;
