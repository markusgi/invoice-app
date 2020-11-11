
const getDate = (arg) => {
    var date;
    switch(arg){
        case '12': {
            date = new Date(new Date().getFullYear(), 0, 1);
            // res: 2020.01.01
            break;
        }
        case '0': {
            date = new Date();
            // res: 2020.11.10(today)
            break;
        }
        case '1': {
            date = new Date(new Date().getFullYear(), new Date().getMonth(), 1);
            // res: 2020.11.01
            break;
        }
        case 'last_month_end': {
            date = new Date(new Date().getFullYear(), new Date().getMonth() - 1, 0);
            console.log('res last month: ', date);
            // res: 2020.10.31
            break;
        }
        case '2': {
            date = new Date(new Date().getFullYear(), new Date().getMonth() - 1, 1);
            // res: 2020.10.01
            break;
        }
        case '3': {
            date = new Date(new Date().getFullYear(), new Date().getMonth() - 2, 1);
            // res: 2020.09.01
            break;
        }
        case '6': {
            date = new Date(new Date().getFullYear(), new Date().getMonth() - 5, 1);
            // res: 2020.06.01
            break;
        }
    }
    return date.toISOString().slice(0, 10);
}

export default getDate;