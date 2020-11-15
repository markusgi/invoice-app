import React, { Fragment, useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import getLatestAction from '../../../store/actions/getLatestAction';

import { InvoiceTableCSS, TitleDiv } from './style';
import getDate from '../../../helper/date_helper';

const InvoiceTable = ( { props } ) => {
    const [ latest, setlatest ] = useState([])
    const dispatch = useDispatch();
    const token = useSelector(state => state.user.token)
    console.log(latest)

    useEffect(() => {
        const getData = async () => {
            const data =  await dispatch(getLatestAction(token));
            setlatest(data)
        } 
        getData();
    }, [setlatest, dispatch]);

    return (
        <Fragment>
            <h2>Invoices</h2>
            <TitleDiv>
                <div className="leftColumn">
                    <h3>Year no.</h3>
                    <h3>Year total</h3>
                    <h3>Month no.</h3>	
                    <h3>Month total</h3>	
                </div>
                <div className="rightColumn">
                    <h3>{props.invoices.filter(inv => {return inv.date >= getDate('12')}).length}</h3>
                    <h3>{props.invoices.filter(inv => {return inv.date >= getDate('12')}).reduce((sum, current) => { return sum + current.total_amount}, 0)}</h3>
                    <h3>{props.invoices.filter(inv => {return inv.date >= getDate('1')}).length}</h3>
                    <h3>{props.invoices.filter(inv => {return inv.date >= getDate('1')}).reduce((sum, current) => { return sum + current.total_amount}, 0)}</h3>
                </div>
            </TitleDiv>
            <InvoiceTableCSS>
                <tbody style={{width:"100%"}}>
                    <tr >
                        <th style={{width:"20%", fontSize:"16px"}}>Date</th>
                        <th style={{width:"65%", fontSize:"16px"}}>Supplier</th>
                        <th style={{width:"20%", fontSize:"16px"}}>Total</th>
                    </tr>
                    {latest.length > 0 
                    ? latest.map((inv) => {
                        return (
                            <tr key={inv.id}>
                                <td style={{textAlign:"right"}}>{inv.date}</td>
                                <td style={{textAlign:"center"}}>{inv.shop}</td>
                                <td style={{textAlign:"right"}}>{inv.total_amount}</td>
                            </tr>)
                            })
                    : <p>no new Invoices</p>}   
                </tbody>
            </InvoiceTableCSS>
        </Fragment>
    )
};

export default InvoiceTable;