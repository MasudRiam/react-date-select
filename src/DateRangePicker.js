import React from "react";

export default function DateRangePicker({ value, onChange }) {
  const handleChange = (e) => {
    const { name, value: val } = e.target;
    onChange({ ...value, [name]: val });
  };

  return (
    <div>
      <label>
        From:
        <input
          type="date"
          name="from"
          value={value.from || ""}
          onChange={handleChange}
        />
      </label>
      <label>
        To:
        <input
          type="date"
          name="to"
          value={value.to || ""}
          onChange={handleChange}
        />
      </label>
    </div>
  );
}
