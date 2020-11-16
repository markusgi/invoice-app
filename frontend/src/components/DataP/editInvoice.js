<<<<<<< HEAD
import React, { Fragment } from 'react';
=======
import React, { Fragment, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DatePicker from 'react-datepicker';

import searchAllAction from '../../store/actions/searchAllAction';

>>>>>>> Dev
import { FormGroup, Label2, Input2 } from '../../style/Inputs';
import { FormGroupSearch, FormGroupRight, StandardWindowDataEdit,
    SearchPart, SearchResults, Divider,
    ResultsText, ResultsGreen, ResultsRed, ResultsData,
    DataLeft, DataRight, OverviewPart } from "../../style/DataPageEdit";
import SearchIcon from '../../assets/svgs/icon-search-yellow.svg';
import GotoIcon from '../../assets/svgs/icon-goto-yellow.svg';
import Titles from '../../components/BaseComponents/Titles'

import { EditInvoiceTable } from './tables';



const EditInvoice = () => {
<<<<<<< HEAD
=======
    const [ results, setResults ] = useState()
    const dispatch = useDispatch();

    const token = useSelector(state => state.user.token)

    const handleSearch = (event) => {
        event.preventDefault();
        const getData = async () => {
            const data = await dispatch(searchAllAction(0, 0, "tomato", token));
            console.log(data)
        };
		getData();
    }
    

>>>>>>> Dev
    return (
        <Fragment>
            <StandardWindowDataEdit>
                <SearchPart>

                    <Titles title={"Edit Invoice"} />

                    <form>
                        <FormGroupSearch style={{width: "100%"}}>
                            <Input2 style={{width: "100%"}} type="text" name="Search" id="Search" onChange={handleSearch}/>
                            <Label2 for="Search">Search</Label2>
                            <img src={SearchIcon} alt="Search icon" />
                        </FormGroupSearch>
                    </form>


                        <SearchResults>
                            <ResultsText>
                                <ResultsGreen>
                                    {results 
                                    ? <p>{results.length} matches found - here is the list</p>
                                    : <p style={{color:"#FF6666"}}>No results - no match found - please try something different</p>
                                    }
                                </ResultsGreen>
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
                                    <img src={SearchIcon} alt={"Search Icon"} />
                                </DataRight>
                            </ResultsData>
                        </SearchResults>
        
                    </SearchPart>

                    <OverviewPart>
                        <Titles title={"Overview"} />
                        <ResultsData>
                            <EditInvoiceTable results={results}/>

                            {/* <DataLeft>
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
                            </DataRight> */}
                        </ResultsData>
                    </OverviewPart>
  
            </StandardWindowDataEdit>
        </Fragment>
    );
};

export default EditInvoice