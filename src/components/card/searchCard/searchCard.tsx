import Image from "next/image";
import { useState } from "react";
import SearchPostsList from "./searchPostsList";

const SearchCard = ({ post }: { post: any }) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {post?.length >= 0 ? (
        <div className="mt-12 grid grid-rows-1 grid-cols-1 md:grid-rows-2 md:grid-cols-2 lg:grid-rows-3 lg:grid-cols-3 gap-4">
          <SearchPostsList post={post} />
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center text-center mt-4">
          <Image
            src="/img/notFound.svg"
            alt="Not Found"
            width="100px"
            height="100px"
          />
          <h1 className="font-semibold text-2xl mt-4">
            Subreddit yang anda cari tidak ditemukan
          </h1>
        </div>
      )}
    </>
  );
};

export default SearchCard;
