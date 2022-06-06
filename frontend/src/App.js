import "./App.css";
import {
  About,
  Contact,
  Home,
  Pricing,
  SignInAndSignUp,
  Faq,
  Services,
  Support,
  Licenses,
} from "./Containers";
import { Routes, Route } from "react-router-dom";
import { Dashboard } from "./MainContainers";

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
        <Route path="/faq" element={<Faq />} />
        <Route path="/services" element={<Services />} />
        <Route path="/support" element={<Support />} />
        <Route path="/licenses" element={<Licenses />} />

        {/* protected routes */}
        <Route path="/dashboard" element={<Dashboard />} />

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
