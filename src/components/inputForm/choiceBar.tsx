import React, { useState } from 'react'
import './choiceBar.css'
import {  CheckCircleFilled } from '@ant-design/icons'
interface Bars {
    content:eachInfo[]
}
interface eachInfo{
    content:string,
    hint:string,
    cur?:number
}

const imgList=['/automated-invoicing.png','/billing2020-tn3-01.png','/Subscription-Billing-Operations.png']
const ChoiceBar=(props:Bars) => {
    const [selected, setSelected] = useState(0)
    const EachBar = (curprops:eachInfo) => {
        const {cur,content,hint}=curprops
        return (
            <div className={`custom_choice_bar ${selected==cur?'selected_custom_choice_bar':''}`} onClick={() => setSelected(cur?cur:0)} >
                 <img src={imgList[cur?cur:0]}  style={{height:"50%",width:"100%"}}/>
            <div className="first_choice_bar">
           
            <span style={{fontWeight:600,fontSize:"1.0rem",paddingLeft:'1vw'}}>{content}</span>
            </div>
            <span>
                {hint}
            </span>
            {selected==cur ?  <CheckCircleFilled style={{fontSize:"1.2rem"}} /> : <div className="unselected_radio"></div>}
        </div>
        )
    }
    return (
        <div className="custom_radio_list">
            {props.content.map((each,index)=>{
                 return (<EachBar content={each.content}  hint={each.hint} cur={index} />)
            })}
        </div>
    )
}
export default ChoiceBar