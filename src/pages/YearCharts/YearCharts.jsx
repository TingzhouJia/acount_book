import React from 'react'

import YearCircle from '../../components/Charts/YearCircle'
import YearLine from '../../components/Charts/yearLine'
class YearChart extends React.Component{
    render(){
       return <div className="yearAll">
            <YearCircle/>
            <YearLine/>
       </div>
           
       
    }
}
export default YearChart