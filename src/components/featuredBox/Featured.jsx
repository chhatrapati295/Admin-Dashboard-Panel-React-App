import './featured.css'
import { ArrowDownwardRounded, ArrowUpwardRounded } from '@mui/icons-material'
export default function Featured() {
  return (
    <div className='featured'>
      <div className="box1-sm">
                <span className="box-title">Revenue</span>
                <div className="box1-sm-change">
                <span className="box-amount">$2,415</span>
                <span className="change">-11.4 <ArrowDownwardRounded style={{color : 'crimson'}}/></span>
                </div>
                <span className="box-overview">Compared to last month</span>
            </div>
            <div className="box1-sm">
                <span className="box-title">Coast</span>
                <div className="box1-sm-change">
                <span className="box-amount">$5,410</span>
                <span className="change">-5.8 <ArrowDownwardRounded style={{color : 'crimson'}}/></span>
                </div>
                <span className="box-overview">Compared to last month</span>
            </div>
            <div className="box1-sm">
                <span className="box-title">Sales</span>
                <div className="box1-sm-change">
                <span className="box-amount">$3,878</span>
                <span className="change">+16.8 <ArrowUpwardRounded style={{color : 'Green'}}/></span>
                </div>
                <span className="box-overview">Compared to last month</span>
            </div>
    </div>
  )
}
