import { SET_USER, SET_TOKEN } from '../actions/actionTypes';

const initialState = {
	token: null,
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
