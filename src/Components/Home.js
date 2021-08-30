import React from 'react'
import DisplayBox from './DisplayBox'
import { connect } from "react-redux"
import { DataActions } from "../Redux/Actions"
import { useDispatch, useSelector } from "react-redux";
import Profile from "./Profile"
import AddPost from "./AddPost"
import axios from 'axios';
import NavBarHome from './NavBarHome'
import { useEffect } from 'react';


function Home() {
    const dispatch = useDispatch();

    const data =
    useSelector((state) => state?.data) || [];

// useEffect(() => {
//   dispatch(DataActions.getPosts())  
// }, [])

    return (<>
        <NavBarHome/>
        <div className="HomeContainer">
            <div className="AddPost">
                <AddPost/>
            </div>
            <div className="DisplayBox">
                {data?.posts?.map((post) => {
                    return (
                        <DisplayBox post={post} />
                    )
                }
                )}
            </div>
            {/* <button onClick={onClick}>Click</button> */}
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

