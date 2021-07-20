import { combineReducers } from "redux";
import products from "./producs";
import itemEditting from "./itemEditting";
const appReducers = combineReducers({
    products,
    itemEditting
})
export default appReducers;