import "./App.css";
import { FaFolder, FaFile } from "react-icons/fa";

function App({ data }) {
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
            <App data={item.children} />
          </li>
        );
      })}
    </ul>
  );
}

export default App;
