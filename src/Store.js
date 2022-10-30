import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { listingListReducers } from "./reducer/ListingReducers";
import { modalReducer } from "./reducer/ModalReducer";
import { userLoginReducers } from "./reducer/UserReducer";
const reducer = combineReducers({
  listingList: listingListReducers,
  modal: modalReducer,
  userLogin: userLoginReducers,
});

const userInfoFromLocalStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;
const initialState = {
  userLogin: { userInfo: userInfoFromLocalStorage },
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
