import Card from "components/UI/Card";
import SearchInput from "components/UI/Input";
import Result from "./Result";
import React from "react";
import isEmpty from "lodash/isEmpty";

class AgeGuesser extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "", result: {} };
    this.hasResult = () => !isEmpty(this.state.result);
  }
  async getResult() {
    try {
      const response = await fetch(
        `https://api.agify.io/?name=${this.state.value}`
      );
      const result = await response.json();
      this.setState({ result });
    } catch (e) {
      console.error(e);
    }
  }
  async onSetValue(value) {
    this.setState({ value });
    if (this.state.value.length > 0) {
      await this.getResult();
    } else {
      this.setState({ value: "", result: {} });
    }
  }
  render() {
    return (
      <Card title="Age Guesser">
        <form onSubmit={(e) => e.preventDefault()} autoComplete="off">
          <SearchInput onChangeValue={this.onSetValue.bind(this)} />
        </form>
        {this.hasResult() && (
          <Result result={this.state.result} name={this.state.value} />
        )}
      </Card>
    );
  }
}

export default AgeGuesser;
