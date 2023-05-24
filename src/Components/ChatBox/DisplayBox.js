import React from "react";
import LikeButton from "./LikeButton";
import DeleteButton from "./DeleteButton";
import CommentBox from "./CommentBox";
import { demoPost } from "../../Demo";
import "./ChatBox.css";
import Card from "./Card";
import { useSelector } from "react-redux";

function DisplayBox(props) {
  const posts = useSelector((state) => state?.data.posts);

  return (
    <>
      <div className="display-box">
        {posts.map((item) => {
          return <Card data={item} key={item.postID} />;
        })}
      </div>
    </>
  );
}

export default DisplayBox;
