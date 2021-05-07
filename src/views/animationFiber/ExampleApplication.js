class ExampleApplication extends React.Component {
  constructor() {
    super();
    this.state = { seconds: 0 };
    this.tick = this.tick.bind(this);
  }
  componentDidMount() {
    this.intervalID = setInterval(this.tick, 1000);
  }
  tick() {
    ReactDOMFiber.unstable_deferredUpdates(() =>
      this.setState((state) => ({ seconds: (state.seconds % 10) + 1 }))
    );
  }
  componentWillUnmount() {
    clearInterval(this.intervalID);
  }
  render() {
    const seconds = this.state.seconds;
    const elapsed = this.props.elapsed;
    const t = (elapsed / 1000) % 10;
    const scale = 1 + (t > 5 ? 10 - t : t) / 10;
    const transform =
      "scaleX(" + scale / 2.1 + ") scaleY(0.7) translateZ(0.1px)";
    return (
      <div style={{ ...containerStyle, transform }}>
        <div>
          <SierpinskiTriangle x={0} y={0} s={1000}>
            {this.state.seconds}
          </SierpinskiTriangle>
        </div>
      </div>
    );
  }
}
