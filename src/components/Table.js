import React from "react";

export default function Table(props) {
  const items = props.data;

  items.sort((a, b) => (a.date > b.date ? -1 : b.date > a.date ? 1 : 0));

  const handleDeleteRow = (id) => {
    props.onDelete(id);
  };
  const handleEditRow = (id) => {
    props.onEdit(id);
  };

  const listing = items.map((item) => {
    return (
      <div className="item" id={item.id} key={item.id}>
        <div className="item-title">{item.date}</div>
        <div className="item-price">{item.count}</div>
        <div className="item-delete" onClick={() => handleDeleteRow(item.id)}>
          (delete)
        </div>
        <div className="item-edit" onClick={() => handleEditRow(item.id)}>
          (edit)
        </div>
      </div>
    );
  });

  return <div>{listing}</div>;
}
