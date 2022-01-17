import React from "react";
import PropTypes from "prop-types";
import LaunchItem from "./LaunchItem";

function Results({ rows }) {
  const items = rows.map((row) => (
    <LaunchItem key={row.mission_name} row={row} />
  ));
  return (
    <ul className="divide-y divide-gray-200 h-full md:h-96 overflow-scroll">
      {items}
    </ul>
  );
}

Results.propTypes = {
  rows: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Results;
