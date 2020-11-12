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
			return newState;
		}
		// case 'SET_TIMEFRAME': {
		// 	const newState = { ...state };
		// 	newState.timeFrameStart = action.payload;
		// 	return newState;
		// }
		default:
			return state;
	}
};

export default filterReducer;
