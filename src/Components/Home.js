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

    const posts =
    useSelector((state) => state?.data.posts);
    const loading =
    useSelector((state) => state?.data.loading);
console.log("loading",loading);
console.log("posts",posts);
// useEffect(() => {
//   dispatch(DataActions.getPosts())  
// }, [])
function onClick(){
    console.log("Check");
    dispatch(DataActions.getPosts())
    // dispatch(DataActions.posts())
    // axios.get('/screams').then((res) => {
    //     console.log("Data", res?.data);
    // })
}

    return (<>
        <NavBarHome/>
        <div className="HomeContainer">
            <div className="AddPost">
                <AddPost/>
            </div>
            <div className="DisplayBox">
                {console.log("load",loading)}
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
            <button onClick={onClick}>Click</button>
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

