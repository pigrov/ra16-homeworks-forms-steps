import React from "react";
import uuid from "react-uuid";

export default function Forms(props) {
  const { count, date } = props.steps;

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const data = {
      id: uuid(),
      date: evt.target.date.value,
      count: evt.target.count.value,
    };
    console.log(data);
    props.onSave(data);
  };

  const handleChangeCount = (evt) => {
    const { value } = evt.target;
    const limit = 5;
    props.onCount(value.slice(0, limit));
  };

  const handleChangeDate = (evt) => {
    const { value } = evt.target;
    props.onDate(value);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          name="count"
          value={count}
          onChange={handleChangeCount}
        />
        <input
          type="date"
          name="date"
          value={date}
          onChange={handleChangeDate}
        />
        <button>OK</button>
      </form>
    </>
  );
}
