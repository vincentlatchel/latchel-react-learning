const CardTitle = (props) => {
  return <div className="px-4 py-5 sm:px-6 font-semibold">{props.title}</div>;
};

const Card = (props) => {
  return (
    <div className="bg-white overflow-hidden shadow rounded-lg divide-y divide-gray-200">
      {props.title && <CardTitle {...props} />}
      <div className="px-2 py-5 sm:p-4">{props.children}</div>
    </div>
  );
};

export default Card;
