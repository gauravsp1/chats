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
  
  export const loginUser = (userData, history) => (dispatch) => {
    dispatch({ type: LOADING_UI });
    // const url="https://us-central1-ecstatic-backup-314504.cloudfunctions.net/api/login"
    axios
      .post("/login", userData)
      .then((res) => {
        setAuthorizationHeader(res.data.auth);
        console.log("Login Api",res.data);
        // dispatch(getUserData());
        dispatch({ type: CLEAR_ERRORS });
        dispatch({ type: STOP_LOADING_UI });
        history.push('/home');
      })
      .catch((errors) => {
        dispatch({
          type: SET_ERRORS,
          payload: errors.response.data.error
        });
        console.log(errors.response.data);
        dispatch({ type: STOP_LOADING_UI });
      });
  };
  
  export const signupUser = (newUserData, history) => (dispatch) => {
    // const url="https://us-central1-ecstatic-backup-314504.cloudfunctions.net/api/signup"
    dispatch({ type: LOADING_UI });
    axios
      .post("/signup", newUserData)
      .then((res) => {
        setAuthorizationHeader(res.data.auth);
                // dispatch(getUserData());
        dispatch({ type: CLEAR_ERRORS });
        dispatch({ type: STOP_LOADING_UI });
        history.push('/home');
      })
      .catch((errors) => {
        dispatch({
          type: SET_ERRORS,
          payload: errors.response.data.error
        });
        console.log(errors.response.data);
        dispatch({ type: STOP_LOADING_UI });
      });
  };
  
  
  export const logoutUser = (history) => (dispatch) => {
    history.push('/');
    localStorage.removeItem('Token');
    delete axios.defaults.headers.common['Authorization'];
    dispatch({ type: SET_UNAUTHENTICATED });
  };
  
  
 
  export const getUserData = () => (dispatch) => {
    dispatch({ type: LOADING_USER });
    axios
      .get('/user')
      .then((res) => {
        dispatch({
          type: SET_USER,
          payload: res.data
        });
      })
      .catch((err) => console.log(err));
  };
  
  /*
  export const uploadImage = (formData) => (dispatch) => {
    dispatch({ type: LOADING_USER });
    axios
      .post('/user/image', formData)
      .then(() => {
        dispatch(getUserData());
      })
      .catch((err) => console.log(err));
  };
  */
  export const editUserDetails = (userDetails) => (dispatch) => {
    dispatch({ type: LOADING_USER });
    axios
      .post('/user', userDetails)
      .then(() => {
        dispatch(getUserData());
      })
      .catch((err) => console.log(err));
  };
  /*
  export const markNotificationsRead = (notificationIds) => (dispatch) => {
    axios
      .post('/notifications', notificationIds)
      .then((res) => {
        dispatch({
          type: MARK_NOTIFICATIONS_READ
        });
      })
      .catch((err) => console.log(err));
  };
  */

  const setAuthorizationHeader = (token) => {
    const Token = `Bearer ${token}`;
    localStorage.setItem('Token', Token);
    axios.defaults.headers.common['Authorization'] = Token;
    };

  export const Errors = (errors) => (dispatch) => {
    dispatch({ type: SET_ERRORS,
      payload: errors
    });
  };

  export const clearErrors = () => (dispatch) => {
    dispatch({ type: CLEAR_ERRORS });
  };