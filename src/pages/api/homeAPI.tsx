import { useState, useEffect } from "react";
import Card from "../../components/card/homeCard/homeCard";
import Pagination from "../../components/pagination/pagination";

const HomeAPI = () => {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(9);
  const api = "https://meme-api.herokuapp.com/gimme/45";

  // get random meme posts
  const getPosts = async () => {
    try {
      let response = await fetch(`${api}`).then((res) => res.json());

      setPosts(response.memes);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getPosts();
  }, []);

  // pagination
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <Card posts={currentPosts} />
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={posts.length}
        paginate={paginate}
      />
    </>
  );
};

export default HomeAPI;
