const VideoLink = ({
  row: {
    links: { video_link },
  },
}) => {
  return (
    <a href={video_link} target="_blank" title="Watch Video" rel="noreferrer">
      🎥
    </a>
  );
};

export default VideoLink;
