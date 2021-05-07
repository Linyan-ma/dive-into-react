import * as React from "react";
import "./vender/fpsmeter.min";

export default class Description extends React.Component {
  fpsRef = React.createRef();

  componentDidMount() {
    const anchor = this.fpsRef.current;

    // eslint-disable-next-line no-undef
    const meter = new FPSMeter(anchor, {
      heat: true,
      graph: true,
    });

    function tick() {
      meter.tick();
      requestAnimationFrame(tick);
    }

    tick();
  }

  render() {
    return (
      <div className="marketing">
        <span>Synchronous</span>
        <div className="spacer" />
        <div ref={this.fpsRef} className="fps" />
      </div>
    );
  }
}
