import React, { Fragment } from 'react';
import { StandardWindow, TitleDiv } from '../../style/Container';

import { NiceInput } from '../../style/Form';

import { FormGroup, Label2, Input2 } from '../../style/Inputs';

const EditInvoice = () => {

    return (
        <Fragment>
            <StandardWindow>
                <TitleDiv>
                    <h2>Edit Invoice</h2>
                </TitleDiv>
 
                <form>
                    <FormGroup>
                        <Label2 for="Date">Date</Label2>
                        <Input2 type="text" name="Date" id="Date" />
                    </FormGroup>
                    <FormGroup>

                        <Label2 for="Shop">Shop / Supplier</Label2>
                        <Input2 type="text" name="Shop" id="Shop" />
                    </FormGroup>

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
                    <p>Hello</p>
                    
                </form>

                <FormGroup>
                    <Label2>First Name</Label2>
                    <Input2 type="text" />
                </FormGroup>

            </StandardWindow>

        </Fragment>
    );
};

export default EditInvoice