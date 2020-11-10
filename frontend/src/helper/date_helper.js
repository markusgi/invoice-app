
const getDate = (arg) => {

    switch(arg){
        case '12': {
            let res = new Date(new Date().getFullYear(), 0, 1);
            return res.toISOString().slice(0, 10);
        }
        case 'last_year': {
            let res = new Date(new Date().getFullYear() - 1, 0, 1);
            return res.toISOString().slice(0, 10);
        }
        case '0': {
            let res = new Date(new Date());
            return res.toISOString().slice(0, 10)
        }
        case '1': {
            let res = new Date(new Date().getFullYear(), new Date().getMonth(), 1);
            return res.toISOString().slice(0, 10)
        }
        case '2': {
            let res = new Date(new Date().getFullYear(), new Date().getMonth() - 1, 1);
            return res.toISOString().slice(0, 10)
        }
        case '3': {
            let res = new Date(new Date().getFullYear(), new Date().getMonth() - 2, 1);
            return res.toISOString().slice(0, 10)
        }
        case '6': {
            let res = new Date(new Date().getFullYear(), new Date().getMonth() - 5, 1);
            return res.toISOString().slice(0, 10)
        }
		default:
			return;
    }

}

export default getDate;