
import Chart from '../../components/chart/Chart'
import Featured from '../../components/featuredBox/Featured'
import './home.css'
import {userData} from '../../dummyData'
import WidgetSm from '../../components/widgetSm/WidgetSm'
import WidgetLg from '../../components/widgetLg/WidgetLg'

export default function Home() {
  return (
    <div className='home'>
      <div className="homeWrapper">
        <Featured/>
        <Chart data={userData} title={'User Analytics'} grid dataKey={'Active User'}/>
        <div className="widgets">
          <WidgetSm/>
          <WidgetLg/>
        </div>
      </div>
    </div>
  )
}
