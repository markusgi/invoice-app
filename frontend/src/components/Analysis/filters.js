import React, { Fragment, useState } from 'react';

import Select from 'react-select';
import { groupStyles, groupBadgeStyles, TagsSelect } from './style';

import { YellowButton } from '../../style/Button';
import { FormGroup, Label2, Input2 } from '../../style/Inputs';

import { MainBodyContainer, StandardWindow, TitleDiv } from '../../style/Container';


const options = [
	{ value: 'chocolate', label: 'Chocolate' },
	{ value: 'strawberry', label: 'Strawberry' },
	{ value: 'vanilla', label: 'Vanilla' }
]



const formatGroupLabel = data => (
    <div style={groupStyles}>
    <span>{data.label}</span>
    <span style={groupBadgeStyles}>{data.options.length}</span>
    </div>
);


const FiltersAnalysis = ( { props }) => {



    const [selectedOption, setSelectedOption] = useState(null);


    	// useEffect(() => {
    //     const getData = async () => {
    //         const data = await dispatch(getFilteredAction(Filter.timeFrameStart, Filter.timeFrameEnd, token));
	// 		setfilteredData(data);
	// 	};
	// 	getData();
    // }, [Filter, dispatch]);


    return (
        <Fragment>

            <MainBodyContainer LeftColumn>

                <StandardWindow>
                    <h2>Filters</h2>
                    <TitleDiv>
                        <div className="leftColumn">
                            <p>Hel</p>
                        </div>

                    </TitleDiv>
                </StandardWindow>
                </MainBodyContainer>

                <MainBodyContainer RightColumn>

                <StandardWindow>

                <FormGroup>
                    <Label2>Start Date</Label2>
                    <Input2 type="text" />
                </FormGroup>
                <FormGroup>
                    <Label2>End Date</Label2>
                    <Select options={options} />
                </FormGroup>

                <TagsSelect>
                    <Select
                        defaultValue={selectedOption}
                        onChange={setSelectedOption}
                        options={options}
                        formatGroupLabel={formatGroupLabel}
                    />
                </TagsSelect>


                <FormGroup>
                    <Label2>Tag</Label2>
                    <Input2 type="text" />
                </FormGroup>
                <FormGroup>
                    <Label2>Article</Label2>
                    <Input2 type="text" />
                </FormGroup>
                <FormGroup>
                    <Label2>Supplier</Label2>
                    <Input2 type="text" />
                </FormGroup>
                <div className="filterButton">
                    <YellowButton style={{"width": "100%"}}>
                        Apply Filter
                    </YellowButton>
                </div>

                </StandardWindow>

            </MainBodyContainer>

    

        </Fragment>
    );
};

export default FiltersAnalysis