import './userList.css'
import { DataGrid } from '@mui/x-data-grid';
import { DeleteOutlined } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { userRows } from '../../dummyData';
import { useState } from 'react';

export default function UserList() {
    const [data , setData] = useState(userRows)
    const handleDelete = (id)=>{
        setData(data.filter(item=>item.id !== id))
    }
    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'username', headerName: 'Username', width: 200 , renderCell : (params)=>{
            return <div className='userInfo'>
                <img src={params.row.avatar} className='userInfoImg' alt="" />
                <span className="userName">{params.row.username}</span>
            </div>
        } },
        { field: 'email', headerName: 'Email', width: 200 },
        {
          field: 'status',
          headerName: 'Status',
          width: 120,
        },
        {
          field: 'transactions',
          headerName: 'Transactions',
          width: 120,
        },
        {
          field: 'action',
          headerName: 'Action',
          width: 120,
          renderCell : (params)=>{
            return(
                <div className='action-div'>
                <Link to={'/users/' + params.row.id}><button className="editBtn">Edit</button></Link>
                <DeleteOutlined className='deleteBtn' onClick={()=>handleDelete(params.row.id)}/>
                </div>
            )
          }
        },
      ];
      
      
      
  return (
    <div className='userList'>
      <DataGrid
        rows={data}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[5]}
        disableRowSelectionOnClick
        checkboxSelection
      />
    </div>
  )
}
