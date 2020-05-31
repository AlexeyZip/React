import {createStore, combineReducers} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    friendsPage: sidebarReducer,
    dialogsPage: dialogsReducer
    
});

let store = createStore(reducers);


export default store;