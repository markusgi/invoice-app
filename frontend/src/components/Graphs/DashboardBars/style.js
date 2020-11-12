import styled from "styled-components";
import { colors } from "../../../style/Theme";

export const GraphContainerMain = styled.div`
  width: 100%;
  padding: 0 15px;
  height: 80px;
  display: flex;
  align-items: center;
  background: #fff !important;
  /* background-color: red; */
`;

export const GraphContainer = styled.div`
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  padding: 10px;
  width: 800px;
  height: 800px;
  background-color: #fff;
`;

export const BarChartWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  min-height: 300px;
  border-top: 2px solid ${colors.blue};
  padding-bottom: 5px;
  padding-top: 5px;
  border-bottom: 2px solid ${colors.blue};
`;
