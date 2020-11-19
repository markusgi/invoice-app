import baseUrl from '../../helper/url_helper';

export const getFilteredInvoiceAction = ( start, end, token, shop ) => async (dispatch, getState) => {
	const url = `${baseUrl}invoices/date/${start}/${end}/`;
	const config = {
		method: 'GET',
		headers: new Headers({
			Accept: 'application/json',
			Authorization: `Bearer ${ token }`,
		}),
	};
	const response = await fetch(url, config);
	const data = await response.json();
	if (shop) {
		data.filter((inv) => inv.shop == shop)
	}
	console.log(data)
	return data;
};

export default getFilteredInvoiceAction;