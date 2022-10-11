import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { listingListReducers } from "./reducer/ListingReducers";
import { modalReducer } from "./reducer/ModalReducer";

const reducer = combineReducers({
  listingList: listingListReducers,
  modal: modalReducer,
});

const initialState = {};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
