import { NameList, sendAnalyticsPing } from "./helpers";
import { Component, useState, useTransition, useDeferredValue } from "react";
import ReactDOM from "react-dom";

import Header from "./Header";
import Description from "./Description";

import {
  unstable_next,
  unstable_LowPriority,
  unstable_runWithPriority,
  unstable_scheduleCallback,
} from "scheduler";

// import "./styles.css";

class App extends Component {
  state = {
    searchValue: "",
  };

  handleChange = (value) => {
    this.setState({ searchValue: value });
  };

  render() {
    const { searchValue } = this.state;

    return (
      <div className="App">
        <Header>ScheduleTron 3000</Header>
        <SearchBox2 onChange={this.handleChange} />
        <NameList searchValue={searchValue} />
        <Description />
      </div>
    );
  }
}

class SearchBox extends Component {
  state = {
    inputValue: "",
  };

  handleChange = (event) => {
    const value = event.target.value;
    const onChange = this.props.onChange;

    this.setState({ inputValue: value });
    unstable_next(function () {
      // sendAnalyticsPing(value);
    });
    sendDeferredAnalyticsNotification(value);
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

function SearchBox2(props) {
  const [inputValue, setInputValue] = useState("");
  const [startTransition, isPending] = useTransition({
    timeoutMs: 16,
  });

  const deferedValue = useDeferredValue(inputValue, {
    timeoutMs: 16,
  });
  const handleChange = (event) => {
    const value = event.target.value;
    const onChange = props.onChange;

    setInputValue(value);
    startTransition(() => {
      onChange(value);
      // sendAnalyticsPing(value);
    });
    sendAnalyticsPing(deferedValue);

    // sendDeferredAnalyticsNotification(value);
  };
  return (
    <div className="clearfix">
      <input
        type="text"
        className="input"
        value={inputValue}
        onChange={handleChange}
        placeholder="Filter 🔍"
      />
    </div>
  );
}
function sendDeferredAnalyticsNotification(value) {
  unstable_runWithPriority(unstable_LowPriority, function () {
    unstable_scheduleCallback(function () {
      sendAnalyticsPing(value);
    });
  });
}

export default App;
