import React from "react";
import { useState } from "react";
import { useFilters, useTable } from "react-table";
import './App.css';

export default function Table({ columns, data }) {
  
  const [filterInput, setFilterInput] = useState("");

  const handleFilterChange = e => {
    const value = e.target.value || undefined;
    setFilter("State_Name",value);
    setFilterInput(value);
  };

  const {
    getTableProps, 
    getTableBodyProps, 
    headerGroups, 
    rows, 
    prepareRow,
    setFilter
  } = useTable({
    columns,
    data
  }, useFilters);

  return (
    <>

    <input className="p-10 border-dashed"
        value={filterInput || ''}
        onChange={handleFilterChange}
        placeholder={"Search State"}
    />

    <table {...getTableProps()}>
      <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th {...column.getHeaderProps()} className='p-5 text-teal-200 outline-double outline-slate-600 '>{column.render("Header")}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()} >
        {rows.map((row) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()} >
              {row.cells.map(cell => {
                return <td {...cell.getCellProps()} className='p-10 text-teal-100 outline-dashed outline-slate-100 ' >{cell.render("Cell")}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
    </>
  );
}