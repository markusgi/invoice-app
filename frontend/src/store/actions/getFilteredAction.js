import baseUrl from '../../helper/url_helper';
import { InvoiceForm } from '../../style/Form';

export const getFilteredAction = ( start, end, tag, token ) => async (dispatch, getState) => {
	const url = `${baseUrl}invoices/date/${start}/${end}/tag/${tag}`;
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