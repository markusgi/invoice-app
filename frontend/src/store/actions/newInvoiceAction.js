import baseUrl from '../../helper/url_helper';

export const newInvoiceAction = (date2, shop2) => async (dispatch, getState) => {
    // const { token } = getState(state => state.user.token);
    // console.log(token)
    const restaurant2 = '1'
    // const token = eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjA1NDM0MzYxLCJqdGkiOiI5MTY2MTBkMDNjZGU0YWNiOTYxYzk5Njk2MmFhOTUyZSIsInVzZXJfaWQiOjF9.RSsWyHlSTsuJ8Cmj-0raDP5465KcUS1BGDhJwKoUKqQ";
    const accessToken = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjA1NDM0MzYxLCJqdGkiOiI5MTY2MTBkMDNjZGU0YWNiOTYxYzk5Njk2MmFhOTUyZSIsInVzZXJfaWQiOjF9.RSsWyHlSTsuJ8Cmj-0raDP5465KcUS1BGDhJwKoUKqQ";
    const url = `${baseUrl}invoices/new/`;
	const config = {
		method: 'POST',
		headers: new Headers({
            // Accept: 'application/json',
            "Content-Type": "application/json",
			"Authorization": `Bearer ${ accessToken }`,
        }),
        body: JSON.stringify({ date: date2, shop: shop2, restaurant: 1 })
	};
	const response = await fetch(url, config);
	const data = await response.json();
	return data;
};

export default newInvoiceAction;
