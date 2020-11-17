import { colors, fontSizes } from "../../style/Theme";
import styled, { css } from 'styled-components';

export const groupStyles = styled.div`

    display: 'flex';
    align-items: 'center';
    justify-content: 'space-between';
`;



export const groupBadgeStyles = styled.span`
    height: 55px;
    width: 100%;
    border-radius: 18px;
    border: solid 2px ${colors.gray};
    box-sizing: border-box;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    color: ${colors.blueDark};
    padding-left: 20px;
    transition: linear 0.5s;
    :focus{
        outline: none;
        border: solid 2px ${colors.blue};
        transition: linear 0.5s;
        + label{
            color: ${colors.blue};
            outline: none;
        }
    }
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