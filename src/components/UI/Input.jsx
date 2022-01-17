import React, { useEffect, useMemo, useCallback } from "react";
import debounce from "lodash/debounce";

const Input = (props) => {
  const onChangeValue = useCallback(
    (event) => props.onChangeValue(event.target.value),
    [props]
  );
  const debouncedChangeHandler = useMemo(
    () => debounce(onChangeValue, props.delay || 300),
    [props, onChangeValue]
  );
  useEffect(() => {
    return () => {
      debouncedChangeHandler.cancel();
    };
  }, [debouncedChangeHandler]);

  return (
    <input
      type="search"
      name="name"
      id="name"
      className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
      placeholder="Enter Name..."
      autoComplete="off"
      autosuggest="off"
      value={props.value}
      onChange={debouncedChangeHandler}
    />
  );
};

export default Input;
