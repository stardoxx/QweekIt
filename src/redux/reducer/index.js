import { combineReducers } from "redux";

import { postMicroReducer } from "./microReducer";

const reducer = combineReducers({
    postBlog: postMicroReducer,
})

export default reducer;