import './createUser.css'

export default function CreateUser() {
  return (
    <div className='createUser'>
      <h1 className="newUserTitle">New User</h1>
      <form action="" className="newUserForm">
        <div className="newUserItem">
        <label htmlFor="username">Username</label>
        <input type="text" placeholder='Ex. John' />
        </div>
        <div className="newUserItem">
        <label htmlFor="full name">Full Name</label>
        <input type="text" placeholder='Ex. John Snow' />
        </div>
        <div className="newUserItem">
        <label htmlFor="email">Email</label>
        <input type="text" placeholder='Ex. john99@gmail.com' />
        </div>
        <div className="newUserItem">
        <label htmlFor="password">Password</label>
        <input type="text" placeholder='Password' />
        </div>
        <div className="newUserItem">
        <label htmlFor="phone">Phone</label>
        <input type="text" placeholder='Ex. +1 99873447' />
        </div>
        <div className="newUserItem">
        <label htmlFor="address">Address</label>
        <input type="text" placeholder='Ex. New York | USA' />
        </div>
        <div className="newUserItem">
          <label htmlFor="gender">Gender</label>
          <div className="newUserGenderBox">
            <input type="radio" name="gender" id="male" />
            <label htmlFor="male">Male</label>
            <input type="radio" name="gender" id="female" />
            <label htmlFor="female">Female</label>
            <input type="radio" name="gender" id="other" />
            <label htmlFor="other">Other</label>
          </div>
        </div>
        <div className="newUserItem">
          <label htmlFor="active">Active</label>
          <select name="active" id="active">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
      </form>
        <button className='submitBtn'>Create</button>
    </div>
  )
}
