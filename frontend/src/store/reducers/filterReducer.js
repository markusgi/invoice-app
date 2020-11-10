// import { timeAction } from '../actions/actionTypes';

const initialState = {
	timeFrameStart: '12',
	timeFrameEnd: '0',
    tag: null,
    articleName: null,
    invoiceNr: null,
};

const filterReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'SET_TIMEFRAME': {
			const newState = { ...state };
			newState.timeFrameStart = action.payload;
			if (newState.timeFrameStart === '2'){
				newState.timeFrameEnd = '1';
			}
			else {
				newState.timeFrameEnd = '0';
			}

			return newState;
		}
		default:
			return state;
	}
};

export default filterReducer;