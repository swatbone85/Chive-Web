import React from 'react'
import { useTable, useSortBy } from 'react-table'
import './table.css'

const BasicTable = (props) => {

    const columns = props.columns
    const data = props.data

    const tableInstance = useTable({
        columns,
        data
    }, useSortBy)

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow
    } = tableInstance

    return (
        <table {...getTableProps()}>
            <thead>
                {
                    headerGroups.map((headerGroup) => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {
                                headerGroup.headers.map(column => (
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
                {
                    rows.map((row) => {
                        prepareRow(row)
                        return (
                            <tr {...row.getRowProps()}>
                                {row.cells.map((cell) => {
                                    return <td {...cell.getCellProps()}>
                                        {cell.render('Cell')}
                                    </td>
                                })}
                            </tr>
                        )
                    })
                }

            </tbody>

        </table>
    )
}

export default BasicTable
