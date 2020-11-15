import { SET_USER, SET_TOKEN } from '../actions/actionTypes';

const initialState = {
	token: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjA1ODgzNDA2LCJqdGkiOiJlOTRmNTA1NWJjNWM0MDllOTNhMTZjZDYxNDNjMmFmOSIsInVzZXJfaWQiOjF9.isLvJi1jPRcze2t3r0NAmFVv2LrY1VyLt0HPaHsb3DI",
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
