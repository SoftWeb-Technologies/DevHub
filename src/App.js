import {
  About,
  Contact,
  Home,
  //Pricing,
  Features,
  SignInAndSignUp,
  Faq,
  Services,
  Support,
  Licenses,
  RedirectOnPayment,
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
  Trash,
  RemindersPage,
} from "./MainContainers";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { auth } from "./firebase";
import { setUser } from "./redux/actions/actions";
import ProtectedRoute from "./routes/ProtectedRoute";
import { ErrorImg } from "./constants/Images";
import { Button } from "./components";
import axios from "axios";

function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const loadUser = async () => {
    try {
      const user = await axios.get(
        `${process.env.REACT_APP_SERVER_URL}/user/me`
      );

      if (user.data.success) {
        dispatch(setUser(user.data));
      }
    } catch (err) {
      console.log(err.message);
    }
  };

  const getLoginStatusFromLocalStorage = () => {
    const loginStatus = localStorage.getItem("loginUsing");
    return loginStatus;
  };

  useEffect(() => {
    if (getLoginStatusFromLocalStorage() === "emailAndPassword") {
      loadUser();
    }

    if (getLoginStatusFromLocalStorage() === "googleOrTwitter") {
      auth.onAuthStateChanged((authUser) => {
        if (authUser) {
          dispatch(setUser(authUser));
        }
      });
    }
  }, [dispatch, getLoginStatusFromLocalStorage]);

  return (
    <>
      {/* All Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/features" element={<Features />} />
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
          element={<ProtectedRoute Component={RemindersPage} />}
        />
        <Route
          exact
          path="/trash"
          element={<ProtectedRoute Component={Trash} />}
        />

        <Route
          exact
          path="/paymentsuccess"
          element={<ProtectedRoute Component={RedirectOnPayment} />}
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
}

export default App;
