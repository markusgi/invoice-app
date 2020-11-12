import React, { useState } from 'react';

import { ResultsContainer } from './style';


const ResultsTable = ( { props }) => {

    const [ selected, setSelected ] = useState();

    const onInvoiceEnter = (data, index) => {
        console.log("in da click")
		setSelected(index)
    };
    
    console.log(props)
    console.log(selected)

    return (
        <ResultsContainer>
            <div className="ResultsInvoices">
                {props ? <h2>Invoices</h2> : <h2>No invoices. Please adjust the filters</h2>}
                <tbody>
                    <tr>
                        <th>Invoice Nr.</th>
                        <th>Date</th>
                        <th>Shop / Supplier</th>
                        <th>Nr. of Items</th>
                        <th>Total</th>
                    </tr>
                    {props ? props.map((inv) => {
                        return (
                        <tr key={inv.id}  onClick={() => setSelected(inv.id)}>
                            <td>{inv.id}</td>
                            <td>{inv.date}</td>
                            <td>{inv.shop}</td>
                            <td>{inv.number_of_articles}</td>
                            <td>{inv.total_amount}</td>
                        </tr>)}   
                    )
                    : null}
                </tbody>

            </div>

            <div className="ResultsArticles">
                {props ? <h2>Invoices</h2> : <h2>No invoices. Please adjust the filters</h2>}
                <h2>Title</h2>
                <tbody>
                    <tr>
                        <th>Item</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Total</th>
                        <th>Tag</th>
                    </tr>
                    {props[selected] ? props[selected].articles.map((article) => {
                        return (
                        <tr key={article.id}>
                            <td>{article.item}</td>
                            <td>{article.price}</td>
                            <td>{article.quantity}</td>
                            <td>{article.total_price}</td>
                            <td>{article.tag.title}</td>
                        </tr>)}   
                    )
                    : null}

                </tbody>

            </div>

    

        </ResultsContainer>
    );
};

export default ResultsTable