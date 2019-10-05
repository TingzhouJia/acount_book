import React from 'react'
import { Modal, Button,InputNumber} from 'antd'
import {change_budget} from '../../redux/actions/actions'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
//用modal来输入budget

 class Budget extends React.Component {
  state = { visible: false,sured:false,
    budget:0
    };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };
  
      
  handleOk = e => {
    this.setState({
      visible: false,sured:true
    });
    this.props.change_budget(this.state.budget)
  };

  handleCancel = e => {
    
    this.setState({
      visible: false,
    });
  };
  handleChanage=budget=>{
      this.setState({budget})
  }

  
  render() {
    return (
      <div>
        <Button type="primary" onClick={this.showModal}>
          Change Budget
        </Button>
        <Modal
          title="please enter your budget"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <InputNumber size="large" min={1} max={100000} defaultValue={0}  onChange={this.handleChanage} />
        </Modal>
      </div>
    );
  }
}

Budget=connect(null,{change_budget})(Budget);
export default withRouter(Budget)
