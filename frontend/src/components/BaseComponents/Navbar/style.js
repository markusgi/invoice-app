import { colors, fontSizes } from "../../../style/Theme";
import styled from 'styled-components';

export const NavbarWrapper = styled.nav`
	width: 100%;
	padding: 0 15px;
	height: 140px;
	display: flex;
	flex-direction: column;
	align-items: center;
	background: ${colors.blueDark} !important;
`;

export const NavbarTopWrapper = styled.nav`
	width: 100%;
	padding-top: 35px;
	height: 80px;
	display: flex;
	align-items: center;
`;



export const NavbarLeft = styled.nav`
	width: 30%;
	.logo {
		width: 180px;
		margin-top: 20px;
	}
`;

export const NavbarTop = styled.nav`
	width: 40%;
	min-width: 500px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	height: 100%;

	.dashboardLink,
	.dataLink,
	.analysisLink,
	.settingsLink {
		display: flex;
		align-items: center;
		font-size: ${fontSizes.large};
		color: ${colors.white};
		margin: 15px;
		padding: 5px;
		height: 100%;
		border-bottom: 3px solid transparent;
	}

	.dashboardLink:hover,
	.dataLink:hover,
	.analysisLink:hover,
	.settingsLink:hover {
		border-bottom: 3px solid ${colors.yellow};
		transition: linear .09s;
	}

	.active {
		border-bottom: 3px solid ${colors.yellow};
	}
`;

export const NavbarBottom = styled.nav`
	width: 40%;
	display: flex;
	align-items: center;
	justify-content: space-between;
	height: 50px;

	.timeLink:hover {
		background-color: ${colors.blue};
		border-radius: 7px;
	}
	.timeLink {
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: ${fontSizes.normal};
		color: ${colors.white};
		padding: 0.5rem;
		height: 100%;
		border-bottom: 3px solid transparent;
		min-width: 80px;
	}

`;

export const BtnsWrapper = styled.div`
	display: flex;
	flex-direction: row;
	font-size: 0.7rem;
	padding-left: 200px;

	.Icon {
		width: 25px;
		height: 25px;
		margin-left: 40px;
	}

`;
