import React from 'react';

export default class KeyField extends React.Component {

  constructor(props) {
    super(props);
	
    this.state = {value: props.keyList[0]};
	this.tmp = props;

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }
  
  

  handleSubmit(event) {
    alert('Search remains unimplemented, but you selected: ' + this.state.value);
    event.preventDefault();
  }

  render() {

    
	var MakeList = function(key) {
		return <option>{key}</option>;
	};
	
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Pick a field to search for:
          <select value={this.state.value} onChange={this.handleChange}>
			  {this.props.keyList.map(MakeList)}
          </select>
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  } 
}