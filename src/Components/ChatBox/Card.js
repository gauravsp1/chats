import React from "react";
import "./ChatBox.css";
import Profile from "../../images/first.jpg";
function Card({ data }) {
  const { userName, image, likeCount, commentCount, createdAt, post } = data;
  return (
    <div className="card-container">
      <div className="title-container">
        <img src={image} alt="Profile Photo" className="profile-photo" />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginLeft: "15px",
          }}
        >
          <span
            style={{
              fontSize: "14px",
              fontWeight: "600",
            }}
          >
            {userName}
          </span>
          <span
            style={{
              color: "#554b4b",
              fontSize: "12px",
            }}
          >
            {createdAt}
          </span>
        </div>
      </div>
      <div className="card-post">{post}</div>
      <div className="like-container">
        <span>
          <b>{likeCount}</b> Likes
        </span>
        <span>
          <b>{commentCount}</b> Comments
        </span>
      </div>
    </div>
  );
}

export default Card;
