import {
  SET_USER,
  SET_AUTHENTICATED,
  SET_UNAUTHENTICATED,
  LOADING_USER,
  LIKE_POST,
  UNLIKE_POST,
  MARK_NOTIFICATIONS_READ,
  SET_USER_DATA,
} from "../Actions/ActionType";

const initialState = {
  authenticated: false,
  loading: false,
  userData: {
    handler: "Gaurav",
    bio: "Coder, Artist and much more...",
    location: "Bangalore",
  },
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        userData: action.payload,
      };
    default:
      return state;
  }

  // switch (action.type) {
  //   case SET_AUTHENTICATED:
  //     return {
  //       ...state,
  //       authenticated: true
  //     };
  //   case SET_UNAUTHENTICATED:
  //     return initialState;
  //   case SET_USER:
  //     return {
  //       authenticated: true,
  //       loading: false,
  //       ...action.payload
  //     };
  //   case LOADING_USER:
  //     return {
  //       ...state,
  //       loading: true
  //     };
  //   case LIKE_POST:
  //     return {
  //       ...state,
  //       likes: [
  //         ...state.likes,
  //         {
  //           userHandle: state.credentials.handle,
  //           postId: action.payload.postId
  //         }
  //       ]
  //     };
  //   case UNLIKE_POST:
  //     return {
  //       ...state,
  //       likes: state.likes.filter(
  //         (like) => like.postId !== action.payload.postId
  //       )
  //     };
  //   case MARK_NOTIFICATIONS_READ:
  //     state.notifications.forEach((not) => (not.read = true));
  //     return {
  //       ...state
  //     };
  //   default:
  //     return state;
  // }
}
