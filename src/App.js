import {BrowserRouter, Routes, Route} from "react-router-dom";
import "../src/Assats/CSS/style.css"
import Dashboard from "./Pages/Dashboard";

function App() {
  return <>
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Dashboard/>} />
    </Routes>
  </BrowserRouter>
  </>
}

export default App;
