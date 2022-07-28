import { currentPageAtom, postsPerPageAtom, searchAtom } from "src/store";
import { useQuery } from "@tanstack/react-query";
import { useAtom } from "jotai";
import Head from "next/head";
import Card from "src/components/card";
import Pagination from "src/components/pagination";
import Loading from "src/components/loading";
import SearchBar from "src/components/searchBar";
import Layout from "src/components/layout";
import Error from "src/components/error";

const Home = () => {
  const [currentPage, setCurrentPage] = useAtom(currentPageAtom);
  const [postsPerPage] = useAtom(postsPerPageAtom);
  const [search, setSearch] = useAtom(searchAtom);

  const getPosts = async () => {
    const response = await fetch(
      `https://meme-api.herokuapp.com/gimme/${search}/45`
    );
    const data = await response.json();

    return data.memes;
  };

  const { data, isLoading, isError, refetch } = useQuery(["posts"], getPosts, {
    refetchOnWindowFocus: false,
  });

  if (isLoading) return <Loading />;
  if (isError) return <Error />;

  // pagination
  const indexOfLastPost: number = currentPage * postsPerPage;
  const indexOfFirstPost: number = indexOfLastPost - postsPerPage;
  const currentPosts = data.slice(indexOfFirstPost, indexOfLastPost);

  const paginate: (args: number) => void = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <Head>
        <title>Reddit Posts</title>
      </Head>
      <Layout>
        <h1 className="text-4xl md:text-5xl font-bold text-[#03045E] text-center">
          Reddit <span className="text-[#00B4D8]">Posts</span>
        </h1>
        <SearchBar setSearch={setSearch} refetch={refetch} />
        <Card posts={currentPosts} />
        <Pagination
          postsPerPage={postsPerPage}
          totalPosts={data.length}
          paginate={paginate}
        />
      </Layout>
    </>
  );
};

export default Home;
