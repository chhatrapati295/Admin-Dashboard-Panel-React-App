import './newProduct.css'

export default function NewProduct() {
  return (
    <div className='newProduct'>
        <h1 className="title">Product</h1>
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
                <button className="createBtn">Create</button>
            </div>
    </div>
  )
}
