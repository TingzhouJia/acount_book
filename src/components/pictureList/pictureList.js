import React from 'react'
import { Table,  Button,Divider ,Tag} from 'antd';
import {edit_info,delete_info,deleteIncome,deleteOutgoings,changeIncome,changeOutgoings} from '../../redux/actions/actions'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Icons} from '../../iconRes/icons'
// const items=[
//     {id:1,Description:' take trip in Ottawa',
//     price:2000,date:'2018-09-18',tags:['travel','outcome']},
//     {id:2,Description:' take trip in Toronto',
//     price:4000,date:'2018-09-18',tags:['travel','outcome']},
//     {id:3,Description:' kkkkkk',
//     price:2000,date:'2018-09-18',tags:['travel','outcome']}
//   ]
class PicList extends React.Component {
    // state={
    //     items:[
    //     {id:1,icon:'icon-lvxing',Description:' take trip in Ottawa',price:2000,date:'2018-09-18',tags:['travel','outcome']},
    //     {id:2,icon:"icon-chifan",Description:' take trip in Toronto',
    //     price:4000,date:'2018-09-18',tags:['travel','outcome']},
    //     {id:3,icon:"icon-riyong",Description:' kkkkkk',
    //     price:2000,date:'2018-09-18',tags:['travel','outcome']}
      
    // ]
    // }
    onModifyItem=(id)=>{
        alert(id)
    }
    onDeleteItem=(id)=>{
        this.props.delete_info(id)
        const {price,tags}=this.props.Infos[id]
        alert(price,typeof price)
        if(tags.indexOf('Outgoings')!=-1){
          this.props.deleteOutgoings(price)
        }else{
          this.props.deleteIncome(price)
        }
    }
    
  render() {
        
      const items=this.props.Infos
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
                <Button icon='edit' onClick={this.onModifyItem.bind(this,id)} onChange=''></Button>
                <Divider type="vertical" />
                <Button icon='delete' onClick={this.onDeleteItem.bind(this,id)}></Button>
                {/*     用箭头函数和bind方法绑定传值是等价的 */}
              </span>
            )
          }
      ];

    return (  
          <Table dataSource={items} columns={columns} />
    )
        }
}
PicList.propTypes={
    Infos:PropTypes.array.isRequired
}

const mapStateProps=state=>({
  Infos:state.Details
})

export default PicList=connect(mapStateProps,{delete_info,changeIncome,changeOutgoings,deleteIncome,deleteOutgoings})(PicList)
