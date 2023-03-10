import { Link } from 'react-router-dom'
import UserInfo from '../../components/userInfo/UserInfo'
import './editUser.css'

export default function EditUser() {
  return (
    <div className='editUser'>
        <div className="editUserBox1">
            <span className="editUserTitle">Edit User</span>
            <Link to='/newUser'><button className="editUserButton">Create</button></Link>
        </div>
        <div className="editUserBox2">
            <UserInfo/>
        </div>
    </div>
  )
}
