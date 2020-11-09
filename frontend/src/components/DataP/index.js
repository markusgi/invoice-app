import React, { Fragment } from 'react';

import { NiceInput, InvoiceForm } from '../../style/Form';

import { Password, EmailAddress, FormGroup, Label2, Input2 } from '../../style/Inputs';

const DataPage = () => {

    let emailOnChangeHandler;


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

            <Password type="password" placeholder="Password"></Password>
            <Input2 type="text" placeholder="Last Name" />
            <FormGroup>
                <Label2>First Name</Label2>
                <Input2 type="text" />
            </FormGroup>

            <EmailAddress type="text" placeholder="Email Address" onChange={emailOnChangeHandler}/>


        </Fragment>
    );
};

export default DataPage