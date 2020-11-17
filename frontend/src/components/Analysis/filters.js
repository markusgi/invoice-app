import React, { Fragment, useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import { useDispatch, useSelector, useStore } from 'react-redux';
import { filterAction } from '../../store/actions/actionTypes';
import getFilteredAction from '../../store/actions/getFilteredAction';

import ResultsTable from './resultsTable';
import SpecificTable from './specificTable';
import Select from 'react-select';
import { groupStyles, groupBadgeStyles, TagsSelect, FiltersDiv } from './style';

import { YellowButton } from '../../style/Button';
import { FormGroup, Label2, Input2 } from '../../style/Inputs';

import { MainBodyContainer, StandardWindow, TitleDiv } from '../../style/Container';


const options = [
    { value: '1', label: 'Food & Beverages' },
    { value: '2', label: 'Energy & Waste' },
    { value: '3', label: 'Maintenance' },
    { value: '4', label: 'Other' }
]



const formatGroupLabel = data => (
    <div style={groupStyles}>
        {/* <Label2 for="tag">Tag</Label2>
        <Input2 type="text" name="tag" id="tag"/> */}
        <span>{data.label}</span>
        <span style={groupBadgeStyles}>{data.options.length}</span>
    </div>
);


const FiltersAnalysis = () => {
    const [ filteredData, setFilteredData ] = useState([]);
    const [ shop, setShop ] = useState();
    const [ article, setArticle] = useState();
    const [ tag, setTag ] = useState(null);

    const [selectedOption, setSelectedOption] = useState(null);
    const dispatch = useDispatch();
    const token = useSelector(state => state.user.token)

    const [startDate, setStartDate] = useState(new Date());
    const InputStartDate = ({ value, onClick }) => (
        <Fragment>
            <FormGroup className="dates">
                <Label2 for="startDate">Start Date</Label2>
                <Input2 type="text" onClick={onClick} placeholder={value} name="startDate" id="startDate" />
            </FormGroup>
        </Fragment>
    );

    const [endDate, setEndDate] = useState(new Date());
    const InputEndDate = ({ value, onClick }) => (
        <Fragment>
            <FormGroup className="dates">
                <Label2 for="endDate">End Date</Label2>
                <Input2 type="text" onClick={onClick} placeholder={value} name="endDate" id="endDate" />
            </FormGroup>
        </Fragment>
    );



    useEffect(() => {
        const getData = async () => {
            const data = await dispatch(getFilteredAction(startDate.toISOString().slice(0, 10), endDate.toISOString().slice(0, 10), '1', token));
            setFilteredData(data);
        };
		getData();
    }, [startDate, endDate, dispatch]);


    return (
        <Fragment>

            <MainBodyContainer LeftColumn>

                <StandardWindow>
                    <h2>Filters</h2>
                    <TitleDiv>
                        <div className="leftColumn">
                            <form style={{width:"100%"}}>
                                <DatePicker
                                    selected={startDate}
                                    onChange={date => setStartDate(date)}
                                    customInput={<InputStartDate />}
                                />
                                <DatePicker
                                    selected={endDate}
                                    onChange={date => setEndDate(date)}
                                    customInput={<InputEndDate />}
                                />
                                {/* <TagsSelect> */}
                                    <FormGroup>
                                        <Select
                                            defaultValue={selectedOption}
                                            onChange={setSelectedOption}
                                            options={options}
                                            formatGroupLabel={formatGroupLabel}
                                        />
                                        <Label2 for="tag">Tag</Label2>
                                        <Input2 type="text" name="tag" id="tag"/>
                                    </FormGroup>
                                {/* </TagsSelect> */}
                                <FormGroup>
                                    <Label2 for="tag">Tag</Label2>
                                    <Input2 type="text" name="tag" id="tag"/>
                                </FormGroup>
                                <FormGroup>
                                    <Label2 for="shop">Shop / Supplier</Label2>
                                    <Input2 type="text" name="shop" id="shop" />
                                </FormGroup>
                                <FormGroup>
                                    <Label2 for="article">Article</Label2>
                                    <Input2 type="text" name="article" id="article" />
                                </FormGroup>

                                <FormGroup style={{display:"flex", justifyContent:"center", width:"100%"}}>
                                    <YellowButton type="submit" style={{width:"200px"}}>
                                        Apply Filter
                                    </YellowButton>
                                </FormGroup>
                            </form>
                        </div>
                    </TitleDiv>

                    <form>


                        <TagsSelect>
                            <Select
                                defaultValue={selectedOption}
                                onChange={setSelectedOption}
                                options={options}
                                formatGroupLabel={formatGroupLabel}
                            />
                        </TagsSelect>
                    </form>


                </StandardWindow>
            </MainBodyContainer>

            <MainBodyContainer RightColumn>

                <StandardWindow>
                    <FormGroup style={{display:"flex", flexDirection:"row"}}>
                        <Label2 for="search">Search</Label2>
                        <Input2 type="text" name="search" id="search" style={{marginRight:"30px"}} />
                        <YellowButton type="submit" style={{width:"200px"}}>
                            Search
                        </YellowButton>
                    </FormGroup>
                </StandardWindow>

                <MainBodyContainer LeftColumn>
                    <StandardWindow>
                        <h2>Results</h2>
                        <TitleDiv>
                            <ResultsTable props={filteredData} />
                        </TitleDiv>
                    </StandardWindow>
                </MainBodyContainer>

                <MainBodyContainer RightColumn>
                    <StandardWindow>
                        <h2>Analysis</h2>
                        <TitleDiv>
                            <SpecificTable props={filteredData}/>
                        </TitleDiv>
                    </StandardWindow>
                </MainBodyContainer>

            </MainBodyContainer>

        </Fragment>
    );
};

export default FiltersAnalysis