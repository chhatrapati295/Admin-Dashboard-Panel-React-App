import { CalendarMonth, EmailOutlined, LocationCityOutlined, Person, Person2, PhoneAndroid, UploadFile } from '@mui/icons-material'
import './userInfo.css'

export default function UserInfo() {
  return (
    <div className='userInfo'>
      <div className="profileDetails">
        <div className="profileDetailsBox1">
            <img src="https://images.pexels.com/photos/1391499/pexels-photo-1391499.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
            <div className="profileDetailsBox1-sm">
                <span className="profileName">Anna Becker</span>
                <span className="profileJob">Software Engineer</span>
            </div>
        </div>
        <span className="profileTitles">Account Details</span>
        <div className="profileTitles-sm">
            <Person/>
            <span>annabeck99</span>
        </div>
        <div className="profileTitles-sm">
            <CalendarMonth/>
            <span>10.12.1999</span>
        </div>
        <span className="profileTitles">Contact Details</span>
        <div className="profileTitles-sm">
            <PhoneAndroid/>
            <span>+1 992324345</span>
        </div>
        <div className="profileTitles-sm">
            <EmailOutlined/>
            <span>annabeck99@gmail.com</span>
        </div>
        <div className="profileTitles-sm">
            <LocationCityOutlined/>
            <span>New York | USA</span>
        </div>
      </div>
      <div className="editProfileDetails">
        <div className="editProfileDetailsBox1">
            <span className="title">Edit</span>
            <form action="" className="form">
                <label htmlFor="username">Username</label>
                <input type="text" placeholder='annabeck99' />
                <label htmlFor="full name">Full Name</label>
                <input type="text" placeholder='Anna Becker' />
                <label htmlFor="email">Email</label>
                <input type="text" placeholder='annabeck99@gmail.com' />
                <label htmlFor="phone">Phone</label>
                <input type="text" placeholder='+1 992324345' />
                <label htmlFor="location">Location</label>
                <input type="text" placeholder='New York " USA' />
            </form>
        </div>
        <div className="editProfileDetailsBox2">
        <div className="img-box">
            <img src="https://images.pexels.com/photos/1391499/pexels-photo-1391499.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
            {/* <Person2  /> */}
            <label htmlFor="uploadIcon">< UploadFile/></label>
            <input type="file" name="" id="uploadIcon" style={{display : 'none'}}/>
        </div>
        <button className="updateBtn">Update</button>
        </div>
      </div>
    </div>
  )
}
