import { createGlobalStyle } from 'styled-components';


export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
		box-sizing: border-box;
		@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
		font-family: 'Poppins', sans-serif;
		font-style: normal;
		font-weight: 400;
	} 
	
	@font-face{
		font-family: 'Poppins';
		src: url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
	}
// 
	body {
		background-color: #C6D3DE;
		font-family: 'Poppins';
		/*max-width: 1600px;*/
		margin: 0 auto;
		height: 100vh;
	}

	a {
		text-decoration: none;
	}
`;



export const colors = {
    white: '#FFF',
	black: '#000',
	gray: '#C6D3DE',
	
	dimGray: 'rgba(0, 0, 0, .55)',
	// gradientBtn: 'linear-gradient(90deg, #ff64ba 0%, #7478f6)',

	blueDark: "#234E6F",
	blue: "#4D7593",
	blueLight: '#F6F7FB',

	yellowDark: '#EFBA46',
	yellow: '#FFC74D',
	yellowLight: '#FFF4DB',

	red: '#FF6666',
	redLight : '#FFF4F4',
	redDifferent: '#EA498B',

	green: '#20BF69',
	turkis: '#2BD8D7',
	turkisLight: '#E6FAFA',
	violet: '#BC67FE',
};

export const fontSizes = {
	small: '.8rem',
	normal: '1.2rem',
	medium: '1.5rem',
	large: '1.8rem',
	exLarge: '2.2rem',
};



// fonts
export const fontSmall = '.6rem';
export const fontNormal = '1rem';
export const fontMedium = '1.2rem';
export const fontLarge = '1.5rem';
export const fontExLarge = '2rem';

// colors
export const orangeMain = '#E47D31';
export const yellowMain = '#F8E71C';
// export const link = 'rgba(0, 0, 0, 0.7);';
// export const linkActive = 'rgba(0, 0, 0, 0.9);';
