import styled from 'styled-components';

const Btn = styled.button`
	appearance: none;
	outline: none;
	font-size: ${props => props.theme.fontMedium};
	padding: 12px 28px;
	border-radius: 100px;
	border: 2px solid ${props => props.theme.orangeMain};
	cursor: pointer;

	${props => {
		if (props.showcase) {
			return `
			color: #fff;
			background: ${props.theme.orangeMain};
			position: relative;
			padding: 12px 46px;
			z-index: 1;
			margin-left: 12px;
			`;
		}
	}}

	${props => {
		if (props.btnLike) {
			return `
			background: #b3b3b3;
			font-size: 1rem;
			color: #fff;
			border: 1px solid #fff;
			padding: 8px 15px;
			border-top-right-radius: 0;
			border-bottom-right-radius: 0;
			`;
		}
	}}

	${props => {
		if (props.btnComment) {
			return `
			background: #b3b3b3;
			font-size: 1rem;
			color: #fff;
			padding: 8px 15px;
			border: 1px solid #fff;
			outline: none;
			border-top-left-radius: 0;
			border-bottom-left-radius: 0;
			cursor: pointer;
			`;
		}
	}}
	
	${props => {
		if (props.restaurantProfile) {
			return `
			color: #fff;
			background: ${props.theme.orangeMain};
			position: relative;
			padding: 8px 32px;
			letter-spacing: 1px;
			font-size: ${props.theme.fontNormal};
			`;
		}
	}}
`;

export default Btn;
