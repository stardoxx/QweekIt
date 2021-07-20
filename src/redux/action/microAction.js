import { ActionTypes } from "../contants/actionTypes";

export const addMicro =(micro) =>{
    return {
        type: ActionTypes.ADD_MICRO,
        payload: micro,
    }
}