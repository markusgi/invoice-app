import React, { Fragment, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import getRevenuesAction from '../../../store/actions/getRevenues';

import { TitleDiv } from './style';



const RevenueDashboard = () => {
    const dispatch = useDispatch();
    const [Revenues, setRevenues] = useState([]);
    // console.log(Revenues)

    useEffect(() => {
        const getData = async () => {
            const data = await dispatch(getRevenuesAction());
			setRevenues(data);
		};
		getData();
    }, []);


    const getCurrentDate = () => {
        const timeElapsed = Date.now();
        const today = new Date(timeElapsed);
        const res = today.toISOString();
        return res.slice(0, 10)
    }


    const helperRevenueTotal = (rev, start="2020-01-01", end=getCurrentDate()) => {
        console.log(rev, start, end);
        let sum = 0
        rev.forEach(element => {
            if (element.date >= start && element.date <= end){
                sum += element.revenue
            }
        })
        return sum
    }


    return (
        <Fragment>
            <h2>Revenues</h2>
            <TitleDiv>
                <div className="leftColumn">
                    <h3>This Year</h3>
                    <h3>Last Month</h3>
                    <h3>This Month</h3>	
                </div>
                <div className="rightColumn">
                    <h3>{Revenues.length !== 0 ? helperRevenueTotal(Revenues) : "No Data"}</h3>
                    <h3>{Revenues.length !== 0 ? helperRevenueTotal(Revenues, "2020-10-01", "2020-10-31") : "No Data"}</h3>
                    <h3>{Revenues.length !== 0 ? helperRevenueTotal(Revenues, "2020-11-01") : "No Data"}</h3>
                </div>
            </TitleDiv>
        </Fragment>
    )
};

export default RevenueDashboard;