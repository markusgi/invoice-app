import React, { Fragment } from 'react';
import { FormGroup, Label2, Input2 } from '../../style/Inputs';
import { FormGroupSearch, FormGroupRight, StandardWindowDataEdit,
    SearchPart, SearchResults, Divider,
    ResultsText, ResultsGreen, ResultsRed, ResultsData,
    DataLeft, DataRight, OverviewPart } from "../../style/DataPageEdit";
import SearchIcon from '../../assets/svgs/icon-search-yellow.svg';
import GotoIcon from '../../assets/svgs/icon-goto-yellow.svg';
import Titles from '../../components/BaseComponents/Titles'



const EditInvoice = () => {
    return (
        <Fragment>
            <StandardWindowDataEdit>
                <SearchPart>

                    <Titles title={"Edit Invoice"} />

                    <form>
                        <FormGroupSearch style={{width: "100%"}}>
                            <Input2 style={{width: "100%"}} type="text" name="Search" id="Search" />
                            <Label2 for="Search">Search</Label2>
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
                <Divider/>
                <OverviewPart>
                    <Titles title={"Overview"} />
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
                </OverviewPart>

            </StandardWindowDataEdit>
        </Fragment>
    );
};

export default EditInvoice