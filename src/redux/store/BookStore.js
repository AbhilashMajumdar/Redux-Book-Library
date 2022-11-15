import rootReducer from "../reducers/RootReducer";
import { createStore } from "redux";

const bookStore = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default bookStore