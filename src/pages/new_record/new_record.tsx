import React, { useState } from "react";
import Information from "../../components/inputForm/Information";
import {  Steps, Button, message } from "antd";
import {} from '@ant-design/icons'
import "./newrecord.css";
import ChoiceBar from "components/inputForm/choiceBar";


const { Step } = Steps;
const infoList=[{content:'Add new bank account for you',hint:'you need authorize plaid client to access your bank account'},
  {content:'Add utilities to your account',hint:'this utility statement can be setup as either private or public'},
  {content:'Add user in your group Or create a group',hint:'you can invite user in your group or create a group '}]


//添加新记录的组件
const NewRecord:React.FC = () => {
  const [formChoice, setFormChoice] = useState(0)
  const steps = [
    {
      title: 'Service Selection',
      content:  <div className="record_select_choice">
      <ChoiceBar content={infoList} callback={(index:number)=>setFormChoice(index)}/>
    </div>,
    },
    {
      title: 'Register Information',
    content: <Information choice={0} submit={()=>nextStep()}/>,
    },
    {
      title: 'Last',
      content: 'Last-content',
    },
  ];
  const [curStep, setcurStep] = useState(0)
  const nextStep=()=>{
    setcurStep((prev)=>prev+1)
  }
  const prevStep=()=>{
    setcurStep((prev)=>prev-1)
  }
  return (
    <div className="new_record" style={{ padding: "1vw" }}>
         <Steps current={curStep}>
          {steps.map(item => (
            <Step key={item.title} title={item.title}  />
          ))}
        </Steps>
        <div className="new_record_service_contenr">
          { steps[curStep].content}
        </div>
        <div>
        {curStep ==0 && (
            <Button type="primary" onClick={()=>nextStep()}>
              Next
            </Button>
          )}
          {curStep === steps.length - 1 && (
            <Button type="primary" onClick={() => message.success('Processing complete!')}>
              Done
            </Button>
          )}
          {curStep > 0 && (
            <Button style={{ margin: '0 8px' }} onClick={() => prevStep()}>
              Previous
            </Button>
          )}
        </div>
    </div>
  );
};

export default NewRecord;
