import {combineReducers} from "redux"
import DataReducer from "./DataReducer"
import UserReducer from "./UserReducer"
import UIReducer from "./UIReducer"

const rootReducer= combineReducers({
    "user":UserReducer,
    "data":DataReducer,
    "UI":UIReducer

})

export default rootReducer