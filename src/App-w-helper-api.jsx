import { useEffect, useState } from "react";
import "./App.css";
import HelperFunction from "./components/HelperFunction";

const BASE_URL = "https://65b42574770d43aba47af813.mockapi.io/api/v1/data";

function App() {
  const [data, setData] = useState(null);
  // const [data, setData] = useState([])

  const fetchData = async () => {
    try {
      const res = await fetch(BASE_URL);
      const data = await res.json();
      setData(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="wrapper">
      {data ? (
        <HelperFunction data={data} />
      ) : (
        <p style={{ textAlign: "center" }}>No data found!</p>
      )}
    </div>
  );
}

export default App;
