import { Component } from "react";

class Test extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    console.log("constructure");
  }
  static getDerivedStateFromProps() {
    console.log("getDerivedStateFromProps");
  }
  getSnapshotBeforeUpdate() {
    console.log("getSnapshotBeforeUpdate");
    return null;
  }

  componentDidUpdate() {
    console.log("componentDidUpdate");
  }
  componentWillUnmount() {
    console.log("componentWillUnmount");
  }
  componentDidMount() {
    setTimeout(() => {
      this.sleep(2000);
      this.setState({
        count: 12345,
      });
    }, 1000);
  }
  sleep(time) {
    let now = Date.now();
    while (true) {
      if (Date.now() - now > time) {
        return;
      }
    }
  }
  handleClick = () => {
    this.setState({
      count: ++this.state.count,
    });
  };
  clickToSleep = () => {
    this.sleep(5000);
  };
  render() {
    return (
      <>
        <span style={{ color: "#f0f" }}>{this.state.count}</span>

        <button onClick={this.handleClick}>Click</button>
        <button onClick={this.clickToSleep}>Sleep</button>
      </>
    );
  }
}
export default Test;
