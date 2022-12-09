import React, { useState, useEffect, useMemo } from 'react';
import ReactTable, { useTable } from 'react-table';
import Table from './Table';
import './App.css';
import Form from './Form';

function App() {
  const [message, setMessage] = useState("");
  const [tables, setTables] = useState([]);

  const fetchData = () =>  {

    fetch('http://localhost:3000/table')
      .then((res) => res.json())
      .then((data) => { setTables(data.tables) });
  };


  useEffect (() => {
    fetchData();
  },[]);


  const columns = React.useMemo(() =>
    [{
      Header: 'Id',
      accessor: 'Id'    
    },{
      Header: 'State_Name',
      accessor: 'State_Name'
    },{
      Header: 'Date_of_Record',
      accessor: 'Date_of_Record'
      
        
    },{
      Header: 'No_of_Samples',
      accessor: 'No_of_Samples'
    },{
      Header: 'No_of_Deaths',
      accessor: 'No_of_Deaths'
    },{
      Header: 'No_of_Positive',
      accessor: 'No_of_Positive'
    },{
      Header: 'No_of_Negative',
      accessor: 'No_of_Negative'
    },{
      Header: 'No_of_Discharge',
      accessor: 'No_of_Discharge'
  }],[]);

  const {
    getTablesProps,
    getTablesBodyProps,
    headerGroups,
    rows,
    prepareRows
  } = useTable({ columns:columns, data:tables});

  return ( 
    <>
      
    <div className='w-full justify-center items-center '>
      <Table className='w-full  justify-center items-center' columns={columns} data={tables}   />
      <Form className='w-full justify-start items-center'/>

    </div>
    </>
  );
}

export default App;