import { demoPost } from '../../Demo';
import {
    SET_POSTS,
    LIKE_POST,
    UNLIKE_POST,
    LOADING_DATA,
    STOP_LOADING_DATA,
    DELETE_POST,
    POST_POST,
    SET_POST,
    SUBMIT_COMMENT
  } from '../Actions/ActionType';
  
  const initialState = {
    posts: [...demoPost],
    post: {},
    loading: false
  };
  
  export default function(state = initialState, action) {
    console.log("Test",action.payload);
    switch (action.type) {
      case POST_POST:
        return {
          ...state,
          posts: [action.payload, ...state.posts]
        };

      case SET_POSTS:
        return {
          ...state,
          posts: action.payload,
          loading: false
        };
      case SET_POST:
        return {
          ...state,
          post: action.payload
        };
        
      // case LIKE_POST:
      // case UNLIKE_POST:
      //   let index = state.posts.findIndex(
      //     (post) => post.screamId === action.payload.screamId
      //   );
      //   state.posts[index] = action.payload;
      //   if (state.post.screamId === action.payload.screamId) {
      //     state.post = action.payload;
      //   }
      //   return {
      //     ...state
      //   };
        
      // case DELETE_POST:
      //   index = state.posts.findIndex(
      //     (post) => post.screamId === action.payload
      //   );
      //   state.posts.splice(index, 1);
      //   return {
      //     ...state
      //   };
        /*
      case SUBMIT_COMMENT:
        return {
          ...state,
          post: {
            ...state.post,
            comments: [action.payload, ...state.post.comments]
          }
        };*/
      default:
        return state;
    }
  }