import Card from "components/UI/Card.jsx";
import React from "react";
import isEmpty from "lodash/isEmpty";
import Loading from "./Loading";
import Results from "./Results";

class Launches extends React.Component {
  constructor(props) {
    super(props);
    this.state = { result: {}, loading: true };
    this.hasResult = () => !isEmpty(this.state.result);
  }
  async componentDidMount() {
    await this.getLaunches();
  }
  async getLaunches() {
    try {
      const response = await fetch("https://api.spacexdata.com/v3/launches", {
        cache: "force-cache",
      });
      const result = await response.json();
      this.setState({ result: result.reverse(), loading: false });
    } catch (e) {
      console.error(e);
    }
  }
  render() {
    return (
      <Card title="Launches">
        {this.state.loading ? (
          <Loading />
        ) : (
          <Results rows={this.state.result} />
        )}
      </Card>
    );
  }
}

export default Launches;
