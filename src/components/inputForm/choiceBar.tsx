import React, { useState } from 'react'
import './choiceBar.css'
import {  CheckCircleFilled, InfoCircleFilled } from '@ant-design/icons'
import { Tooltip } from 'antd'
interface Bars {
    content:eachInfo[]
}
interface eachInfo{
    content:string,
    hint:string,
    cur?:number
}

const ChoiceBar=(props:Bars) => {
    const [selected, setSelected] = useState(0)
    const EachBar = (curprops:eachInfo) => {
        const {cur,content,hint}=curprops
        return (
            <div className={`custom_choice_bar ${selected==cur?'selected_custom_choice_bar':''}`} onClick={() => setSelected(cur?cur:0)} >
            <div className="first_choice_bar">
            {selected==cur ?  <CheckCircleFilled style={{fontSize:"1.2rem"}} /> : <div className="unselected_radio"></div>}
            <span style={{fontWeight:600,fontSize:"1.0rem",paddingLeft:'1vw'}}>{content}</span>
            </div>
            <Tooltip title={hint}>
            <InfoCircleFilled />
            </Tooltip>
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