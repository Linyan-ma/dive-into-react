import { Component } from "react";

class Test extends Component {
  constructor() {
    super();
    console.log("constructure");
  }
  getDerivedStateFromProps() {
    console.log("getDerivedStateFromProps");
  }
  getSnapshotBeforeUpdate() {
    console.log("getSnapshotBeforeUpdate");
  }
  componentDidMount() {
    console.log("componentDidMount");
  }
  componentDidUpdate() {
    console.log("componentDidUpdate");
  }
  componentWillUnmount() {
    console.log("componentWillUnmount");
  }
  handleClick() {
    this.setState({
      count: ++count,
    });
  }
  render() {
    return (
      <>
        <span style={{ color: "#f0f" }}>{this.state.count}</span>

        <button onClick={handleClick}>Click</button>
      </>
    );
  }
}
export default Test;
