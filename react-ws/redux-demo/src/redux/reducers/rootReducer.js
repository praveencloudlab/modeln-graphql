import { combineReducers } from "redux";
import counterReducer from "./counterReducer";
import cartReducer from "./cartReducer";
import userActionsReducer from "./userActionsReducer";

const rootReducer=combineReducers({
   counter:counterReducer,
   cart:cartReducer,
   cartUsers:userActionsReducer 
});


export default rootReducer;