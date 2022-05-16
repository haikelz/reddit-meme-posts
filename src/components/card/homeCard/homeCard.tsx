import { PuffLoader } from "react-spinners";
import { useState, useEffect } from "react";
import HomePostsList from "./homePostsList";

const Card = ({ posts }: { posts: any }) => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      {posts?.length > 0 ? (
        <div className="mt-8 grid grid-rows-1 grid-cols-1 md:grid-rows-2 md:grid-cols-2 lg:grid-rows-3 lg:grid-cols-3 gap-4">
          <HomePostsList posts={posts} />
        </div>
      ) : (
        <div className="flex justify-center items-center h-screen">
          <PuffLoader size={50} color={"#000000"} loading={loading} />
        </div>
      )}
    </>
  );
};

export default Card;
