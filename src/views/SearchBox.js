import { Component } from "react";

class SearchBox extends Component {
  state = {
    inputValue: "",
  };

  handleChange = (event) => {
    const value = event.target.value;

    this.setState({ inputValue: value });
    this.props.onChange(value);
    sendAnalyticsPing(value);
  };

  render() {
    const { inputValue } = this.state;

    return (
      <div className="clearfix">
        <input
          type="text"
          className="input"
          value={inputValue}
          onChange={this.handleChange}
          placeholder="Filter 🔍"
        />
      </div>
    );
  }
}
