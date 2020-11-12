import { colors, fontSizes } from "../../../style/Theme";
import styled, { css } from 'styled-components';

export const InvoiceTableCSS = styled.table`
    font-size: ${fontSizes.small};
    display: flex;
    justify-content: center;
    align-items: center;
    /* border: 3px solid black; */

	${props => 
		props.Main &&
		css`
			background-color: pink;
	`}


`;

export const TitleDiv = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    border-top: 2px solid ${colors.blue};
    padding-bottom: 5px;
    padding-top: 5px;
    border-bottom: 2px solid ${colors.blue};

    .leftColumn {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        width: 180px;
    }
    .rightColumn {
        display: flex;
        flex-direction: column;
        width: 100%;
        align-items: flex-end;
    }
`;