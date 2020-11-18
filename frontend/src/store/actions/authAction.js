export const authAction = (token) => {
    console.log('in authAction, token: ', token);
    return {
        type: "USER_LOGIN",
        payload: token
    }
};