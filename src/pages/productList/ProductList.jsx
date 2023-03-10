import './productList.css'
import { DataGrid } from '@mui/x-data-grid';
import { DeleteOutlined } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { productRows } from '../../dummyData';
import { useState } from 'react';

export default function ProductList() {
    const [data , setData] = useState(productRows)
    const handleDelete = (id)=>{
        setData(data.filter(item=>item.id !== id))
    }
    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'productName', headerName: 'Product', width: 200 , renderCell : (params)=>{
            return <div className='productInfo'>
                <img src={params.row.avatar} className='productInfoImg' alt="" />
                <span className="productName">{params.row.productName}</span>
            </div>
        } },
        {
          field: 'stock',
          headerName: 'Stock',
          width: 120,
        },
        {
          field: 'price',
          headerName: 'Price',
          width: 120,
        },
        {
          field: 'cart',
          headerName: 'Cart',
          width: 120,
          renderCell : (params)=>{
            return(
                <div className='action-div'>
                <Link to={'/products/' + params.row.id}><button className="editBtn">Edit</button></Link>
                <DeleteOutlined className='deleteBtn' onClick={()=>handleDelete(params.row.id)}/>
                </div>
            )
          }
        },
      ];

  return (
    <div className='productList'>
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
