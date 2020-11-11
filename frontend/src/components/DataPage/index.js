import React, { Fragment } from 'react';

import { NiceInput, InvoiceForm } from '../../style/Form';

import { Password, EmailAddress, FormGroup, Label2, Input2 } from '../../style/Inputs';

const DataPage = () => {

    let emailOnChangeHandler;


    return (

        <Fragment>

            <h1>Add new data</h1>
            <input label={"Date"}/>
            <input label={"Invoice No."}/>
            <input label={"Supplier"}/>

            <input label={"Item"}/>
            <input label={"Quantity"}/>
            <input label={"Price"}/>
            <input label={"Tag"}/>

            <p>Check total price</p>
            <p>38.85</p>

            <button>Save changes</button>




        </Fragment>
    );
};

export default DataPage