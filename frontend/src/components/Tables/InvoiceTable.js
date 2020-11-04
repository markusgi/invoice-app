import React, { Fragment } from 'react';
import { InvoiceTableCSS } from '../../style/Table';

const InvoiceTable = () => {

    return (
        <Fragment>
            <h2>Invoices</h2>
            <h3>Year no.</h3>
            <h3>Year total</h3>
            <h3>Month no.</h3>
            <h3>Month total</h3>
            <br></br>
            <InvoiceTableCSS>
                <tr>
                    <th>Date</th>
                    <th>Supplier</th>
                    <th>Total</th>
                </tr>
                <tr>
                    <td>01.03.2019</td>
                    <td>Migros</td>
                    <td>4,321</td>
                </tr>
                <tr>
                    <td>01.03.2019</td>
                    <td>Migros</td>
                    <td>4,321</td>
                </tr>
                <tr>
                    <td>01.03.2019</td>
                    <td>Migros</td>
                    <td>4,321</td>
                </tr>
            </InvoiceTableCSS>
        </Fragment>
    )
};

export default InvoiceTable;