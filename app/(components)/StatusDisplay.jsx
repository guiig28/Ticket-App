import React from "react";

const StatusDisplay = ({ status }) => {
  const getBgColor = (status) => {
    let color = "bg-slate-700";

    switch (status.toLowerCase()) {
      case "terminado":
        color = "bg-green-200";
        return color;

      case "iniciado":
        color = "bg-yellow-200";
        return color;

      case "não iniciado":
        color = "bg-red-200";
        return color;
    }

    return color;
  };

  return (
    <span
      className={`inline-block rounded-full px-2 py-1 text-xs font-semibold text-gray-700 ${getBgColor(
        status
      )}`}
    >
      {status}
    </span>
  );
};

export default StatusDisplay;
