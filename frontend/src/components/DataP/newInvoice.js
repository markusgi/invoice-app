import React, { Fragment } from 'react';
import { StandardWindow, TitleDiv } from '../../style/Container';
import { NiceInput, InvoiceForm } from '../../style/Form';
import { Password, EmailAddress, FormGroup, Label2, Input2 } from '../../style/Inputs';
import {YellowButton} from "../../style/Button";
import { TopGroup, TopLeft, TopRight, MiddleGroup, BottomGroup, SpaceLeft, SpaceRight, CheckPriceDiv, CheckDiv, PriceDiv, YellowButtonStyle } from "../../style/DataPageNew";

const NewInvoice = () => {

    // let emailOnChangeHandler;


    return (
        <Fragment>
            <StandardWindow>
                <TitleDiv>
                    <h2>New Invoice</h2>
                </TitleDiv>
 
                <form>
                    <TopGroup>
                        <TopLeft>
                            <FormGroup>
                                <Input2 type="text" name="Date" id="Date" />
                                <Label2 for="Date">Date</Label2>
                            </FormGroup>
                            <FormGroup>
                                <Input2 type="text" name="InvoiceNo" id="InvoiceNo" />
                                <Label2 for="InvoiceNo">Invoice No.</Label2>
                            </FormGroup>
                        </TopLeft>
                        <TopRight>
                            <FormGroup style={{width: "100%"}}>
                                <Input2 style={{width: "100%"}} type="text" name="Shop" id="Shop" />
                                <Label2 for="Shop">Shop / Supplier</Label2>
                            </FormGroup>
                        </TopRight>
                    </TopGroup>

                    <MiddleGroup>
                        <FormGroup>
                            <Input2 type="text" name="Item" id="Item" />
                            <Label2 for="Item">Item</Label2>
                        </FormGroup>
                        <FormGroup>
                            <Input2 type="text" name="Quantity" id="Quantity" />
                            <Label2 for="Quantity">Quantity</Label2>
                        </FormGroup>
                        <FormGroup>
                            <Input2 type="text" name="Price" id="Price" />
                            <Label2 for="Price">Price</Label2>
                        </FormGroup>
                        <FormGroup>
                            <Input2 type="text" name="Tag" id="Tag" />
                            <Label2 for="Tag">Tag</Label2>
                        </FormGroup>
                    </MiddleGroup>

                    <BottomGroup>
                        <SpaceLeft/>
                        <SpaceRight>
                            <CheckPriceDiv>
                                <CheckDiv>Check total price</CheckDiv>
                                <PriceDiv>38.85</PriceDiv>
                            </CheckPriceDiv>
                            <YellowButtonStyle>
                                Save changes
                            </YellowButtonStyle>
                        </SpaceRight>
                    </BottomGroup>

                </form>
            </StandardWindow>
        </Fragment>
    );
};

export default NewInvoice