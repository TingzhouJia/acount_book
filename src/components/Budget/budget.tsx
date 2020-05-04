import React,{useState} from 'react'
import { Modal, Button,InputNumber, Input} from 'antd'
import {CHANGE_BUDGET} from '../../redux/actions/actions_type'
import {useDispatch} from 'react-redux'

//用modal来输入budget
const Budget : React.FC=()=>{
  const [visible, setVisible]=useState<boolean>(false)
  const [cancel,setCancel]=useState<boolean|void>(false)
  const [change,setChange]=useState("")
  const dispatch=useDispatch()
  const handleOK=()=>{
    setVisible(false);
   dispatch({type:CHANGE_BUDGET,data:change})
  }
  const handleChanage=(e:React.FormEvent<HTMLInputElement>)=>{
    setChange(e.currentTarget.value)
  }
  return (<React.Fragment>
    <Button type="primary" onClick={()=>setVisible(true)}>
          Change Budget
        </Button>
        <Modal
          title="please enter your budget"
          visible={visible}
          onOk={handleOK}
          onCancel={()=>setCancel(false)}
        >
          <InputNumber size="large" min={1} max={100000} defaultValue={0}  onChange={()=>handleChanage} />
        </Modal>
  </React.Fragment>)
}
export default Budget;


