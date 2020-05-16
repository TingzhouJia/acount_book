import React, { useState, useReducer, useCallback, useEffect } from 'react'
import { Form, Input, Button, DatePicker, message, Select } from 'antd'
import { outgoingList, incomeList } from '../Utils/utils'
import { Icons } from '../../iconRes/icons';

import './information.css'
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';

const {  RangePicker } = DatePicker;
interface Choice {
  choice: number
}
interface PriceValue {
  num?: number,
  duration?: 'monthly' | 'weekly' | 'seasonly'
}
interface PriceValueProps {
  value: PriceValue,
  onChange: (value: PriceValue) => void
}
const { Option } = Select
const Information = (props: Choice) => {


  const AccountForm = () => {
    return (
      <div className="account_form">

      </div>
    )
  }

  const UtilityForm = () => {
    const [number, setNumber] = useState(0);
    const [duration, setDuration] = useState('monthly');
    const formItemLayout = {
      labelCol: {
        xs: { span: 40 },
        sm: { span: 40 },
      },
      wrapperCol: {
        xs: { span: 40 },
        sm: { span: 40 },
      },
    };
    const formItemLayoutWithOutLabel = {
      wrapperCol: {
        xs: { span: 40, offset: 0 },
        sm: { span: 40, offset: 0 },
      },
    };

    return (
      <Form form={form} style={{padding:"1vw"}} onFinish={(values)=>console.log(values)} >
        <div className="utilities_form">
        <div style={{paddingRight:"2vw"}}>
          <span>Utilities Information</span>
          <Form.Item label="Utilities Official Name" name="offical_name" rules={[
            {
              required: true,
              message: 'Please input the offical name!',
            }]}>
            <Input />
          </Form.Item>
          <Form.Item name="remark_name" label="Utilities Remark Name">
            <Input />
          </Form.Item>
          <Form.Item name="payment" label="Utilities Payment " rules={[{ required: true, message: 'Please provide statement value' }]}>
            <span>
              <Input
                type="number"
                placeholder="payment"

                style={{ width: 100 }}
              />
              <Select
                placeholder="select duration"
                style={{ width: 150, margin: '0 8px' }}

              >
                <Option value="monthly">Monthly</Option>
                <Option value="seasonly">Seasonly</Option>
                <Option value="weekly">Weekly</Option>
              </Select>
            </span>
          </Form.Item>
          <Form.Item name="range-picker" label="RangePicker" rules={[{ type: 'array', required: true, message: 'Please select time!' }]}>
            <RangePicker />
          </Form.Item>
        </div>
        <div>
          <span>User Information</span>
          <Form.List name="names">
        {(fields, { add, remove }) => {
          return (
            <div>
              {fields.map((field, index) => (
                <Form.Item
                  {...(index === 0 ? formItemLayout : formItemLayoutWithOutLabel)}
                  label={index === 0 ? 'Primary Contact' : 'Candidate Contact'}
                  required={false}
                  key={field.key}
                >
                  <Form.Item
                    {...field}
                    validateTrigger={['onChange', 'onBlur']}
                    rules={[
                      {
                        required: true,
                        whitespace: true,
                        message: "Please input contact's name or delete this field.",
                      },
                    ]}
                    noStyle
                  >
                    <Input placeholder="contact name" style={{ width: '80%' }} />
                  </Form.Item>
                 
                  {fields.length > 1 ? (
                    <MinusCircleOutlined
                      className="dynamic-delete-button"
                      style={{ margin: '0 8px' }}
                      onClick={() => {
                        remove(field.name);
                      }}
                    />
                  ) : null}
                </Form.Item>
              ))}
              <Form.Item>
                <Button
                  type="dashed"
                  onClick={() => {
                    add();
                  }}
                  style={{ width: '100%' }}
                >
                  <PlusOutlined /> Add field
                </Button>
              </Form.Item>
            </div>
          );
        }}
      </Form.List>

        </div>
        </div>
        <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
      </Form>
    )
  }
  //   const [state,innerdispatch]=useReducer(reducer,init)
  //   const [change,setChange]=useState(false)
  //   const [clean,setClean]=useState<string>('')
  const [form] = Form.useForm();

  //   const dispatch=useDispatch()

  //   const getInfo=useCallback((event:React.FormEvent<HTMLInputElement>):void=>{
  //     setChange(false)
  //     const description=event.currentTarget.value
  //     innerdispatch({type:'discription',data:description})
  // },[state.Description])

  //   const handleNumberChange=useCallback((event)=>{
  //       setChange(false)
  //       const price=(event.target.value)/1
  //       innerdispatch({type:'price',data:price})
  //   },[state.price])
  //   const getDate=useCallback((date,dateString)=>{
  //     innerdispatch({type:'date',data:dateString})
  //  },[state.date])



  //   const set=useCallback((key)=>{
  //     innerdispatch({type:'type',data:key})
  //     setChange(true)
  //     setClean('')
  // },[state.type])

  //   const getType=useCallback((event)=>{
  //     const type=event.target.value

  //    innerdispatch({type:'icon',data:type})   
  // },[state.icon])


  return (
    <div className="normal_info">
      <UtilityForm />
    </div>)

}

{/* // Information=connect(null,{add_info,changeIncome,changeOutgoings})(Information) */ }
export default Information