import styled, { css } from 'styled-components';
import { colors } from "./Theme";
import InfoIcon from '../assets/svgs/icon-info-grey.svg';



export const TitleContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 90px;
  padding-bottom: 7px;
  padding-top: 5px;
`

export const TitleLeft = styled.div`
  width: 25%;
  display: flex;
  position: relative;
  border-bottom: 2px solid ${colors.gray};
  img{
    position: absolute;
    top: 5px;
    right: -5px;
    width: 30px;
    height: 25px;
    outline: none;
    //pointer-events: none;
  };
`

export const TitleRight = styled.div`
  width: 75%;
`

