import React from "react";
import DisplayBox from "../ChatBox/DisplayBox";
import { useDispatch, useSelector } from "react-redux";
import Profile from "../UserDetails/Profile";
import AddPost from "./AddPost";
import "./Common.css";
import NavBar from "./NavBar";

function Home() {
  const dispatch = useDispatch();

  const posts = useSelector((state) => state?.data.posts);
  const loading = useSelector((state) => state?.data.loading);
  const userHandler = localStorage.getItem("userHandler");

  return (
    <>
      <div className="HomeContainer">
        <NavBar />
        <div className="body-container">
          <AddPost userHandler={userHandler} />
          <DisplayBox />
        </div>
      </div>
    </>
  );
}

export default Home;
