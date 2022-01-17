import dayjs from "utils/date";
import VideoLink from "./VideoLink";

const Item = ({ row }) => {
  const formattedDate = dayjs(row.launch_date_local).fromNow();
  const hasVideo = row.links?.video_link || undefined;
  return (
    <li className="p-2">
      <div className="flex space-x-3">
        <span
          className="h-4 w-4 cursor-help"
          title={
            row.upcoming
              ? "Upcoming Flight"
              : row.launch_success
              ? "Successful Flight"
              : "Flight Failed"
          }
        >
          {row.upcoming ? "⏱" : row.launch_success ? "🚀" : "💥"}
        </span>
        <span className="h-4 w-4">{hasVideo && <VideoLink row={row} />}</span>
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
};

export default Item;
