import { PostsIndex } from "./PostsIndex";
import { PostsNew } from "./PostsNew";
import { PostsShow } from "./PostsShow";
import { Modal } from "./Modal";
import axios from "axios";
import { useState, useEffect } from "react";
import { useMemo } from "react";

export function PostsPage() {
  const [posts, setPosts] = useState([]);
  const [isPostsShowVisible, setIsPostsShowVisible] = useState(false);
  const [currentPost, setCurrentPost] = useState({});

  const handleIndex = () => {
    console.log("handleIndex");
    axios.get("http://localhost:3000/posts.json").then((response) => {
      console.log(response.data);
      setPosts(response.data);
    });
  };

  const handleCreate = (params, successCallback) => {
    console.log("handleCreate", params);
    axios.post("http://localhost:3000/posts.json", params).then((response) => {
      setPosts([...posts, response.data]);
      successCallback();
    });
  };

  const handleShow = (post) => {
    console.log("handleShow", post);
    setIsPostsShowVisible(true);
    setCurrentPost(post);
  };

  const handleClose = () => {
    console.log("handleClose");
    setIsPostsShowVisible(false);
  };

  const sortedPosts = useMemo(() => {
    return [...posts].sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
  }, [posts]);
  useEffect(handleIndex, []);

  return (
    <main>
      <PostsNew onCreate={handleCreate} />
      <PostsIndex posts={sortedPosts} onShow={handleShow} />
      <Modal show={isPostsShowVisible} onClose={handleClose}>
        <PostsShow post={currentPost} />
      </Modal>
    </main>
  );
}
