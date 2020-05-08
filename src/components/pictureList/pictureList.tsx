import React, { useEffect } from 'react'
import { Table,Select,Divider, Input,Button,Tag, Pagination} from 'antd';

import PropTypes from 'prop-types'
import {useDispatch, useSelector} from 'react-redux'
import {Icons} from '../../iconRes/icons'
import './picList.css'
import { RootState } from 'redux/store';
import { fetchTransactionList } from 'redux/reducer/plaidReducer';
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


const PicList:React.FC=()=>{

    const dispatch=useDispatch()
    const {plaidLoading,transactionList}=useSelector((state:RootState)=>state.plaid)
    useEffect(() => {
      if(!transactionList){
        dispatch(fetchTransactionList())
      }
      
    }, [])
    // const onDeleteItem=(id:number)=>{
       
    //     const {price,tags}=props.Infos[id]
        
    //     if(tags.indexOf('Outgoings')!=-1){
    //       dispatch({type:DELETE_OUTGOINGS,data:price})
    //     }else{
    //       dispatch({type:DELETE_INCOME,data:price})
    //     }
    //     dispatch({type:DELETE_INFO,data:id})
    // }
    
  
        
    //   const items=props.Infos
      const columns = [
        //   {title:'Icon',
        //     dataIndex:'icon',
        //     key:'icon',
        //     render:(icon)=>
        //          (<Icons type={'icon-'+icon} style={{ fontSize: '30px', color: 'black' }}/>)
            
        // },
        // {
        //   title:"transaction_id",
        //   dataIndex:"transaction_id",
        //   key:"id"
        // },
        {
          title: 'Payment ',
          dataIndex: 'name',
          key: 'name',
          width:"20%"
        },
        {
          title: 'Payment Type ',
          dataIndex: 'payment_channel',
          key: 'payment_channel',
        },
        {
          title: 'Amount',
          dataIndex: 'amount',
          key: 'amount',
        },
        {
          title: 'Date',
          dataIndex: 'date',
          key: 'date',
        },
        {
            title: 'Tags',
            key: 'category',
            dataIndex: 'category',
            render: (tags:string[]) => (
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
            render: (id:string) => (
              <span>
                <Button icon='edit' ></Button>
                <Divider type="vertical" />
                <Button  >details</Button>
              
              </span>
            )
          }
      ];

    return (  
         <div className='payment_table'>
           <div className="payment_table_choice">
             
              <span style={{fontWeight:800,marginRight:"2vw",fontSize:"2rem",paddingLeft:"1vw"}}>PAYMENTS</span>
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
           <Table className="payment_content"  rowSelection={rowSelection} dataSource={transactionList?.transactions} columns={columns} rowKey="id" />
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
