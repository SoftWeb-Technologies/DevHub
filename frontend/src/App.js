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
import { Routes, Route, useNavigate } from "react-router-dom";
import { Dashboard } from "./MainContainers";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { auth } from "./firebase";
import { setUser } from "./redux/actions/actions";
import ProtectedRoute from "./routes/ProtectedRoute";
import { ErrorImg } from "./constants/Images";
import { Button } from "./components";

function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(setUser(authUser));
      } else {
        dispatch(setUser(null));
      }
    });
  }, [dispatch]);

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
        <Route exact path="/" element={<ProtectedRoute />}>
          <Route exact path="/dashboard" element={<Dashboard />} />
        </Route>

        <Route
          path="/*"
          element={
            <div
              style={{
                height: "100vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <div
                style={{
                  maxWidth: "450px",
                  width: "100%",
                }}
              >
                <img src={ErrorImg} alt="404-error" />
              </div>

              <Button
                label={"Back to home"}
                primary={true}
                onClick={() => navigate("/", { replace: true })}
              />
            </div>
          }
        />
      </Routes>
    </>
  );
}

export default App;
