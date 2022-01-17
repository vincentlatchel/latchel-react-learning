import "./App.css";
import AgeGuesser from "components/AgeGuesser/Card";
import Launches from "components/Launches/Card";

function App() {
  return (
    <div className="h-screen bg-gray-200">
      <div className="flex flex-col md:flex-row justify-between space-y-2 md:space-y-0 md:space-x-4 pb-10 py-4 px-2 md:px-6">
        <div className="basis-6/12">
          <AgeGuesser />
        </div>
        <div className="basis-6/12">
          <Launches />
        </div>
      </div>
  </div>
  );
}

export default App;
