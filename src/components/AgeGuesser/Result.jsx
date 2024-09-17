import React from "react";
import PropTypes from "prop-types";

function Result({ name, result: { age } }) {
  return (
    <div className={`mt-4 ${age ? "text-gray-600" : "text-red-600"}`}>
      {age ? `Age for ${name} is ${age}` : "Nothing found for that name"}
    </div>
  );
}

Result.propTypes = {
  name: PropTypes.string.isRequired,
  result: PropTypes.shape({
    age: PropTypes.number,
  }).isRequired,
};

export default Result;
