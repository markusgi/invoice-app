import baseUrl from '../../helper/url_helper';

export const getRevenuesAction = () => async (dispatch, getState) => {
    // const { token } = getState();
    const accessToken = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjA0OTk5MTIxLCJqdGkiOiI5MzdiZGNlMDljNjc0MzhhYjAwZGUxMjdhYzc0N2JmYyIsInVzZXJfaWQiOjF9.H9BFHc0ftTlRUlT47Bw_G7Z2z947hUQ8Ue-X8xohd6M";
    const url = `${baseUrl}revenues/`;
	const config = {
		method: 'GET',
		headers: new Headers({
			Accept: 'application/json',
			Authorization: `Bearer ${ accessToken }`,
		}),
	};
	const response = await fetch(url, config);
	const data = await response.json();
	return data;
};

export default getRevenuesAction;