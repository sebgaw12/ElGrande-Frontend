import React, { Component } from 'react';

class RestaurantRegisterForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentStep: 'step1'
    };
  }

  nextStep = (current, next) => {
    console.log("NEXT");
    document.getElementById(current).classList.add('hidden');
    document.getElementById(next).classList.remove('hidden');
    this.setState({ currentStep: next });
  };
  

  prevStep = (current, prev) => {
    console.log("PREV");
    document.getElementById(current).classList.add('hidden');
    document.getElementById(prev).classList.remove('hidden');
    this.setState({ currentStep: prev });
  };

  
  render() {
    
    return (
        <div className="max-w-3xl mx-auto py-16">
        <div className="step relative" id="step1">
            <h2 className="text-2xl font-semibold mb-4">Restaurant info</h2>
            <form>
                <div className="mt-6">
                    <button className="btn-next" onClick={ () => this.nextStep('step1', 'step2') }>Next</button>
                </div>
            </form>
        </div>

        <div className="step hidden relative" id="step2">
            <h2 className="text-2xl font-semibold mb-4">Opening hours</h2>
            <form>
                <div className="mt-6">
                    <button className="btn-prev" onClick={ () => this.prevStep('step2', 'step1') }>Previous</button>
                    <button className="btn-next" onClick={ () => this.nextStep('step2', 'step3') }>Next</button>
                </div>
            </form>
        </div>
        <div className="step hidden relative" id="step3">
            <h2 className="text-2xl font-semibold mb-4">Review</h2>
            <form>
                <div className="mt-6">
                    <button className="btn-prev" onClick={ () => this.prevStep('step3', 'step2') }>Previous</button>
                    <button type="submit" className="btn-submit">Finish</button>
                </div>
            </form>
        </div>
    </div>
    );
  }
  
    
}

export default RestaurantRegisterForm;