import React from "react";

export default function Stats({ items }) {
  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const numPercentage = Math.round((numPacked / numItems) * 100);
  return (
    <footer className="stats">
      <em>
        {numPercentage === 100
          ? "You got everything! Ready to go ✈️"
          : `you have ${numItems} on ur list, u already packed ${numPacked}(${numPercentage}%)`}
      </em>
    </footer>
  );
}
