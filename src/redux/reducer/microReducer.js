import { ActionTypes } from "../contants/actionTypes";

const initialBlog = []

export const postMicroReducer = (state = initialBlog, {type,payload}) => {
    switch (type) {
        case ActionTypes.ADD_MICRO:
            return [...state, payload];
        default:
            return state;
    }

}