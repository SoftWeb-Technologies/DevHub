import React, { useState } from "react";
import {
  TextInputField,
  SizeBox,
  Button,
  Title,
  Navbar,
} from "../../components";
import "./SignInAndSignUp.css";
import { signInWithGoogle } from "../../firebase";

import {
  GoogleIcon,
  HideEyeIcon,
  LockIcon,
  PersonIcon,
  TwitterIcon,
} from "../../DevHubIcons";
import { LoginImg, SignUpImg } from "../../constants/Images";

const SignInAndSignUp = () => {
  const [toggle, setToggle] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const [toggleFormInMobileView, setToggleFormInMobileView] = useState(false);

  return (
    <div className="auth" id="auth__container">
      <Title title={"Login and Sign Up"} />
      <Navbar theme={"dark"} show={"active"} />

      <div
        className={`container ${toggle ? "right-panel-active" : ""}`}
        id="container"
      >
        {/* Sign Up */}
        <SignUpForm
          handleGoogleLogin={signInWithGoogle}
          showPassword={showPassword}
          setShowPassword={setShowPassword}
          toggleFormInMobileView={toggleFormInMobileView}
          setToggleFormInMobileView={setToggleFormInMobileView}
        />

        {/* sign In  */}
        <SignInForm
          handleGoogleLogin={signInWithGoogle}
          showPassword={showPassword}
          setShowPassword={setShowPassword}
          toggleFormInMobileView={toggleFormInMobileView}
          setToggleFormInMobileView={setToggleFormInMobileView}
        />

        <div className="overlay-container mobile__device__hidden">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1>Hi User!</h1>
              <p>Already have an account? Login now.</p>
              <SizeBox height={25} />
              <Button
                label={"Login"}
                onClick={() => {
                  setToggle(false);
                  setToggleFormInMobileView(false);
                }}
                customStyle={{
                  paddingTop: "0.5rem",
                  paddingBottom: "0.5rem",
                }}
              />

              <div>
                <img src={LoginImg} alt="login-img" />
              </div>
            </div>
            <div className="overlay-panel overlay-right">
              <h1>Hi User!</h1>
              <p>Don't have an account? Create now.</p>
              <SizeBox height={25} />
              <Button
                label={"Sign Up"}
                onClick={() => {
                  setToggle(true);
                  setToggleFormInMobileView(true);
                }}
                customStyle={{
                  paddingTop: "0.5rem",
                  paddingBottom: "0.5rem",
                }}
              />
              <div>
                <img src={SignUpImg} alt="login-img" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Sign In Form
const SignInForm = ({
  handleGoogleLogin,
  handleTwitterLogin,
  showPassword,
  setShowPassword,
  setToggleFormInMobileView,
  toggleFormInMobileView,
}) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    console.log(username + " " + password);
  };

  return (
    <div
      className={`form-container sign-in-container ${
        toggleFormInMobileView ? "hidden" : "active"
      }`}
    >
      <form>
        <p>Welcome back user</p>
        <h3>Login to continue</h3>

        <TextInputField
          type="text"
          placeholder="Username"
          Icon={PersonIcon}
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <SizeBox height={2} />

        <TextInputField
          type={showPassword ? "text" : "password"}
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          Icon={LockIcon}
          RightIcon={HideEyeIcon}
          showPassword={showPassword}
          onClickShowPassword={() => setShowPassword(!showPassword)}
        />
        <SizeBox height={15} />
        <a className="forgot__text" href="/#">
          Forgot your password?
        </a>
        <div className="auth__buttons">
          <Button
            label={"Google"}
            renderIconLeft={true}
            Icon={GoogleIcon}
            customStyle={{
              paddingLeft: "0.8rem",
              paddingTop: ".5rem",
              paddingBottom: ".5rem",
              border: "1.3px solid #008bb7",
              width: "120px",
              boxShadow: "none",
            }}
            onClick={handleGoogleLogin}
          />
          <p>Or</p>
          <Button
            label={"Twitter"}
            renderIconLeft={true}
            Icon={TwitterIcon}
            customStyle={{
              paddingLeft: "0.8rem",
              paddingTop: ".5rem",
              paddingBottom: ".5rem",
              border: "1.3px solid #008bb7",
              width: "120px",
              boxShadow: "none",
            }}
            onClick={handleTwitterLogin}
          />
        </div>

        <div className="login__button">
          <Button
            label={"Login"}
            primary={true}
            customStyle={{
              width: "100%",
              paddingLeft: "45%",
            }}
            onClick={handleLogin}
          />
        </div>
        <p className="show_in_mobile_device">
          Dont'have an account?{" "}
          <span
            style={{
              cursor: "pointer",
              textDecoration: "underline",
            }}
            onClick={() => setToggleFormInMobileView(true)}
          >
            Sign Up now
          </span>
        </p>
      </form>
    </div>
  );
};

// Sign Up Form
const SignUpForm = ({
  showPassword,
  setShowPassword,
  handleGoogleLogin,
  handleTwitterLogin,
  toggleFormInMobileView,
  setToggleFormInMobileView,
}) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const handleCreateAccount = () => {};

  return (
    <div
      className={`form-container sign-up-container ${
        toggleFormInMobileView ? "active" : "hidden"
      }`}
    >
      <form>
        <p>Lets get started</p>
        <h3>Create New Account</h3>

        <TextInputField
          type="text"
          placeholder="Username"
          Icon={PersonIcon}
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <SizeBox height={2} />

        <TextInputField
          type="email"
          placeholder="Email"
          Icon={PersonIcon}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <SizeBox height={2} />

        <TextInputField
          type={showPassword ? "text" : "password"}
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          Icon={LockIcon}
          RightIcon={HideEyeIcon}
          showPassword={showPassword}
          onClickShowPassword={() => setShowPassword(!showPassword)}
        />
        <div className="auth__buttons">
          <Button
            label={"Google"}
            renderIconLeft={true}
            Icon={GoogleIcon}
            customStyle={{
              paddingLeft: "0.8rem",
              paddingTop: ".5rem",
              paddingBottom: ".5rem",
              border: "1.3px solid #008bb7",
              width: "120px",
              boxShadow: "none",
            }}
            onClick={handleGoogleLogin}
          />
          <p>Or</p>
          <Button
            label={"Twitter"}
            renderIconLeft={true}
            Icon={TwitterIcon}
            customStyle={{
              paddingLeft: "0.8rem",
              paddingTop: ".5rem",
              paddingBottom: ".5rem",
              border: "1.3px solid #008bb7",
              width: "120px",
              boxShadow: "none",
            }}
            onClick={handleTwitterLogin}
          />
        </div>

        <div className="signUp__button">
          <Button
            label={"Create Account"}
            primary={true}
            customStyle={{
              width: "100%",
              paddingLeft: "30%",
            }}
            onClick={handleCreateAccount}
          />
        </div>
        <p className="show_in_mobile_device">
          Already have an account?{" "}
          <span
            style={{
              cursor: "pointer",
              textDecoration: "underline",
            }}
            onClick={() => setToggleFormInMobileView(false)}
          >
            Login now
          </span>
        </p>
      </form>
    </div>
  );
};

export default SignInAndSignUp;
