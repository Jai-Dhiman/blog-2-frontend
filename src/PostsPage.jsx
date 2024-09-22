import { PostsIndex } from "./PostsIndex";
import { PostsNew } from "./PostsNew";
import { PostsShow } from "./PostsShow";
import { Modal } from "./Modal";
import axios from "axios";
import { useState, useEffect } from "react";

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
    axios.post("http://localhost:3000/photos.json", params).then((response) => {
      setPosts([...posts, response.data]);
      successCallback();
    });
  };

  const handleShow = (photo) => {
    console.log("handleShow", photo);
    setIsPostsShowVisible(true);
    setCurrentPost(photo);
  };

  const handleClose = () => {
    console.log("handleClose");
    setIsPostsShowVisible(false);
  };

  useEffect(handleIndex, []);

  return (
    <main>
      <PostsNew onCreate={handleCreate} />
      <PostsIndex posts={posts} onShow={handleShow} />
      <Modal show={isPostsShowVisible} onClose={handleClose}>
        <PostsShow post={currentPost} />
      </Modal>
    </main>
  );
}
