import React, { Fragment, useState } from 'react';
import DatePicker from 'react-datepicker';
import { useDispatch } from 'react-redux';
import { EditInvoiceDiv } from '../../style/Tables';

import { useTable, useSortBy } from 'react-table';

// const dummyData = [
//     {
//         id: "1",
//         date: '2020-10-10',
//         shop: "Dummy",
//         articles: [
//             {id: "10", item: "tomatoes"}
//         ],
//         number_of_articles: "3",
//         total_amount: "992"
//     },
//     {
//         id: "2",
//         date: '2020-10-10',
//         shop: "Dummy",
//         articles: [
//             {id: "10", item: "tomatoes"}
//         ],
//         number_of_articles: "3",
//         total_amount: "992"
//     },
//     {
//         id: "3",
//         date: '2020-10-10',
//         shop: "Dummy",
//         articles: [
//             {id: "10", item: "tomatoes"}
//         ],
//         number_of_articles: "3",
//         total_amount: "992"
//     }
// ]


export const EditInvoiceTable = ({results}) => {

    function Table({ columns, data }) {
        // Use the state and functions returned from useTable to build your UI
        const {
          getTableProps,
          getTableBodyProps,
          headerGroups,
          rows,
          prepareRow,
        } = useTable(
          {
            columns,
            data,
          },
          useSortBy,
          hooks => {
            hooks.visibleColumns.push(columns => [
              ...columns,
            ])
          }
        )
    
        return (
          <>
            <table {...getTableProps()}>
              <thead>
                {headerGroups.map(headerGroup => (
                  <tr {...headerGroup.getHeaderGroupProps()}>
                    {headerGroup.headers.map(column => (
                        <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                        {column.render('Header')}
                        <span>
                            {column.isSorted
                            ? column.isSortedDesc
                                ? ' 🔽'
                                : ' 🔼'
                            : ''}
                        </span>
                        </th>
                    ))}
                  </tr>
                ))}
              </thead>
              <tbody {...getTableBodyProps()}>
                {rows.slice(0, 10).map((row, i) => {
                  prepareRow(row)
                  return (
                    <tr {...row.getRowProps()}>
                      {row.cells.map(cell => {
                        return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                      })}
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </>
        )
    }

    const columns = React.useMemo(
        () => [
          {
            Header: 'Invoice',
            columns: [
              {
                Header: 'Nr.',
                accessor: 'id',
              },
              {
                Header: 'Date',
                accessor: 'date',
              },
              {
                Header: 'Shop',
                accessor: 'shop',
              },
            ],
          },
          {
            Header: 'Details',
            columns: [
              {
                Header: 'Nr. Items',
                accessor: 'number_of_articles',
              },
              {
                Header: 'Total',
                accessor: 'total_amount',
              },
            ],
          },
        ],
        []
    )
    console.log(results, "---------------------", results.length)
    return (
        <Fragment>
            <EditInvoiceDiv>
                {(results.length >= 1)
                ? <Table columns={columns} data={results} />
                : <p>No results</p>
                }
            </EditInvoiceDiv>

        </Fragment>
    )
};