import React, { Fragment } from 'react';
import { LoginFragment, StandardWindowLaptop, StandardWindowPhone, StandardWindowLogin,
    ContainerLogo, ButtonsContainer, InputContainer } from '../../style/Login';
import { YellowButton } from '../../style/Button';
import { Label2, Input2, FormGroup } from '../../style/Inputs';
import logoBlue from '../../assets/images/logo-5aid-blue-text.png';
import BtnGoogle from '../../assets/images/btn-google.png'
import BtnApple from '../../assets/images/btn-apple.png'
import PicLaptop from '../../assets/images/mockup-laptop.png'
import PicMobile from '../../assets/images/mockup-mobile.png'



const LoginLogic = () => {

	return (
		<LoginFragment>
            <StandardWindowLaptop>
                <img src={PicLaptop} alt="Laptop"></img>
            </StandardWindowLaptop>
            <StandardWindowPhone>
                <img src={PicMobile} alt="Mobilephone"></img>
                <p>Install App</p>
                <img src={BtnGoogle} className={"google"} alt="GooglePlay"></img>
                <img src={BtnApple} alt="AppStore"></img>
            </StandardWindowPhone>
			<StandardWindowLogin>
                <ContainerLogo>				
                    <img src={logoBlue} alt="logo" className="logo"></img>
                </ContainerLogo>
                <ButtonsContainer>
                    <button>Login</button>
                    <button>SignUp</button>
                </ButtonsContainer>
                <InputContainer>
                    <FormGroup>
                        <Label2 to="email">Email Address</Label2>
                        <Input2 name="email" id="email"/>
                    </FormGroup>
                    <FormGroup>
                        <Label2 to="password">Password</Label2>
                        <Input2 name="password" id="password"/>
                    </FormGroup>
                    <FormGroup style={{width:"100%"}}>
                        <YellowButton className="loginButton">
                            Login
                        </YellowButton>
                    </FormGroup>
                </InputContainer>

			</StandardWindowLogin>
		</LoginFragment>
	);
};

export default LoginLogic;