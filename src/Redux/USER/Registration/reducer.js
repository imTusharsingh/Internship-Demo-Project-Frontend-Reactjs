import {
    REGISTER_USER_REQUEST,
    REGISTER_USER_SUCCESS,
    REGISTER_USER_FAILURE,
} from "../../Types";

const initialValue = {
    loading: false,
    error: null
}

export const registrationReducer = (state = initialValue, action) => {
    switch (action.type) {
        case REGISTER_USER_REQUEST: return {
            loading: true, error: null
        }
        case REGISTER_USER_SUCCESS: return {
            loading: false, error: null
        }
        case REGISTER_USER_FAILURE: return {
            loading: false, error: action.payload
        }

        default: return state
    }
}