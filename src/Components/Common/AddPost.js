import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Common.css";
import Profile from "../../images/uwp332474.jpeg";
import moment from 'moment'
import  {addPost}  from '../../Redux/Actions/DataAction';

function AddPost({userHandler}) {
  const dispatch = useDispatch();
  const [post, setPost] = useState();

  const handleAddPost = () => {
    let jsonObj={
      postID:6,
      userName:userHandler || 'Vikash',
      image:Profile,
      likeCount:0,
      commentCount:0,
      createdAt:moment().format('DD-MM-YYYY'),
      post:post
  }
  dispatch(addPost(jsonObj))
  };

  function handleChange(e) {
    const {  value } = e.target;
    setPost(value);
  }

  return (
    <div className="add-post">
      <textarea
        name="post"
        id=""
        cols="35"
        rows="10"
        placeholder="Add a Post..."
        className="text-area"
        value={post}
        onChange={handleChange}
      />
      <button className="post-button" onClick={handleAddPost}>Comment</button>
    </div>
  );
}

export default AddPost;
