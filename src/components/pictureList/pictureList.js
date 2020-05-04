import React from 'react'
import { Table,Select,Divider, Input,Button,Tag} from 'antd';
import {edit_info,DELETE_INFO,DELETE_INCOME,DELETE_OUTGOINGS,changeIncome,changeOutgoings} from '../../redux/actions/actions_type'
import PropTypes from 'prop-types'
import {useDispatch} from 'react-redux'
import {Icons} from '../../iconRes/icons'
import './picList.css'
const {Option}=Select
const rowSelection = {
  
  onChange: ()=>{},
  hideDefaultSelections: true,
  selections: [
    {
      key: 'all-data',
      text: 'Select All Data',
      onSelect: () => {
       
      },
    },
    {
      key: 'odd',
      text: 'Select Odd Row',
      onSelect: ()=>{}
    },
    {
      key: 'even',
      text: 'Select Even Row',
      onSelect: ()=>{}
      },
  
  ],
};
const PicList=(props)=>{

    const dispatch=useDispatch()
    const onDeleteItem=(id)=>{
       
        const {price,tags}=props.Infos[id]
        
        if(tags.indexOf('Outgoings')!=-1){
          dispatch({type:DELETE_OUTGOINGS,data:price})
        }else{
          dispatch({type:DELETE_INCOME,data:price})
        }
        dispatch({type:DELETE_INFO,data:id})
    }
    
  
        
      const items=props.Infos
      const columns = [
          {title:'Icon',
            dataIndex:'icon',
            key:'icon',
            render:(icon)=>
                 (<Icons type={'icon-'+icon} style={{ fontSize: '30px', color: 'black' }}/>)
            
        },
        {
          title:"ID",
          dataIndex:"id",
          key:"id"
        },
        {
          title: 'Payment Details',
          dataIndex: 'Description',
          key: 'Description',
        },
        {
          title: 'Amount',
          dataIndex: 'price',
          key: 'price',
        },
        {
          title: 'Date',
          dataIndex: 'date',
          key: 'date',
        },
        {
            title: 'Tags',
            key: 'tags',
            dataIndex: 'tags',
            render: tags => (
              <span>
                {tags.map(tag => {
                  let color = tag.length > 5 ? 'geekblue' : 'green';
                  if (tag === 'Outgoings') {
                    color = 'volcano';
                  }
                  return (
                    <Tag color={color} key={tag}>
                      {tag.toUpperCase()}
                    </Tag>
                  );
                })}
              </span>
            ),
          },
          {
            title: 'Action',
            key: 'action',
            render: (text, record,id) => (
              <span>
                <Button icon='edit' ></Button>
                <Divider type="vertical" />
                <Button icon='delete' onClick={onDeleteItem.bind(this,id)}></Button>
                {/*     用箭头函数和bind方法绑定传值是等价的 */}
              </span>
            )
          }
      ];

    return (  
         <div className='payment_table'>
           <div className="payment_table_choice">
             
              <span style={{fontWeight:"800",marginRight:"2vw",fontSize:"2rem",paddingLeft:"1vw"}}>PAYMENTS</span>
              <span className='payment_p'>All</span>
              <span className='payment_p'>FixedCharge</span>
              <span className='payment_p'>Income</span>
              <span className='payment_p'>Cost</span>
             
              <span className="choice_right">
                {/* <Icon type="line-chart" style={{paddingRight:"1vw"}}/> */}
                 Analytics 
              {/* <Icon type="right" style={{paddingRight:"1vw",paddingLeft:"1vw"}} /> */}
              </span>
           </div>
           <div className="paymenta_table_border">
             <div className="payment_content_filter">
               <div className="payment_option"> 
               <span className="payment_option_span">
                 {/* <Icon type="calendar" /> */}
                 DATE</span>
             <Select defaultValue="LAST WEEK" className="payment_select" onChange={()=>{}}>
                  <Option value="TWO_WEEK">RECENT 2 WEEKS</Option>
                  <Option value="MONTH">LAST MONTH</Option>
                 <Option value="SEASON" >
                    THIS SEASON
                </Option>
         </Select>
               </div>
          <div className="payment_option">
          <span className="payment_option_span">
            {/* <Icon type="tag" /> */}
            TYPE</span>
         <Select defaultValue="LAST WEEK" className="payment_select" onChange={()=>{}}>
                  <Option value="TWO_WEEK">RECENT 2 WEEKS</Option>
                  <Option value="MONTH">LAST MONTH</Option>
                 <Option value="SEASON" >
                    THIS SEASON
                </Option>
         </Select>
          </div>
         <Input placeholder="Search" className="payment_search" style={{width:"20vw"}}/>
             </div>
           <Table className="payment_content"  rowSelection={rowSelection} dataSource={[]} columns={columns} rowKey="id" pagination={false}/>
           </div>
           
         </div>
    )
        }

PicList.propTypes={
    Infos:PropTypes.array.isRequired
}

// const mapStateProps=state=>({
//   Infos:state.Details
// })

export default PicList
