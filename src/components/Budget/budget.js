import React,{useState} from 'react'
import { Modal, Button,InputNumber} from 'antd'
import {CHANGE_BUDGET} from '../../redux/actions/actions_type'
import {useDispatch} from 'react-redux'

//用modal来输入budget
const Budget=(props)=>{
  const [visible, setVisible]=useState(false)
  const [cancel,setCancel]=useState(false)
  const [change,setChange]=useState("")
  const dispatch=useDispatch()
  const handleOK=()=>{
    setVisible(false);
   dispatch({type:CHANGE_BUDGET,data:change})
  }
  const handleChanage=(e)=>{
    setChange(e.target.value)
  }
  return (<React.Fragment>
    <Button type="primary" onClick={setVisible(true)}>
          Change Budget
        </Button>
        <Modal
          title="please enter your budget"
          visible={setVisible(!visible)}
          onOk={handleOK}
          onCancel={setCancel(false)}
        >
          <InputNumber size="large" min={1} max={100000} defaultValue={0}  onChange={handleChanage} />
        </Modal>
  </React.Fragment>)
}
export default Budget;

//  class Budget extends React.Component {
//   state = { visible: false,sured:false,
//     budget:0
//     };

//   showModal = () => {
//     this.setState({
//       visible: true,
//     });
//   };
  
      
//   handleOk = e => {
//     this.setState({
//       visible: false,sured:true
//     });
//     this.props.change_budget(this.state.budget)
//   };

//   handleCancel = e => {
    
//     this.setState({
//       visible: false,
//     });
//   };
//   handleChanage=budget=>{
//       this.setState({budget})
//   }

  
//   render() {
//     return (
//       <div>
        
//       </div>
//     );
//   }
// }

// Budget=connect(null,{change_budget})(Budget);
// export default withRouter(Budget)
