import {createStore, applyMiddleware, compose} from "redux"
import thunk from "redux-thunk"
import thunkMiddleware from "redux-thunk"
import rootReducer from "../Redux/Reducer/RootReducer"

const store= createStore(rootReducer,compose(applyMiddleware(thunkMiddleware), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()))

export default store
