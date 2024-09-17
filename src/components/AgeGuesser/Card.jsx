import Card from "components/UI/Card";
import SearchInput from "components/UI/Input";
import React from "react";
import isEmpty from "lodash/isEmpty";
import Result from "./Result";

class AgeGuesser extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "", result: {} };
    this.onSetValue = this.onSetValue.bind(this);
  }

  async onSetValue({ target: { value: term } }) {
    this.setState({ value: term });

    const { value } = this.state;
    if (value.length > 0) {
      await this.getResult();
    } else {
      this.setState({ value: "", result: {} });
    }
  }

  async getResult() {
    try {
      const { value } = this.state;
      const response = await fetch(`https://api.agify.io/?name=${value}`);
      const result = await response.json();
      this.setState({ result });
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error(e);
    }
  }

  hasResult() {
    const { result } = this.state;
    return !isEmpty(result);
  }

  render() {
    const { value, result } = this.state;
    return (
      <Card title="Age Guesser">
        <form onSubmit={(e) => e.preventDefault()} autoComplete="off">
          <SearchInput value={value} onChangeValue={this.onSetValue} />
        </form>
        {this.hasResult() && <Result result={result} name={value} />}
      </Card>
    );
  }
}

export default AgeGuesser;
