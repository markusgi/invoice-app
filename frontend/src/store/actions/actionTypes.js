export const SET_USER = 'SET_USER';
export const SET_TOKEN = 'SET_TOKEN';

// export const SET_TIMEFRAME = 'SET_TIMEFRAME';


export const timeAction = (start, end) => {
    return {
        type: "SET_TIMEFRAME",
        payload: [start, end],
    };
};

export const filterAction = (filters) => {
    return {
        type: "SET_FILTER",
        payload: filters,
    };
};