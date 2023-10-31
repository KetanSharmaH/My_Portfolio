import { useState } from "react";
import DashBoard from "./components/dashBoard/DashBoard";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";


function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <DashBoard />
    </>
  );
}

export default App;
