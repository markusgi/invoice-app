import styled, { css } from 'styled-components';
import {YellowButton} from "./Button";
import {Input2} from "./Inputs";
import { StandardWindow } from "../style/Container";
import { colors } from "./Theme";
import { Label2, FormGroup} from "./Inputs";
import SearchIcon from '../assets/svgs/icon-search-yellow.svg'


export const StandardWindowDataEdit = styled(StandardWindow)`
  width: 100%;
`

export const SearchPart = styled.div``

export const TitleDiv = styled.div``

export const FormGroupSearch = styled.div`
  position: relative;
  margin-top: 20px;
  img{
    width: 25px;
    height: 25px;
    position: absolute;
    top: 15px;
    right: 20px;
    //pointer-events: none;
  }
`

export const SearchResults = styled.div``

export const IconSearch = styled(Label2)`
  :after{
    background: src={"SearchIcon"};
  }
`


export const ResultsText = styled.div`
  display: flex;
  height: 55px;
  align-items: center;
  margin-top: 20px;
`

export const ResultsGreen = styled.div`
  color: ${colors.green};
  padding-left: 20px;
`

export const ResultsRed = styled.div`
  color: ${colors.red};
  padding-left: 20px;
`

export const ResultsData = styled.div`
  width: 100%;
  gap: 30px;
  display: flex;
`

export const DataLeft = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-between;
  gap: 30px;
`

export const FormGroupRight = styled(FormGroup)`
    width: calc(100% - 70px);
`

export const DataRight = styled.div`
  gap: 30px;
  width: 50%;
  display: flex;
  align-items: center;
  position: relative;
  img{
    height: 25px;
    width: 25px;
    //margin-top: 25px;
    position: absolute;
    bottom: 17.5px;
    right: 20px;
    transform: rotate(180deg)
  }
`

export const OverviewPart = styled.div`
  margin-top: 20px;
`


export const TopGroup = styled.div`
`

export const TopLeft = styled.div`
  width: 50%;
  //margin: 0 15px 0 0;
  display: flex;
  justify-content: space-between;
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


