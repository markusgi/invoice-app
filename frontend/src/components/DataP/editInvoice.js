import React, { Fragment } from 'react';
import { StandardWindow, TitleDiv } from '../../style/Container';
import { NiceInput } from '../../style/Form';
import { FormGroup, Label2, Input2 } from '../../style/Inputs';
import { IconSearch, FormGroupSearch, FormGroupRight, StandardWindowDataEdit, SearchPart, SearchResults, ResultsText, ResultsGreen, ResultsRed, ResultsData, DataLeft, DataRight, OverviewPart } from "../../style/DataPageEdit";
import SearchIcon from '../../assets/svgs/icon-search-yellow.svg';
import GotoIcon from '../../assets/svgs/icon-goto-yellow.svg';

const EditInvoice = () => {

    return (
        <Fragment>
            <StandardWindowDataEdit>
                <SearchPart>

                    <TitleDiv>
                        <h2>Edit Invoice</h2>
                    </TitleDiv>

                    <form>
                        <FormGroupSearch style={{width: "100%"}}>
                            <Input2 style={{width: "100%"}} type="text" name="Search" id="Search" />
                            <IconSearch for="Search">Search</IconSearch>
                            <img src={SearchIcon}/>
                        </FormGroupSearch>
                    </form>

                    <SearchResults>

                        <ResultsText>
                            <ResultsGreen>
                                <p>1 match found - here is the list</p>
                            </ResultsGreen>
                            <ResultsRed>
                                <p>No results - no match found - please try something different</p>
                            </ResultsRed>
                        </ResultsText>

                        <ResultsData>
                            <DataLeft>
                                <FormGroup>
                                    <Input2 type="text" name="Date" id="Date" />
                                    <Label2 for="Date">Date</Label2>
                                </FormGroup>
                                <FormGroup>
                                    <Input2 type="text" name="Invoice" id="Invoice" />
                                    <Label2 for="Invoice">Invoice No</Label2>
                                </FormGroup>
                            </DataLeft>
                            <DataRight>
                                <FormGroupRight>
                                    <Input2 type="text" name="Shop" id="Shop" />
                                    <Label2 for="Shop">Shop / Supplier</Label2>
                                </FormGroupRight>
                                <img src={GotoIcon} alt={"Goto Icon"} />
                            </DataRight>
                        </ResultsData>
                    </SearchResults>
                </SearchPart>

                <OverviewPart>
                    <TitleDiv>
                        <h2>Overview</h2>
                    </TitleDiv>
                    <ResultsData>
                        <DataLeft>
                            <FormGroup>
                                <Input2 type="text" name="Date" id="Date" />
                                <Label2 for="Date">Date</Label2>
                            </FormGroup>
                            <FormGroup>
                                <Input2 type="text" name="Invoice" id="Invoice" />
                                <Label2 for="Invoice">Invoice No</Label2>
                            </FormGroup>
                        </DataLeft>
                        <DataRight>
                            <FormGroupRight>
                                <Input2 type="text" name="Shop" id="Shop" />
                                <Label2 for="Shop">Shop / Supplier</Label2>
                            </FormGroupRight>
                            <img src={SearchIcon} alt={"Search Icon"} />
                        </DataRight>
                    </ResultsData>
                </OverviewPart>

            </StandardWindowDataEdit>
        </Fragment>
    );
};

export default EditInvoice