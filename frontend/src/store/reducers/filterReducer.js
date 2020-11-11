import getDate from '../../helper/date_helper';

const initialState = {
	timeFrameStart: getDate('12'),
	timeFrameEnd: getDate('0'),
    tag: null,
    articleName: null,
	invoiceNr: null,
};

const filterReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'SET_TIMEFRAME': {
			const newState = { ...state };
			newState.timeFrameStart = action.payload[0];
			if (action.payload[0] === getDate('2')){
				newState.timeFrameEnd = getDate('1');
			}
			else {
				newState.timeFrameEnd = action.payload[1];
			}
			return newState;
		}
		default:
			return state;
	}
};

export default filterReducer;