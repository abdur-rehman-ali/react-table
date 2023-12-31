import React, { useMemo } from 'react'
import { useTable } from 'react-table'
import { COLUMNS, HEADER_GROUPS } from './columns'
import MOCK_DATA from '../data/data.json'
import './BasicTable.css'

const BasicTable = () => {
  // const columns = useMemo(() => COLUMNS, [])
  const columns = useMemo(() => HEADER_GROUPS, [])
  const data = useMemo(() => MOCK_DATA, [])
  // useTable recommed you to memoize the rows and columns 
  // SO that data should not be recreated on every render
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    footerGroups,
    rows,
    prepareRow
  } = useTable({
    columns,
    data
  })

  return (
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th {...column.getHeaderProps()}>{column.render('Header')}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {
          rows.map(row => {
            prepareRow(row)
            return (
              <tr {...row.getRowProps()}>
                {
                  row.cells.map(cell => {
                    return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                  })
                }
              </tr>
            )
          })
        }
      </tbody>
      <tfoot>
        {
          footerGroups.map(footerGroup => (
            <tr {...footerGroup.getFooterGroupProps()}>
              {
                footerGroup.headers.map(column => (
                  <td {...column.getFooterProps()}>{column.render('Footer')}</td>
                ))
              }
            </tr>
          ))
        }
      </tfoot>
    </table>
  )
}

export default BasicTable
