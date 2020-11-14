import React, { Fragment } from 'react';
import { Password, EmailAddress, FormGroup, Label2, Input2 } from '../../style/Inputs';
import { StandardWindowDataEdit, TopGroup, TopLeft, TopRight, MiddleGroup,
    BottomGroup, SpaceLeft, SpaceRight,
    CheckPriceDiv, CheckDiv, PriceDiv, YellowButtonStyle } from "../../style/DataPageNew";
import Titles from '../../components/BaseComponents/Titles'
import {SearchPart} from "../../style/DataPageEdit";



const NewInvoice = () => {

    // let emailOnChangeHandler;


    return (
        <Fragment>
            <StandardWindowDataEdit>

                <Titles title={"New Invoice"} />

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
            </StandardWindowDataEdit>
        </Fragment>
    );
};

export default NewInvoice