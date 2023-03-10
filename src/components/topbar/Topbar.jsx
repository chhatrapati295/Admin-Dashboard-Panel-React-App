import './topbar.css'
import {Settings , Notifications , Language} from '@mui/icons-material';
import { Link } from 'react-router-dom';

export default function Topbar() {
  return (
    <div className='topbar'>
      <div className="topbarWrapper">
        <div className="left-topbar">
            <Link to='/newUser'>
        <span className="logo">Chhatrapati.Dev</span>
            </Link>
        </div>
        <div className="right-topbar">
            <div className="notification">
            <Notifications className='right-icon'/>
            <span className="count">2</span>
            </div>
            <div className="notification">
            <Language className='right-icon'/>
            <span className="count">1</span>
            </div>
            <Settings className='right-icon'/>
            <Link to='/newUser'><img className='topbar-avatar' src="https://images.pexels.com/photos/1391499/pexels-photo-1391499.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" /></Link>
        </div>
      </div>
    </div>
  )
}
