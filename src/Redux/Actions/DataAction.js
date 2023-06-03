import {
  SET_POSTS,
  LOADING_DATA,
  STOP_LOADING_DATA,
  LIKE_POST,
  UNLIKE_POST,
  DELETE_POST,
  SET_ERRORS,
  POST_POST,
  CLEAR_ERRORS,
  LOADING_UI,
  SET_POST,
  STOP_LOADING_UI,
  SUBMIT_COMMENT,
} from "./ActionType";
import axios from "axios";

export default {
  addPost(newpost) {
    return (dispatch) => {
      dispatch({ type: POST_POST, payload: newpost });
    };
  },
};

// Get all posts
// function getPosts() {

//   return async (dispatch) => {
//     dispatch({ type: LOADING_DATA });

//     const response =  await  axios.get('/screams')
//     console.log("Datas", response);
//     if (response.status === 200) {
//           dispatch({
//             type: SET_POSTS,
//             payload: response.data
//           });

//           dispatch({ type: STOP_LOADING_DATA });
//           return response;
//         }
// .then((res) => {
//   console.log("Data", res?.data);
//   console.log("DataR", res);
//   const response = res?.data
//   if (res.status === 200) {
//     dispatch({
//       type: SET_POSTS,
//       payload: response
//     });

//     dispatch({ type: STOP_LOADING_DATA });
//     return response;
//   }

// }).catch((err) => {
//   console.log(err?.response);
// });

//       }

// }

//   posts(){
//   const success = (data) => ({
//     type: SET_POSTS,
//     data,
//   });
//   return (dispatch) => {
//     axios.get('/screams').then((res) => {
//       console.log("ReduxData", res?.data)
//       dispatch(success(res.data));
//     })
//   }
// },
// Post a scream

// Like a scream
// likePost(postId) {
//   return (dispatch) => {
//     axios
//       .get(`/scream/${postId}/like`)
//       .then((res) => {
//         console.log("res",res.data);
//         // dispatch({
//         //   type: LIKE_POST,
//         //   payload: res.data
//         // });
//       })
//       .catch((err) => console.log(err));
//   }
// },
// // Unlike a scream
// unlikePost(postId) {
//   return (dispatch) => {
//     axios
//       .get(`/scream/${postId}/unlike`)
//       .then((res) => {
//         dispatch({
//           type: UNLIKE_POST,
//           payload: res.data
//         });
//       })
//       .catch((err) => console.log(err));
//   }
// },
// /*
// // Submit a comment
//  submitComment = (screamId, commentData) => (dispatch) => {
//   axios
//     .post(`/scream/${screamId}/comment`, commentData)
//     .then((res) => {
//       dispatch({
//         type: SUBMIT_COMMENT,
//         payload: res.data
//       });
//       dispatch(clearErrors());
//     })
//     .catch((err) => {
//       dispatch({
//         type: SET_ERRORS,
//         payload: err.response.data
//       });
//     });
// },
// */
// deleteScream(postId) {
//   return (dispatch) => {
//     axios
//       .delete(`/post/${postId}`)
//       .then(() => {
//         dispatch({ type: DELETE_POST, payload: postId });
//       })
//       .catch((err) => console.log(err));
//   }
// },
// /*
//  getUserData = (userHandle) => (dispatch) => {
//   dispatch({ type: LOADING_DATA });
//   axios
//     .get(`/user/${userHandle}`)
//     .then((res) => {
//       dispatch({
//         type: SET_POSTS,
//         payload: res.data.screams
//       });
//     })
//     .catch(() => {
//       dispatch({
//         type: SET_POSTS,
//         payload: null
//       });
//     });
// };
// */

// clearErrors() {
//   return (dispatch) => {
//     dispatch({ type: CLEAR_ERRORS });
//   }
// }
