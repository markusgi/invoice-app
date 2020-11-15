import baseUrl from '../../helper/url_helper';

export const newArticleAction = (itemName, price2, quantity2, tag2, id2) => async (dispatch, getState) => {
    // const { token } = getState(state => state.user.token);
    // console.log(token)
    const restaurant2 = '1'
    const id = '30'
    // const token = eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjA1NDM0MzYxLCJqdGkiOiI5MTY2MTBkMDNjZGU0YWNiOTYxYzk5Njk2MmFhOTUyZSIsInVzZXJfaWQiOjF9.RSsWyHlSTsuJ8Cmj-0raDP5465KcUS1BGDhJwKoUKqQ";
    const accessToken = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjA1NDM0MzYxLCJqdGkiOiI5MTY2MTBkMDNjZGU0YWNiOTYxYzk5Njk2MmFhOTUyZSIsInVzZXJfaWQiOjF9.RSsWyHlSTsuJ8Cmj-0raDP5465KcUS1BGDhJwKoUKqQ";
    const url = `${baseUrl}articles/new/`;
	const config = {
		method: 'POST',
		headers: new Headers({
            // Accept: 'application/json',
            "Content-Type": "application/json",
			"Authorization": `Bearer ${ accessToken }`,
        }),
        body: JSON.stringify({ item: itemName, price: price2, quantity: quantity2, tag: tag2, invoice: id2 })
	};
	const response = await fetch(url, config);
    const data = await response.json();
    console.log(response)
	return data;
};

export default newArticleAction;
