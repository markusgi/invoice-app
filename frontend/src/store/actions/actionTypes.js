export const SET_USER = 'SET_USER';
export const SET_TOKEN = 'SET_TOKEN';

// export const SET_TIMEFRAME = 'SET_TIMEFRAME';


export const timeAction = (start, end, activeSub) => {
    return {
        type: "SET_TIMEFRAME",
        payload: [start, end, activeSub],
    };
};

export const filterAction = (filters) => {
    return {
        type: "SET_FILTER",
        payload: filters,
    };
};

export const subWindowAction = (activeSubWindow) => {
    return {
        type: "SET_SUBWINDOW",
        payload: activeSubWindow,
    };
};