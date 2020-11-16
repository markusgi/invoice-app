import React, { Fragment } from 'react';
import InfoIcon from '../../../assets/svgs/icon-info-grey.svg';
import { TitleContainer, TitleLeft, TitleRight } from "../../../style/Titles";



const Titles = (props) => {

    return (
        <Fragment>
            <TitleContainer>
                <TitleLeft>
                    <h2>{props.title}</h2>
                    <img src={InfoIcon} alt={"Info Icon"} ></img>
                </TitleLeft>
                <TitleRight/>
            </TitleContainer>
        </Fragment>
    )
};

export default Titles