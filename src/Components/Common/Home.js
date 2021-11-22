import React from 'react'
import DisplayBox from '../ChatBox/DisplayBox'
import { connect } from "react-redux"
import { DataActions } from "../../Redux/Actions"
import { useDispatch, useSelector } from "react-redux";
import Profile from "../UserDetails/Profile"
import AddPost from "./AddPost"
import axios from 'axios';
import NavBarHome from './NavBarHome'
import { useEffect } from 'react';


function Home() {
    const dispatch = useDispatch();

    const posts =
    useSelector((state) => state?.data.posts);
    const loading =
    useSelector((state) => state?.data.loading);


    return (<>
        <NavBarHome/>
        <div className="HomeContainer">
            <div className="AddPost">
                <AddPost/>
            </div>
            <div className="DisplayBox">
                {!loading?(
                    posts?.map((post) => {
                        return (
                            <DisplayBox post={post} />
                        )
                    }
                    )
                ):"Loading"}
                {/* {posts?.map((post) => {
                    return (
                        <DisplayBox post={post} />
                    )
                }
                )} */}
            </div>
            <div className="Profile">
                <Profile/>
            </div>
        </div>
    </>
    )
}

// function mapStateToProps(state) {
//     return {
//         posts: state.data.posts
//     }
// }




// export default connect(mapStateToProps, getPosts)(Home);


export default Home;

