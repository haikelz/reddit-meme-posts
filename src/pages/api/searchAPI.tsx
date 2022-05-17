import { useEffect, useState } from "react";
import SearchBar from "../../components/searchBar/searchBar";
import SearchCard from "../../components/card/searchCard/searchCard";
import Pagination from "../../components/pagination/pagination";

const SearchAPI = () => {
  const [search, setSearch] = useState("");
  const [post, setPost] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(9);
  const api = `https://meme-api.herokuapp.com/gimme`;

  // buat search bar
  const handleSearch = (e: any) => {
    e.preventDefault();
    searchPost(search);
  };

  // get posts from user's input
  const searchPost = async (query: string) => {
    try {
      let response = await fetch(`${api}/${query}/45`).then((res) =>
        res.json()
      );

      setPost(response.memes);
    } catch (err) {
      console.log(err);
    }
  };

  // pagination
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = post.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <section className="flex flex-col justify-center items-center">
      <SearchBar
        handleSearch={handleSearch}
        search={search}
        setSearch={setSearch}
      />
      <SearchCard post={currentPosts} />
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={post.length}
        paginate={paginate}
      />
    </section>
  );
};

export default SearchAPI;
