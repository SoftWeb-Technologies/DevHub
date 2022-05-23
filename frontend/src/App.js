import "./App.css";
import { About, Home, Pricing } from "./Containers";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      {/* All Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/pricing" element={<Pricing />} />
      </Routes>
    </>
  );
}

export default App;
