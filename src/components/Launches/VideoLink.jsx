import React from "react";
import PropTypes from "prop-types";

function VideoLink({ link }) {
  return (
    <a href={link} target="_blank" title="Watch Video" rel="noreferrer">
      🎥
    </a>
  );
}

VideoLink.propTypes = {
  link: PropTypes.string.isRequired,
};

export default VideoLink;
