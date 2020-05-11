import React, { useEffect, useState, useCallback } from 'react'
import { Table, Select, Divider, Input, Button, Tag, Drawer } from 'antd';


import { useDispatch, useSelector } from 'react-redux'
import './picList.css'
import { RootState } from 'redux/store';
import { fetchTransactionList } from 'redux/reducer/plaidReducer';
import { LineChartOutlined, RightOutlined, CalendarOutlined, TagsOutlined } from '@ant-design/icons';
import { TransactionEach } from 'redux/model/transaction';
const { Option } = Select


const PicList: React.FC = () => {

  const dispatch = useDispatch()
  const { plaidLoading, transactionList } = useSelector((state: RootState) => state.plaid)
  const [Visible, setVisible] = useState(false)
  const [curModel, setcurModel] = useState<TransactionEach | undefined>(undefined)
  const ColorList = ['volcano', 'orange', 'green', 'blue', 'magenta', 'lime', '#f50'];
  useEffect(() => {
    if (!transactionList) {
      dispatch(fetchTransactionList())
    }

  }, [])

  const setModelUp=useCallback(
    (id:TransactionEach) => {
      console.log(id)
      setcurModel(id)
      setVisible(!Visible)
    },
    [curModel,Visible],
  )

  const columns = [
   
    {
      title: 'Payment ',
      dataIndex: 'name',
      key: 'name',
      width: "20%"
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
      render: (tags: string[]) => (
        <span>
          {tags.map(tag => {
            let color = ColorList[tag.length % ColorList.length]
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
      render: (id: TransactionEach) => (
       
        <span>
          <Button >edit</Button>
          <Divider type="vertical" />
          <Button onClick={()=>setModelUp(id)} >details</Button>

        </span>
      )
    }
  ];

  return (
    <div className='payment_table'>
      <div className="payment_table_choice">

        <span style={{ fontWeight: 800, marginRight: "2vw", fontSize: "2rem", paddingLeft: "1vw" }}>Payments</span>
        <span className='payment_p'>All</span>
        <span className='payment_p'>FixedCharge</span>
        <span className='payment_p'>Income</span>
        <span className='payment_p'>Cost</span>

        <span className="choice_right">
          <LineChartOutlined />
                 Analytics
                 <RightOutlined />
        </span>
      </div>
      <div className="paymenta_table_border">
        <div className="payment_content_filter">
          <div className="payment_option">
            <div className="payment_option_span">
            <CalendarOutlined />
                 DATE</div>
            <Select defaultValue="LAST WEEK" style={{width:200}} className="payment_select" onChange={() => { }}>
              <Option value="TWO_WEEK">RECENT 2 WEEKS</Option>
              <Option value="MONTH">LAST MONTH</Option>
              <Option value="SEASON" >
                THIS SEASON
                </Option>
            </Select>
          </div>
          <div className="payment_option">
            <div className="payment_option_span">
            <TagsOutlined />
            TYPE</div>
            <Select defaultValue="LAST WEEK" style={{width:200}} className="payment_select" onChange={() => { }}>
              <Option value="TWO_WEEK">RECENT 2 WEEKS</Option>
              <Option value="MONTH">LAST MONTH</Option>
              <Option value="SEASON" >
                THIS SEASON
                </Option>
            </Select>
          </div>
          <Input placeholder="Search" className="payment_search" style={{ width: "20vw" }} />
        </div>
        <Table className="payment_content" loading={plaidLoading} dataSource={transactionList?.transactions} columns={columns} rowKey="account_id" />
      </div>
      <Drawer width={'40vw'} placement="right" visible={Visible} closable={false} onClose={()=>setVisible(!Visible)}>
  <span>{curModel?.account_id}</span>
      </Drawer>
    </div>
  )
}



// const mapStateProps=state=>({
//   Infos:state.Details
// })

export default PicList
