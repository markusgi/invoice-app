// import { colors, fontSizes } from "../../style/Theme";
import styled, { css } from 'styled-components';

export const groupStyles = styled.div`

    display: 'flex';
    align-items: 'center';
    justify-content: 'space-between';
`;



export const groupBadgeStyles = styled.span`
    background-color: '#EBECF0';
    border-radius: '2em';
    color: '#172B4D';
    display: 'inline-block';
    font-size: 12;
    font-weight: 'normal';
    line-height: '1';
    /* min-width: 1; */
    padding: '0.16666666666667em 0.5em';
    text-align: 'center';
`;

export const TagsSelect = styled.div`
    background-color: pink;
`

export const ResultsContainer = styled.div`
    border: 3px solid black;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-items: center;

    /* .ResultsInvoices {
        border: 3px solid black;
        min-width: 500px;
        width: 50%;
        background-color: pink;
    } */

    .ResultsArticles {
        border: 3px solid black;
        width: 40%;
    }
`;