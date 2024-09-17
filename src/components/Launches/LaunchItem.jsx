import React from "react";
import dayjs from "utils/date";
import PropTypes from "prop-types";
import VideoLink from "./VideoLink";

function Item({ row }) {
  const formattedDate = dayjs(row.launch_date_local).fromNow();
  const hasVideo = row.links?.video_link || undefined;
  let icon = row.launch_success ? "🚀" : "💥";
  let title = row.launch_success ? "Successful Flight" : "Flight Failed";

  if (row.upcoming) {
    icon = "⏱";
    title = "Upcoming Flight";
  }

  return (
    <li className="p-2">
      <div className="flex space-x-3">
        <span className="h-4 w-4 cursor-help" title={title}>
          {icon}
        </span>
        <span className="h-4 w-4">
          {hasVideo && <VideoLink link={row.links.video_link} />}
        </span>
        <div className="flex-1 space-y-1">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-medium">
              {row.mission_name} - {row.flight_number}
            </h3>
            <p className="text-sm text-gray-500" title={row.launch_date_local}>
              {formattedDate}
            </p>
          </div>
          <p className="text-sm text-gray-500">{row.details}</p>
        </div>
      </div>
    </li>
  );
}

Item.propTypes = {
  row: PropTypes.shape({
    launch_date_local: PropTypes.string.isRequired,
    links: PropTypes.oneOfType([PropTypes.any]),
    launch_success: PropTypes.bool,
    upcoming: PropTypes.bool.isRequired,
    mission_name: PropTypes.string.isRequired,
    flight_number: PropTypes.number.isRequired,
    details: PropTypes.string,
  }).isRequired,
};

export default Item;
