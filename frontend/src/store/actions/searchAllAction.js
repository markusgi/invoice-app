import baseUrl from '../../helper/url_helper';

export const searchAllAction = ( start, end, search, token ) => async (dispatch, getState) => {

	let url = `${baseUrl}restaurants/search/?search=${search}/`;
    // if (start != 0 && end != 0){
    // 	url = `${baseUrl}invoices/date/${start}/${end}/`;
    // }
	const config = {
		method: 'POST',
		headers: new Headers({
			Accept: 'application/json',
			Authorization: `Bearer ${ token }`,
		}),
	};
    const response = await fetch(url, config);
    console.log(response)
	const data = await response.json();
	console.log(data)
	return data;
};

export default searchAllAction;