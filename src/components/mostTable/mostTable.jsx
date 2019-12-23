import React from 'react'
import { Table } from 'antd'

export default mostTable=(props)=>{
    func=(text)=>{
        let style=text-3<0?{"color":"white","border-radius":"50%"}:null
        return <div style={style}>{text}</div>
    }
    const {columns,data}=props
    columns[0].render=func;
    return <Table columns={columns} dataSource={data}/>
}