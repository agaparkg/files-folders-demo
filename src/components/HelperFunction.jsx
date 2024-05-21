import React from "react";
import { FaFolder, FaFile } from "react-icons/fa";

function HelperFunction({ data }) {
  return (
    <ul>
      {data.map((item, index) => {
        if (item.type === "file") {
          return (
            <li key={index}>
              <FaFile /> {item.name}
            </li>
          );
        }

        return (
          <li key={index}>
            <FaFolder style={{ color: "red" }} /> {item.name}
            <HelperFunction data={item.children} />
          </li>
        );
      })}
    </ul>
  );
}

export default HelperFunction;
