import React, { useState } from "react";
import DateRangePicker from "./DateRangePicker";

const options = [
  "Today",
  "Yesterday",
  "Last 7 days",
  "Last 30 days",
  "This Month",
  "This Year",
  "Lifetime",
  "Custom"
];

export default function SelectWithDateRange() {
  const [selected, setSelected] = useState("Today");
  const [range, setRange] = useState({ from: null, to: null });

  return (
    <div>
      <select
        value={selected}
        onChange={(e) => setSelected(e.target.value)}
      >
        {options.map((opt) => (
          <option key={opt} value={opt}>{opt}</option>
        ))}
      </select>

      {selected === "Custom" && (
        <DateRangePicker value={range} onChange={setRange} />
      )}
    </div>
  );
}
