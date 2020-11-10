import { SET_USER, SET_TOKEN } from '../actions/actionTypes';

const initialState = {
	token: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjA0OTk5MTIxLCJqdGkiOiI5MzdiZGNlMDljNjc0MzhhYjAwZGUxMjdhYzc0N2JmYyIsInVzZXJfaWQiOjF9.H9BFHc0ftTlRUlT47Bw_G7Z2z947hUQ8Ue-X8xohd6M",
	user: null,
};

const authReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_USER: {
			const newState = { ...state };
			newState.token = action.payload[0];
			newState.user = action.payload[1];
			return newState;
		}
		case SET_TOKEN: {
			const newState = {...state};
			newState.token = action.payload;
			return newState;
		}

		default:
			return state;
	}
};

export default authReducer;
