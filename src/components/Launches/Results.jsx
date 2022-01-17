import LaunchItem from "./LaunchItem";

const Results = (props) => {
  const items = props.rows.map((row) => (
    <LaunchItem key={row.mission_name} row={row} />
  ));
  return (
    <ul className="divide-y divide-gray-200 h-full md:h-96 overflow-scroll">
      {items}
    </ul>
  );
};

export default Results;
