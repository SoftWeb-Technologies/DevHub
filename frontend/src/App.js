import "./App.css";
import { About, Contact, Home, Pricing, SignInAndSignUp, Faq } from "./Containers";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      {/* All Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/auth" element={<SignInAndSignUp />} />
        <Route path="/faq" element={<faq />} />

        <Route
          path="/*"
          element={
            <div>
              <h1>Page Not Found</h1>
            </div>
          }
        />
      </Routes>
    </>
  );
}

export default App;
