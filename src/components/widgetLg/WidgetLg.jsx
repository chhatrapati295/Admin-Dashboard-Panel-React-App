import './widgetLg.css'

export default function widgetLg() {
  const Button = ({type})=>{
    return <button className={"lgButton" + ' ' + type}>{type}</button>
  }
  return (
    <div className='widgetLg'>
      <span className="title">Latest Trasactions</span>
      <table className="lgTable">
        <tr className="lgRow">
          <th className="lgHeading">Customer</th>
          <th className="lgHeading">Date</th>
          <th className="lgHeading">Amount</th>
          <th className="lgHeading">Status</th>
        </tr>
        <tr className="lgRow">
          <td className="lgData lgInfo">
            <img src="https://images.pexels.com/photos/1391499/pexels-photo-1391499.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
            <span className="tableName">Susan Carole</span>
          </td>
          <td className="lgData">
            2 Jun 2022
          </td>
          <td className="lgData">
            $122.00
          </td>
          <td className="lgData">
              <Button type='Approved'/>
          </td>
        </tr>
        <tr className="lgRow">
          <td className="lgData lgInfo">
            <img src="https://images.pexels.com/photos/1391499/pexels-photo-1391499.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
            <span className="tableName">Susan Carole</span>
          </td>
          <td className="lgData">
            2 Jun 2022
          </td>
          <td className="lgData">
            $122.00
          </td>
          <td className="lgData">
              <Button type='Declined'/>
          </td>
        </tr>
        <tr className="lgRow">
          <td className="lgData lgInfo">
            <img src="https://images.pexels.com/photos/1391499/pexels-photo-1391499.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
            <span className="tableName">Susan Carole</span>
          </td>
          <td className="lgData">
            2 Jun 2022
          </td>
          <td className="lgData">
            $122.00
          </td>
          <td className="lgData">
              <Button type='Pending'/>
          </td>
        </tr>
        <tr className="lgRow">
          <td className="lgData lgInfo">
            <img src="https://images.pexels.com/photos/1391499/pexels-photo-1391499.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
            <span className="tableName">Susan Carole</span>
          </td>
          <td className="lgData">
            2 Jun 2022
          </td>
          <td className="lgData">
            $122.00
          </td>
          <td className="lgData">
              <Button type='Approved'/>
          </td>
        </tr>
      </table>
    </div>
  )
}
