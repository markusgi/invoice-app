import { colors, fontSizes } from "./Theme";
import styled, { css } from 'styled-components';


export const AnalysisTable = styled.div`
    padding: 1rem;
    min-width: 500px;
    width: 50%;

    table {
        border-spacing: 0;
        border: 1px solid black;

    tr {
        :last-child {
            td {
            border-bottom: 0;
            }
        }
    }

    th,
    td {
    margin: 0;
    padding: 0.5rem;
    border-bottom: 1px solid black;
    border-right: 1px solid black;

    :last-child {
        border-right: 0;
        }
    }
    tr {
      background-color: white !important;
      border: 1px solid lighten($baseColor, 20%);
      border-radius: $borderRadius;
      box-shadow: 2px 2px 0 rgba(0,0,0,0.1);
      margin: 0.5rem 0;
      padding: 0;
   }
   
   .table-users { 
      border: none; 
      box-shadow: none;
      overflow: visible;
   }
}
`

export const ItemsTable = styled.div`
    padding: 1rem 5rem 1rem 5rem;
    min-width: 500px;
    width: 100%;

    table {
        border-spacing: 0;
        /* border: 1px solid black; */
        width: 100%;
    

        tr {
            background-color: ${colors.grey};

            :last-child {
                td {
                border-bottom: 0;
                }
            }
        }

        th,
        td {
            color: darken(#398B93, 10%);
            padding: 10px;
            /* margin: 0; */
            /* padding: 0.5rem; */
            /* border-bottom: 1px solid black; */
            /* border-right: 1px solid black; */

            :last-child {
                border-right: 0;
                font-size: 0.95em;
                line-height: 1.4;
                text-align: left;
            }
        }

        th { 
            background-color: lighten(#398B93, 50%);
            font-weight: 300;
        }
        tr {     
            &:nth-child(2n) { background-color: white; }
            &:nth-child(2n+1) { background-color: lighten(#398B93, 55%) }
        }
    }

`