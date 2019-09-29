import React from 'react'
import { Modal, Button,InputNumber} from 'antd'



export default class Budget extends React.Component {
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
    console.log(this.state.budget)
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };
  handleChanage=value=>{
      this.props({budget:value})
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
          <InputNumber size="large" min={1} max={100000} defaultValue={3}  onChange={this.handleChanage} />
        </Modal>
      </div>
    );
  }
}
