
import { Route, Switch } from "react-router-dom";
import Home from './Components/Home';
import Login from './Components/Login';
import NavBar from "./Components/NavBar";
import SignUp from './Components/SignUp';
import {Provider} from "react-redux"
import store from "./Redux/Store"
import axios from 'axios';
import jwtDecode from 'jwt-decode';
import { SET_AUTHENTICATED } from './Redux/Actions/ActionType';
import { logoutUser } from './Redux/Actions/UserAction';
import { useHistory } from 'react-router'


// axios.defaults.baseURL ="https://us-central1-ecstatic-backup-314504.cloudfunctions.net/api"
axios.defaults.baseURL ="https://europe-west1-socialape-d081e.cloudfunctions.net/api"
   

const token = localStorage.Token;
// if (token) {
//   const decodedToken = jwtDecode(token);
//   if (decodedToken.exp * 1000 < Date.now()) {
//     // const history = useHistory()
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
      <Route exact path="/" component={Login} />
      <Route exact path="/signup" component={SignUp} />
    </Switch>
    </Provider>
    </div>
  );
}

export default App;
