import { createGlobalStyle } from 'styled-components';
export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: Lato, Tahoma, sans-serif;
    } 

	body {
		background-color: #f2f2f2;
		/*max-width: 1600px;*/
		margin: 0 auto;
		min-height: 100vh;
}


    a{
        text-decoration: none;
    }
`;

// fonts
export const fontSmall = '.6rem';
export const fontNormal = '1rem';
export const fontMedium = '1.2rem';
export const fontLarge = '1.5rem';
export const fontExLarge = '2rem';

// colors
export const orangeMain = '#E47D31';
export const yellowMain = '#F8E71C';
export const link = 'rgba(0, 0, 0, 0.7);';
export const linkActive = 'rgba(0, 0, 0, 0.9);';
