import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { handleAddQuestion } from '../../actions/questions';
import TextField from '../TextField';
import { unCapitalizeFirstLetter }from '../../utils/helpers';
import CustomButton from '../CustomButton'

// Controlled component meaning React is going to be in control of the text of the input fields
// This is because we will need to update the ui based on the state of the component
// We're managing the state here instead of in redux because it is not a shared state
class NewQuestion extends Component {
  state = {
    option1: '',
    option2: '',
    toHome: false,
  };

  setOption1Value = (text) => {
    this.setState({
      option1: text,
    });
  };

  setOption2Value = (text) => {
    this.setState({
      option2: text,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const { option1, option2 } = this.state;
    const {dispatch } = this.props;

    dispatch(handleAddQuestion(unCapitalizeFirstLetter(option1), unCapitalizeFirstLetter(option2)))
    this.setState(() => ({ 
      option1: '', 
      option2: 'bb', 
      toHome: true
    }));
  };

  render() {
    const { option1, option2, toHome } = this.state;
    console.log('renderrrrr state: ',this.state)
    if (toHome === true) {
       return <Redirect to='/' />
    }
    return (
      <div className="card">
        <h4>Please complete the question below</h4>
        <h3 className="center">Would you rather ...</h3>
        <form className="new-question" onSubmit={this.handleSubmit}>
          <TextField
            hintText="Enter Option One Text"
            onHandleChange={this.setOption1Value}
          />
          <h4 className="center">OR</h4>
          <TextField
            hintText="Enter Option Two Text"
            onHandleChange={this.setOption2Value}
          />
          <p></p>
          <CustomButton 
            title="Submit" 
            isDisabled={option1 === '' || option2 === ''} 
          />
        </form>
      </div>
    );
  }
}

export default connect()(NewQuestion);
