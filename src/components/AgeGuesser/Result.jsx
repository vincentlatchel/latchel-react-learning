const Result = ({ name, result: { age, count } }) => {
  return (
    <div className={`mt-4 ${age ? "text-gray-600" : "text-red-600"}`}>
      {age ? `Age for ${name} is ${age}` : "Nothing found for that name"}
    </div>
  );
};

export default Result;
