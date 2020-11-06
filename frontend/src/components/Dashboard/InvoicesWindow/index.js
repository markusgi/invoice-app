import React, { Fragment } from 'react';
import { InvoiceTableCSS, TitleDiv } from './style';
import getDate from '../../../helper/date_helper';

const InvoiceTable = ( { props } ) => {


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
                    <h3>{props.invoices.filter(inv => {return inv.date >= getDate('this_year')}).length}</h3>
                    <h3>{props.invoices.filter(inv => {return inv.date >= getDate('this_year')}).reduce((sum, current) => { return sum + current.total_amount}, 0)}</h3>
                    <h3>{props.invoices.filter(inv => {return inv.date >= getDate('this_month')}).length}</h3>
                    <h3>{props.invoices.filter(inv => {return inv.date >= getDate('this_month')}).reduce((sum, current) => { return sum + current.total_amount}, 0)}</h3>
                </div>
            </TitleDiv>
            <InvoiceTableCSS>
                <tbody>
                    <tr>
                        <th>Date</th>
                        <th>Supplier</th>
                        <th>Total</th>
                    </tr>
                    {props.invoices.map((inv) => {return <tr key={inv.id}><td key={inv.id}>{inv.date}</td><td>{inv.shop}</td><td amount>{inv.total_amount}</td></tr>})}   
                </tbody>

            </InvoiceTableCSS>
        </Fragment>
    )
};

export default InvoiceTable;