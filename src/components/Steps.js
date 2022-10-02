import React, { useState } from "react";
import Forms from "./Forms";
import Table from "./Table";

export default function Steps(props) {
  const [steps, setSteps] = useState({ id: "", count: "", date: "" });
  const [data, setData] = useState(props.steps);

  const handleChangeCount = (count) => {
    setSteps((prevState) => ({
      ...prevState,
      count,
    }));
  };

  const handleChangeDate = (date) => {
    setSteps((prevState) => ({
      ...prevState,
      date,
    }));
  };

  const handleSave = (value) => {
    if (value.date && value.count) {
      const existingDate = data.find((o) => o.date === value.date);
      if (existingDate) {
        setData((prevState) =>
          prevState.map((o) => {
            if (o.date === existingDate.date) {
              return { ...o, count: parseInt(o.count) + parseInt(value.count) };
            }
            return o;
          })
        );
      } else {
        setData((prevState) => [...prevState, value]);
      }
      setSteps({ id: "", count: "", date: "" });
    }
  };

  const handleEdit = (id) => {
    const [filteredData] = data.filter((o) => o.id === id);
    setSteps(filteredData);
    handleDelete(id);
  };

  const handleDelete = (id) => {
    setData((data) => data.filter((o) => o.id !== id));
  };

  return (
    <>
      <Forms
        onCount={handleChangeCount}
        onDate={handleChangeDate}
        onSave={handleSave}
        steps={steps}
        data={data}
      />
      <Table onDelete={handleDelete} onEdit={handleEdit} data={data} />
    </>
  );
}
