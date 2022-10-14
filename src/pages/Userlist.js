import React from 'react';
import { DataGrid } from '@mui/x-data-grid'
import "./Userlist.css";
import {Link} from 'react-router-dom'
import { userRows } from '../Dummydata';
import { useState } from 'react';

const Userlist = () => {
  const[data, setData] = useState(userRows);

  const handleDelete=(id)=>{
     setData(data.filter((item)=>item.id!== id));
  }
  const columns= [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'username', headerName: 'User Name', width: 130 },
    { field: 'firstname', headerName: 'First Name', width: 130 },
    { field: 'lastname', headerName: 'Last Name', width: 130 },
    { field: 'status', headerName: 'Status' , width: 110},
    {field: "action", headerName: "Action" , width: 130 , 
     renderCell: (params)=>{
       return(
        <>
        <Link to = {"/user/"+params.row.id}>
        <button className = "userListEdit">View</button>
        </Link>
        <button className = "userListEdit" onClick = {()=>handleDelete(params.row.id)} >Delete</button>
        </>
       ) 
     }  
    }, 
  ];
  
  // const rows = [
  //   { id: 1, username: 'Jon Snow', firstname: "jon" , lastname: "sno", status: "active"},
  //   { id: 2, username: 'Jon Snow', firstname: "jon" , lastname: "sno", status: "active"},
  //   { id: 3, username: 'Jon Snow', firstname: "jon" , lastname: "sno", status: "active"},
  //   { id: 4, username: 'Jon Snow', firstname: "jon" , lastname: "sno", status: "active"},
  //   { id: 5, username: 'Jon Snow', firstname: "jon" , lastname: "sno", status: "active"},
  //   { id: 6, username: 'Jon Snow', firstname: "jon" , lastname: "sno", status: "active"},
  //   { id: 7, username: 'Jon Snow', firstname: "jon" , lastname: "sno", status: "active"},
  //   { id: 8, username: 'Jon Snow', firstname: "jon" , lastname: "sno", status: "active"},
  //   { id: 9, username: 'Jon Snow', firstname: "jon" , lastname: "sno", status: "active"},
  //   { id: 10, username:'Jon Snow', firstname: "jon" , lastname: "sno", status: "active"},
    
  // ];
  
  return (
    <div className = "userlist">
      <DataGrid rows={data} disableSelectionOnClick columns={columns} pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  )
}

export default Userlist