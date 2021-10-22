import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Card, Form, Radio } from 'semantic-ui-react';

// Controlled component. Input component is controlled by the state and user's ability to change that state by interacting with rendered radio buttons
class RadioButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedOption: props.options[0].value
    }
  }

  handleChange = (e, { value }) => this.setState({ selectedOption: value })

  render() {
    const { selectedOption } = this.state

    return (
      <Form onSubmit={(e) => this.props.handleSubmit(e, selectedOption)}>
        {this.props.options.map((option) => (
          <Form.Field>
            <Radio
              label={option.label}
              value={option.value}
              checked={this.state.selectedOption === option.value}
              onChange={this.handleChange}
            />
          </Form.Field>
        ))}
        <button className="btn" type="submit">Submit</button>
      </Form>
    )
    // return(
    //         <form className="ui form">
    //           <div className='field'>
                // {this.props.options.map((option) => (
                //   <div className='ui radio checkbox' key={option.text}>
                //     <input type='radio'  name='radioGroup' value={option.text} checked={this.state.selectedOption === option.text}/>
                //     <label>{option.text}</label> 
                //   </div>
                // ))}
    //             <button className="btn">Submit</button>
    //           </div>
    //         </form>

    // )
  }
}

export default RadioButton