import { Home , TrendingUp , Timeline, Person, Storefront, CurrencyRupee, BarChart, MailOutlined, DynamicFeedOutlined, ChatBubbleOutlineOutlined, TimelineOutlined, ReportOutlined, WorkOutlineOutlined } from '@mui/icons-material'
import './sidebar.css'
import {Link} from 'react-router-dom'

export default function Sidebar() {
  return (
    <div className='sidebar'>
      <div className="siebarWrapper">
        <div className="sidebar-box">
            <span className="heading">Dashboard</span>
            <ul className="box-items">
                <li className="box-item active"><Home className='sidebar-icon'/><Link to="/">Home</Link></li>
                <li className="box-item"><Timeline className='sidebar-icon'/><Link to="/products">Analytics</Link></li>
                <li className="box-item"><TrendingUp className='sidebar-icon'/><Link to="/products/:productID">Sales</Link></li>
            </ul>
        </div>
        <div className="sidebar-box">
            <span className="heading">Quick Menu</span>
            <ul className="box-items">
                <li className="box-item"><Person className='sidebar-icon'/><Link to="/users">Users</Link></li>
                <li className="box-item"><Storefront className='sidebar-icon'/> <Link to="/products">Products</Link></li>
                <li className="box-item"><CurrencyRupee className='sidebar-icon'/><Link to="/">Transactions</Link></li>
                <li className="box-item"><BarChart className='sidebar-icon'/><Link to='/products/:productID'>Reports</Link></li>
            </ul>
        </div>
        <div className="sidebar-box">
            <span className="heading">Notifications</span>
            <ul className="box-items">
                <li className="box-item"><MailOutlined className='sidebar-icon'/> Mail</li>
                <li className="box-item"><DynamicFeedOutlined className='sidebar-icon'/> Feedback</li>
                <li className="box-item"><ChatBubbleOutlineOutlined className='sidebar-icon'/> Messages</li>
            </ul>
        </div>
        <div className="sidebar-box">
            <span className="heading">Staff</span>
            <ul className="box-items">
                <li className="box-item">< WorkOutlineOutlined className='sidebar-icon'/> Manage</li>
                <li className="box-item"><TimelineOutlined className='sidebar-icon'/> Analytics</li>
                <li className="box-item"><ReportOutlined className='sidebar-icon'/> Reports</li>
            </ul>
        </div>
      </div>
    </div>
  )
}
