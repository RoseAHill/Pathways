import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import "./SignupForm.css";
import * as authService from "../../services/authService";

const SignupForm = (props) => {
  const history = useHistory();
  const [validForm, setValidForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    passwordConf: "",
    avatar: "",
  });

  const handleChange = (evt) => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    authService
      .signup(formData)
      .then(() => {
        props.handleSignupOrLogin();
        history.push("/");
      })
      .catch((err) => {
        props.updateMessage(err.message);
      });
  };

  useEffect(() => {
    const { name, email, password, passwordConf } = formData;
    const isFormInvalid = !(name && email && password === passwordConf);
    setValidForm(isFormInvalid);
  }, [formData]);

  return (
    <div className="signup-page">
      <div className="left-container">
        <div className="form-container">
          <div className="title-container">
            <h1>Create an Account</h1>
            <h3> DISCOVER YOUR PATH</h3>
          </div>
          <form
            autoComplete="off"
            onSubmit={handleSubmit}
            className="register-form"
          >
            <input
              type="text"
              autoComplete="off"
              required
              id="name"
              value={formData.name}
              name="name"
              onChange={handleChange}
              placeholder="Username"
            />

            <input
              type="email"
              autoComplete="off"
              required
              id="email"
              value={formData.email}
              name="email"
              onChange={handleChange}
              placeholder="Email"
            />

            <input
              type="password"
              autoComplete="off"
              required
              id="password"
              value={formData.password}
              name="password"
              onChange={handleChange}
              placeholder="Password"
            />

            <input
              type="password"
              autoComplete="off"
              required
              id="confirm-input"
              value={formData.passwordConf}
              name="passwordConf"
              onChange={handleChange}
              placeholder="Confirm Password"
            />

            <input
              type="text"
              autoComplete="off"
              id="avatar"
              value={formData.avatar}
              name="avatar"
              onChange={handleChange}
              placeholder="Avatar Url"
            />

            <button id="submit-button" type="submit">
              SIGN UP
            </button>
          </form>

          <div className="redirect-container">
            <p>Already have an account?</p>
            <Link className="redirect-link" to="/login">
              <p>Sign in</p>
            </Link>
          </div>
        </div>
      </div>
      <div className="right-container">THIS IS THE RIGHT CONTAINER</div>
    </div>
  );
};

export default SignupForm;
