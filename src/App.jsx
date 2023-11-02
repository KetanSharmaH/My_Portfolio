import { useState } from "react";
import Main_Page from "./components/mainPage/Main_Page";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";


function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Main_Page />
    </>
  );
}

export default App;
