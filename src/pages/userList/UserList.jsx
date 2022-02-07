import * as React from 'react';
import "./userList.css";
import { DataGrid } from '@mui/x-data-grid';
import {userRows} from "../../dummyData.js";
import {useState} from 'react'; 

function UserList() {

  const [rows, setRows] = useState(userRows);


  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    { field: 'username', headerName: 'Username', width: 200 },
    { field: 'email', headerName: 'Email', width: 200 },
    {
      field: 'status',
      headerName: 'Status',
      width: 120,
    },
    {
      field: 'transaction',
      headerName: 'Transaction volume',
      width: 160,
    },

  ];




  return <div className='userList'>User List
      <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  
  </div>;
}

export default UserList;
