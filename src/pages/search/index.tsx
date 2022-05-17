import Head from "next/head";
import SearchAPI from "../api/searchAPI";
import BackToHomeButton from "../../components/backToHomeButton/backToHomeButton";

const Search = () => {
  return (
    <>
      <Head>
        <title>Search Subreddit</title>
      </Head>
      <section className="flex flex-col justify-center items-center">
        <SearchAPI />
        <BackToHomeButton />
      </section>
    </>
  );
};

export default Search;
