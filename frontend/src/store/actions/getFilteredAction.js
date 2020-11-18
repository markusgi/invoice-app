import baseUrl from '../../helper/url_helper';

export const getFilteredAction = ( start, end, tag, token, search ) => async (dispatch, getState) => {
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
	const res = data.filter((art) => art.item == search)
	console.log(data)
	return data;
};

export default getFilteredAction;