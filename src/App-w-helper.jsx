import "./App.css";
import data from "./assets/data";
import HelperFunction from "./components/HelperFunction";

function App() {
  return (
    <div className="wrapper">
      {data.length ? (
        <HelperFunction data={data} />
      ) : (
        <p style={{ textAlign: "center" }}>No data found!</p>
      )}
    </div>
  );
}

export default App;
