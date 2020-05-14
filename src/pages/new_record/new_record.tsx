import React, { useState } from "react";
import Information from "../../components/inputForm/Information";
import { Drawer, Tabs, Steps, Button, message } from "antd";
import {} from '@ant-design/icons'
import "./newrecord.css";


const { Step } = Steps;

const steps = [
  {
    title: 'Service Selection',
    content: <Information/>,
  },
  {
    title: 'Second',
    content: 'Second-content',
  },
  {
    title: 'Last',
    content: 'Last-content',
  },
];

//添加新记录的组件
const NewRecord:React.FC = () => {

  const [curStep, setcurStep] = useState(0)
  const nextStep=()=>{
    setcurStep((prev)=>prev+1)
  }
  const prevStep=()=>{
    setcurStep((prev)=>prev-1)
  }
  return (
    <div className="new_record" style={{ padding: "1vw" }}>
         <Steps current={curStep} onChange={(current)=>setcurStep(current)}>
          {steps.map(item => (
            <Step key={item.title} title={item.title}  />
          ))}
        </Steps>
        <div className="new_record_service_contenr">
          { steps[curStep].content}
        </div>
        <div>
        {curStep < steps.length - 1 && (
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
