import Chart from '../../components/chart/Chart'
import './product.css'
import { productData } from '../../dummyData'
import { UploadFile } from '@mui/icons-material'
import { Link } from 'react-router-dom'

export default function Product() {
  return (
    <div className='product'>
        <div className="productBox1">
            <h1 className="title">Product</h1>
            <Link to='/newProduct'><button className="createBtn">Create</button></Link>
        </div>
        <div className="productContent">
            <div className="leftProductContent">
                <Chart className='chart' data={productData} dataKey='Sales' title='Sales Info'/>
            </div>
            <div className="rightProductContent">
                <div className="rightBox1">
                    <img src="https://images.pexels.com/photos/3945667/pexels-photo-3945667.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className="rightBoxImg" />
                    <span className="rightBoxProductName">Apple Airpods</span>
                </div>
                <div className="rightBox2">
                    <div className="rightBox2-sm">
                        <span className="title">ID:</span>
                        <span className="titleContent">124</span>
                    </div>
                    <div className="rightBox2-sm">
                        <span className="title">Sales:</span>
                        <span className="titleContent">1294</span>
                    </div>
                    <div className="rightBox2-sm">
                        <span className="title">Active:</span>
                        <span className="titleContent">Yes</span>
                    </div>
                    <div className="rightBox2-sm">
                        <span className="title">In stock:</span>
                        <span className="titleContent">Not available</span>
                    </div>
                </div>
            </div>
        </div>
        <div className="productContent2">
            <div className="leftProductContent2">
                <label className="title" htmlFor='input'>Product Name</label>
                <input type="text" id='input' placeholder='Apple Airpods' />
                <label htmlFor="stock" className="title">In Stock</label>
                <select name="" id="stock">
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                </select>
                <label htmlFor="active" className="title">Active</label>
                <select name="" id="active">
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                </select>
            </div>
            <div className="rightProductContent2">
                <div className="rightProductContent2-sm">
                    <img src="https://images.pexels.com/photos/3945667/pexels-photo-3945667.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                    <label htmlFor="upload"><UploadFile/></label>
                    <input type="file" name="" id="upload" style={{display : 'none'}} />
                </div>
                <button className="submitBtn">Update</button>
            </div>
        </div>
    </div>
  )
}
