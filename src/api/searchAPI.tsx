import { useEffect, useState } from "react";
import SearchBar from "../components/searchBar/searchBar";
import SearchCard from "../components/card/searchCard/searchCard";

const SearchAPI = () => {
  const [search, setSearch] = useState("");
  const [post, setPost] = useState([]);

  const handleSearch = (e: any) => {
    e.preventDefault();
    searchPost(search);
  };

  const api = `https://meme-api.herokuapp.com/gimme`;

  // get posts from user's input
  const searchPost = async (query: string) => {
    try {
      let response = await fetch(`${api}/${query}/9`).then((res) => res.json());

      setPost(response.memes);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <section className="flex flex-col justify-center items-center">
      <SearchBar
        handleSearch={handleSearch}
        search={search}
        setSearch={setSearch}
      />
      <SearchCard post={post} />
    </section>
  );
};

export default SearchAPI;
