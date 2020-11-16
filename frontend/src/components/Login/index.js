import React, { Fragment } from 'react';

import { StandardWindowLogin, ContainerLogo, ButtonsContainer, InputContainer } from './style';
import { YellowButton } from '../../style/Button';
import { Label2, Input2, FormGroup } from '../../style/Inputs';

import logoBlue from '../../assets/images/logo-5aid-black.png';



const LoginLogic = () => {

	return (
		<Fragment>
            <StandardWindowLogin>
                <p>Something</p>
            </StandardWindowLogin>
            <StandardWindowLogin>
                <p>Something</p>
            </StandardWindowLogin>
			<StandardWindowLogin>
                <ContainerLogo>				
                    <img src={logoBlue} alt="logo" className="logo"></img>
                    <h3>5min analyzing invoice dashboard</h3>
                </ContainerLogo>
                <ButtonsContainer>
                    <button>Login</button>
                    <button>SignUp</button>
                </ButtonsContainer>
                <InputContainer>
                    <FormGroup>
                        <Label2 to="email">Email Address</Label2>
                        <Input2 placeholder="Email Address" name="email" id="email"/>
                    </FormGroup>
                    <FormGroup>
                        <Label2 to="password">Password</Label2>
                        <Input2 placeholder="Password" name="password" id="password"/>
                    </FormGroup>
                    <FormGroup style={{width:"100%"}}>
                        <YellowButton className="loginButton">
                            Login
                        </YellowButton>
                    </FormGroup>
                </InputContainer>

			</StandardWindowLogin>
		</Fragment>
	);
};

export default LoginLogic;