
import { Route, Switch,Redirect } from "react-router-dom";
import Home from './Components/Common/Home';
import NavBar from "./Components/Common/NavBar";
import {Provider} from "react-redux"
import store from "./Redux/Store"
import axios from 'axios';
import jwtDecode from 'jwt-decode';
import { SET_AUTHENTICATED } from './Redux/Actions/ActionType';
import { logoutUser } from './Redux/Actions/UserAction';
import { useHistory } from 'react-router'
import LoginSignUp from "./Components/Auth/LoginSignUp";
import "./Components/Common/Common.css"

const token = localStorage.Token;
// if (token) {
//   const decodedToken = jwtDecode(token);
//   if (decodedToken.exp * 1000 < Date.now()) {
    // const history = useHistory()
//     store.dispatch(logoutUser());
//     window.location.href = '/';
//   } else {
//     store.dispatch({ type: SET_AUTHENTICATED });
//     axios.defaults.headers.common['Authorization'] = token;
//     // store.dispatch(getUserData());
//   }
// }
function App() {
  return (
    <div className="App">
      <Provider store={store}>
      {/* <NavBar/> */}
      <Switch>
      <Route exact path="/home" component={Home} />
      <Route exact path="/signup" render={() =><LoginSignUp title='Sign-Up'/>} />
      <Route exact path="/login" render={() =><LoginSignUp title='Login' />} />
      <Route exact path="/" render={() =><LoginSignUp title='Login'/>} />
      <Redirect to="/" />
    </Switch>
    </Provider>
    </div>
  );
}

export default App;
