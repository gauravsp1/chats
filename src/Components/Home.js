import React from 'react'
import DisplayBox from './DisplayBox'
import { connect } from "react-redux"
import { getPosts } from "../Redux/Actions/DataAction"
import Profile from "./Profile"
import AddPost from "./AddPost"
import axios from 'axios';
import NavBarHome from './NavBarHome'


function Home(props) {

// function onClick(){
//     const url="https://us-central1-ecstatic-backup-314504.cloudfunctions.net/api/posts"
//     axios.get(url).then((res) => {
//         console.log(res.data);
//     }).catch((err) => {
//         console.log(err.response.data);
//     });
// }


    return (<>
        <NavBarHome/>
        <div className="HomeContainer">
            <div className="AddPost">
                <AddPost/>
            </div>
            <div className="DisplayBox">
                {props.posts.map((post) => {
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

function mapStateToProps(state) {
    return {
        posts: state.data.posts
    }
}




export default connect(mapStateToProps, getPosts)(Home);

