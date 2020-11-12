import styled, { css } from 'styled-components';
import {YellowButton} from "./Button";
import {Input2} from "./Inputs";

export const TitleDiv = styled.div`
  display: flex;
  width: 20%;
`

export const TopGroup = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 30px;
`

export const TopLeft = styled.div`
  width: 50%;
  //margin: 0 15px 0 0;
  display: flex;
  justify-content: space-between;
  gap: 30px;
`

export const TopRight = styled.div`
  width: 50%;
`

export const MiddleGroup = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 30px;
`

export const BottomGroup = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 30px;
  margin-top: 20px;
`

export const SpaceLeft = styled.div`
  width: 50%;
`

export const SpaceRight = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  gap: 30px;
`

export const CheckPriceDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  //padding: 0 20px;
`

export const CheckDiv = styled.div`
  padding-left: 20px;
`

export const PriceDiv = styled.div`
  padding-right: 20px;
  font-weight: bolder;
`

export const YellowButtonStyle = styled(YellowButton)`
  width: 100%;
`