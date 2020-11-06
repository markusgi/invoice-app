
const getDate = (arg) => {

    switch(arg){
        case 'this_year': {
            let res = new Date(new Date().getFullYear(), 0, 1);
            return res.toISOString().slice(0, 10);
        }
        case 'last_year': {
            let res = new Date(new Date().getFullYear() - 1, 0, 1);
            return res.toISOString().slice(0, 10);
        }
        case 'this_month': {
            let res = new Date(new Date().getFullYear(), new Date().getMonth(), 1);
            return res.toISOString().slice(0, 10)
        }
        case 'last_month': {
            let res = new Date(new Date().getFullYear(), new Date().getMonth() - 1, 1);
            return res.toISOString().slice(0, 10)
        }
		default:
			return;
    }

}

export default getDate;