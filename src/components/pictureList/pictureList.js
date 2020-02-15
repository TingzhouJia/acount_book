import React from 'react'
import { Table,  Button,Divider ,Tag} from 'antd';
import {edit_info,DELETE_INFO,DELETE_INCOME,DELETE_OUTGOINGS,changeIncome,changeOutgoings} from '../../redux/actions/actions_type'
import PropTypes from 'prop-types'
import {useDispatch} from 'react-redux'
import {Icons} from '../../iconRes/icons'
import './picList.css'
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
          {title:'',
            dataIndex:'icon',
            key:'icon',
            render:(icon)=>
                 (<Icons type={'icon-'+icon} style={{ fontSize: '30px', color: 'black' }}/>)
            
        },
        {
          title: 'Description',
          dataIndex: 'Description',
          key: 'Description',
        },
        {
          title: 'price',
          dataIndex: 'price',
          key: 'price',
        },
        {
          title: 'date',
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
              <h1 style={{fontWeight:"800",marginRight:"2vw",fontSize:"2rem",paddingLeft:"1vw"}}>PAYMENTS</h1>
              <p className='payment_p'>All</p>
              <p className='payment_p'>Fixed</p>

           </div>
            <Table className="payment_content" dataSource={items} columns={columns} rowKey="id" />
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
