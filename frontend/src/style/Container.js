import { colors, fontSizes } from "../style/Theme";
import styled, { css } from 'styled-components';

export const Container = styled.section`
	margin: auto;
	overflow: hidden;
	padding: 0 2rem;
	width: 100%;


	@media (min-width: 576px) {
		.container {
			max-width: 540px;
		}
	}
	@media (min-width: 768px) {
		.container {
			max-width: 720px;
		}
	}
	@media (min-width: 992px) {
		.container {
			max-width: 960px;
		}
	}
	@media (min-width: 1200px) {
		.container {
			max-width: 1140px;
		}
	}
`;

export const StandardWindow = styled.section`
	// max-width: 1380px;
	background-color: ${colors.white};
	border-radius: 10px;
	margin: 15px;
	padding: 20px;
	color: ${colors.blue};


	${props =>
		props.Revenues &&
		css`
			display: flex;
			flex-direction: column;
			align-items: flex-start;
			justify-content: flex-start;

			div {
				display: flex;
				flex-direction: row;
				width: 100%;

				.left {
					display: flex;
					flex-direction: column;
					align-items: flex-start;
					width: 150px;
				}
				.right {
					display: flex;
					flex-direction: column;
					width: 100%;
					align-items: flex-end;
				}
			}

			h2 {
				width: 100%;
				border-bottom: 2px solid ${colors.blue};
				margin-bottom: 10px;
			}
		`}

	${props =>
		props.Invoices &&
		css`
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;

			h2 {
				width: 100%;
				border-bottom: 2px solid ${colors.blue};
			}
		`}

	${props =>
		props.PieChart &&
		css`
			display: flex;
			align-items: center;
			justify-content: center;

			h2 {
				width: 40%;
				border-bottom: 2px solid ${colors.blue};
			}
		`}

`

export const MainBodyContainer = styled.div`
	display: flex;
	flex-direction: row;

	${props => 
		props.Main &&
		css`
			display: flex;
			flex-direction: row;
			border: 2px solid blue;
	`}

	${props => 
		props.LeftColumn &&
		css`
			display: flex;
			flex-direction: column;
			border: 2px solid blue;
			min-width: 350px;
	`}

	${props => 
		props.RightColumn &&
		css`
			display: flex;
			flex-direction: column;
			border: 2px solid blue;
			width: 100%;
	`}
`;
