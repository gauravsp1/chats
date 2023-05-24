import {
  SET_USER,
  SET_ERRORS,
  CLEAR_ERRORS,
  LOADING_UI,
  STOP_LOADING_UI,
  SET_UNAUTHENTICATED,
  LOADING_USER,
  MARK_NOTIFICATIONS_READ
} from './ActionType';
import axios from 'axios';
import { useDispatch, useSelector } from "react-redux";
import { UserActions } from ".";
import { DataActions } from "./index";


export default {

  loginUser(userData, history){
    return (dispatch) => {
      dispatch({ type: LOADING_UI });
      dispatch({ type: CLEAR_ERRORS });

      setTimeout(()=>{
        dispatch({ type: STOP_LOADING_UI });
        history.push('/home');
      },1000)
    }
  },

  signupUser(newUserData, history) {

    return  async (dispatch) => {
      dispatch({ type: LOADING_UI });
      dispatch({ type: CLEAR_ERRORS });
      
      setTimeout(()=>{
        dispatch({ type: STOP_LOADING_UI });
        history.push('/home');
      },1000)

    }
  },


  logoutUser(history) {
    return  (dispatch) => {
      history.push('/');
      localStorage.removeItem('Token');
      delete axios.defaults.headers.common['Authorization'];
      dispatch({ type: SET_UNAUTHENTICATED });
    }
  },



  getUserData() {
    return (dispatch) => {
      dispatch({ type: LOADING_USER });
      axios
        .get('/user')
        .then((res) => {
          console.log("Response",res.data);
          dispatch({
            type: SET_USER,
            payload: res.data
          });
        })
        .catch((err) => console.log(err));
    }
  },

  /*
   uploadImage(formData){ (dispatch) => {
    dispatch({ type: LOADING_USER });
    axios
      .post('/user/image', formData)
      .then(() => {
        dispatch(getUserData());
      })
      .catch((err) => console.log(err));
  }},
  */
  editUserDetails(userDetails) {
    return (dispatch) => {
      dispatch({ type: LOADING_USER });
      axios
        .post('/user', userDetails)
        .then(() => {
          // dispatch(getUserData());
        })
        .catch((err) => console.log(err));
    }
  },
  /*
   markNotificationsRead(notificationIds){ (dispatch) => {
    axios
      .post('/notifications', notificationIds)
      .then((res) => {
        dispatch({
          type: MARK_NOTIFICATIONS_READ
        });
      })
      .catch((err) => console.log(err));
  }},
  */

  setAuthorizationHeader(token) {
      const Token = `Bearer ${token}`;
      localStorage.setItem('Token', Token);
      axios.defaults.headers.common['Authorization'] = Token;
  },

  Errors(errors) {
    return (dispatch) => {
      dispatch({
        type: SET_ERRORS,
        payload: errors
      });
    }
  },
  clearErrors() {
    return (dispatch) => {
      dispatch({ type: CLEAR_ERRORS });
    }
  }
}