import React, { Fragment } from 'react';

import Select from 'react-select';
import { groupStyles, groupBadgeStyles, TagsSelect } from './style';

import { YellowButton } from '../../style/Button';
import { FormGroup, Label2, Input2 } from '../../style/Inputs';

// import { getFilteredAction } from '../store/actions/getFilteredAction';

import { MainBodyContainer, StandardWindow, TitleDiv } from '../../style/Container';
import Titles25 from "../BaseComponents/Titles/Titles25";


const GraphsAnalysis = ( { props }) => {

    return (
        <Fragment>

            <MainBodyContainer LeftColumn>

                <StandardWindow>
                    <Titles25 title={"Filters"} />
                    <TitleDiv>
                        <div className="leftColumn">
                            <p>ssomething</p>
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

export default GraphsAnalysis