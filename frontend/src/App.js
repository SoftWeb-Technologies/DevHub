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
import {
  Dashboard,
  BlogSpace,
  LibraryPage,
  TaskList,
  Contest,
  TechHunt,
  ContestsList,
  Profile,
  Reminder,
  Trash,
} from "./MainContainers";
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

        <Route
          exact
          path="/dashboard"
          element={<ProtectedRoute Component={Dashboard} />}
        />
        <Route
          exact
          path="/blogspace"
          element={<ProtectedRoute Component={BlogSpace} />}
        />
        <Route
          exact
          path="/createtask"
          element={<ProtectedRoute Component={TaskList} />}
        />
        <Route
          exact
          path="/library"
          element={<ProtectedRoute Component={LibraryPage} />}
        />
        <Route
          exact
          path="/contest"
          element={<ProtectedRoute Component={Contest} />}
        />
        <Route
          exact
          path="/techhunt"
          element={<ProtectedRoute Component={TechHunt} />}
        />
        <Route
          exact
          path="/contestslist"
          element={<ProtectedRoute Component={ContestsList} />}
        />

        <Route
          exact
          path="/profile"
          element={<ProtectedRoute Component={Profile} />}
        />
        <Route
          exact
          path="/reminder"
          element={<ProtectedRoute Component={Reminder} />}
        />
        <Route
          exact
          path="/trash"
          element={<ProtectedRoute Component={Trash} />}
        />

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
                onClick={() => navigate("/dashboard", { replace: true })}
              />
            </div>
          }
        />
      </Routes>
    </>
  );
};

export default App;
