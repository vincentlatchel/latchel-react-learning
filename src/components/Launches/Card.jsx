import Card from "components/UI/Card";
import React from "react";
import Loading from "./Loading";
import Results from "./Results";

class Launches extends React.Component {
  constructor(props) {
    super(props);
    this.state = { result: {}, loading: true };
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
      // eslint-disable-next-line no-console
      console.error(e);
    }
  }

  render() {
    const { loading, result } = this.state;
    return (
      <Card title="Launches">
        {loading ? <Loading /> : <Results rows={result} />}
      </Card>
    );
  }
}

export default Launches;
