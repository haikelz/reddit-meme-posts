import Head from "next/head";
import HomeAPI from "../../api/homeAPI";
import SearchButton from "../../components/searchButton/searchButton";

const Home = () => {
  return (
    <>
      <Head>
        <title>Reddit Posts</title>
      </Head>
      <section className="flex relative flex-col justify-center items-center">
        <h1 className="text-4xl font-bold text-[#03045E] text-center">
          Reddit <span className="text-[#00B4D8]">Posts</span>
        </h1>
        <HomeAPI />
        <SearchButton />
      </section>
    </>
  );
};

export default Home;
