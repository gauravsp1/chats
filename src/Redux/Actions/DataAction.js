import {
    SET_POSTS,
    LOADING_DATA,
    LIKE_POST,
    UNLIKE_POST,
    DELETE_POST,
    SET_ERRORS,
    POST_POST,
    CLEAR_ERRORS,
    LOADING_UI,
    SET_POST,
    STOP_LOADING_UI,
    SUBMIT_COMMENT
  } from './ActionType';
  import axios from 'axios';
  
  // Get all posts
  export const getPosts = () => (dispatch) => {
    dispatch({ type: LOADING_DATA });
    // const url="https://us-central1-ecstatic-backup-314504.cloudfunctions.net/api/posts"
    axios.get("/posts").then((res) => {
        console.log("Data",res.data);
        dispatch({
          type: SET_POSTS,
          payload: res.data
        });
        dispatch({ type: STOP_LOADING_UI });
    
    }).catch((err) => {
        console.log(err.response.data);
    });
  };
  /*
  export const getPost = (screamId) => (dispatch) => {
    dispatch({ type: LOADING_UI });
    axios
      .get(`/scream/${screamId}`)
      .then((res) => {
        dispatch({
          type: SET_POST,
          payload: res.data
        });
        dispatch({ type: STOP_LOADING_UI });
      })
      .catch((err) => console.log(err));
  };
  */
  // Post a scream
  export const addContent = (newpost) => (dispatch) => {
    dispatch({ type: LOADING_UI });
    // const url="https://us-central1-ecstatic-backup-314504.cloudfunctions.net/api/posts"
    axios
      .post("/posts", newpost)
      .then((res) => {
          console.log("Post",res.data);
        // dispatch({
        //   type: POST_POST,
        //   payload: res.data
        // });
       dispatch(getPosts()) 
      })
      .catch((err) => {
        // dispatch({
        //   type: SET_ERRORS,
        //   payload: err.response.data
        // });
        dispatch({ type: STOP_LOADING_UI });
        console.log(err);
      });
  };
  
  // Like a scream
  export const likePost = (postId) => (dispatch) => {
    axios
      .get(`/scream/${postId}/like`)
      .then((res) => {
        dispatch({
          type: LIKE_POST,
          payload: res.data
        });
      })
      .catch((err) => console.log(err));
  };
  // Unlike a scream
  export const unlikePost = (postId) => (dispatch) => {
    axios
      .get(`/scream/${postId}/unlike`)
      .then((res) => {
        dispatch({
          type: UNLIKE_POST,
          payload: res.data
        });
      })
      .catch((err) => console.log(err));
  };
  /*
  // Submit a comment
  export const submitComment = (screamId, commentData) => (dispatch) => {
    axios
      .post(`/scream/${screamId}/comment`, commentData)
      .then((res) => {
        dispatch({
          type: SUBMIT_COMMENT,
          payload: res.data
        });
        dispatch(clearErrors());
      })
      .catch((err) => {
        dispatch({
          type: SET_ERRORS,
          payload: err.response.data
        });
      });
  };
  */
  export const deleteScream = (postId) => (dispatch) => {
    axios
      .delete(`/post/${postId}`)
      .then(() => {
        dispatch({ type: DELETE_POST, payload: postId });
      })
      .catch((err) => console.log(err));
  };
  /*
  export const getUserData = (userHandle) => (dispatch) => {
    dispatch({ type: LOADING_DATA });
    axios
      .get(`/user/${userHandle}`)
      .then((res) => {
        dispatch({
          type: SET_POSTS,
          payload: res.data.screams
        });
      })
      .catch(() => {
        dispatch({
          type: SET_POSTS,
          payload: null
        });
      });
  };
  */

  

  export const clearErrors = () => (dispatch) => {
    dispatch({ type: CLEAR_ERRORS });
  };