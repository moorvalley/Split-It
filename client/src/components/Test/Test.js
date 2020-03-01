import React from 'react';
import './Test.css'
import Step1 from './Step1'
import Step2EZ from './Step2EZ'
import Step3EZ from './Step3EZ'
import Step2Detailed from './Step2Detailed'

export default class Test extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        currentStep: 1,
        EZpeople: '',
        EZcost: '',
        EZtotal: '',
    };
  }

  nextStep = () => {
    const { currentStep } = this.state;
    this.setState({
      currentStep: currentStep + 1
    });
  };

  prevStep = () => {
    const { currentStep } = this.state;
    this.setState({
      currentStep: currentStep - 1
    });
  };

  nextJump = () => {
    const { currentStep } = this.state;
    this.setState({
      currentStep: currentStep + 1 + 100
    });
  };

  prevJump = () => {
    const { currentStep } = this.state;
    this.setState({
      currentStep: currentStep - 1 -100
    });
  };

  handleChange = input => e => {
    this.setState({ [input]: e.target.value });
  };

  changeEZTotal = (newTotal) => {
    this.setState({EZtotal: newTotal});
  }

  render() {
    const { currentStep } = this.state;
    const { EZpeople, EZcost, EZtotal } = this.state;
    const EzSplit = { EZpeople, EZcost, EZtotal }

    switch (currentStep){
      case 1:
        return(
          <div className = "container">
            <Step1
              nextStep = {this.nextStep}
              nextJump = {this.nextJump}
            />
          </div>
        );
      case 2:
        return(
          <div className = "container">
            <Step2EZ
              nextStep = {this.nextStep}
              prevStep={this.prevStep}
              changeEZTotal={this.changeEZTotal}
              handleChange={this.handleChange}
              EzSplit = {EzSplit}
            />
          </div>
        );
        case 3:
          return(
            <div className = "container">
              <Step3EZ
                prevStep={this.prevStep}
                handleChange={this.handleChange}
                EzSplit = {EzSplit}
              />
            </div>
          );
        case 102:
          return(
            <div className = "container">
              <Step2Detailed
                nextStep = {this.nextStep}
                prevJump={this.prevJump}
                handleChange={this.handleChange}
              />
            </div>
          );

    }
  }
}