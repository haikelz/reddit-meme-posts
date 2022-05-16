import { useState, useEffect } from "react";
import Card from "../components/card/homeCard/homeCard";

const HomeAPI = () => {
  const [posts, setPosts] = useState([]);
  const api = "https://meme-api.herokuapp.com/gimme/9";

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

  return (
    <>
      <Card posts={posts} />
    </>
  );
};

export default HomeAPI;
