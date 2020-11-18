import { SET_USER, SET_TOKEN } from '../actions/actionTypes';

const initialState = {
	token: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjA2MDY5MTc1LCJqdGkiOiIyNTc4MTU0Mjk0MmE0MjJhOWE0MjU4YTE2ZmUzMmM5YyIsInVzZXJfaWQiOjF9.BtZDN43eOseRgoH3kzuilGUh69WoeUgkDEgPboq6YWA",
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
