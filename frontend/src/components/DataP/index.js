import React, { Fragment } from 'react';

import { NiceInput, InvoiceForm } from '../../style/Form';

const DataPage = () => {


    return (
        <Fragment>
            <h2>New Invoice</h2>

            <InvoiceForm>
                <label for="date">Date</label>
                <NiceInput type="text" name="date" id="date" />

                <label for="shop">Shop</label>
                <NiceInput type="text" name="shop" id="shop" />

            </InvoiceForm>

            
            <form>
                <label for="invoice">Invoice</label>
                <NiceInput type="text" name="invoice" id="invoice" />

                <label for="item">Item</label>
                <NiceInput type="text" name="item" id="item" />

                <label for="quantity">Quantity</label>
                <NiceInput type="text" name="quantity" id="quantity" />

                <label for="price">Price</label>
                <NiceInput type="text" name="price" id="price" />

                <label for="tag">Tag</label>
                <NiceInput type="text" name="tag" id="tag" />
                
            </form>

        </Fragment>
    );
};

export default DataPage