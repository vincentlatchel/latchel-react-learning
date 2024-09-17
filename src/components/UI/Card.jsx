import React from "react";
import PropTypes from "prop-types";

function CardTitle({ title }) {
  return <div className="px-4 py-5 sm:px-6 font-semibold">{title}</div>;
}

function Card(props) {
  const { title, children } = props;
  return (
    <div className="bg-white overflow-hidden shadow rounded-lg divide-y divide-gray-200">
      {title && <CardTitle title={title} />}
      <div className="px-2 py-5 sm:p-4">{children}</div>
    </div>
  );
}

CardTitle.propTypes = {
  title: PropTypes.string.isRequired,
};
Card.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Card;
