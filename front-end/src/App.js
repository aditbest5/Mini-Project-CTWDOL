import "./App.css";
import Register from "./Pages/Register";
import { Route, Routes } from "react-router-dom";
import Authenticaton from "./Pages/Auth";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/authentication/:token" element={<Authenticaton />} />
      </Routes>
    </>
  );
}

export default App;
