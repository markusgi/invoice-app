import baseUrl from '../../helper/url_helper';

export const getFilteredAction = ( start, end, tag, token ) => async (dispatch, getState) => {
	const url = `${baseUrl}articles/date/${start}/${end}/tag/${tag}`;
	const config = {
		method: 'GET',
		headers: new Headers({
			Accept: 'application/json',
			Authorization: `Bearer ${ token }`,
		}),
	};
	const response = await fetch(url, config);
	const data = await response.json();
	return data;
};

export default getFilteredAction;