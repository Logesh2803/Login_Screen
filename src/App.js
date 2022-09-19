import "./App.css";
import validation from "./validation";
import React, { useState } from "react";
const App = () => {

  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
     setValues({
      ...values,
      [e.target.name] : e.target.value,
     })
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setErrors(validation(values))
  };

  return (
    <div className="bg">
      <div className="box">
        <img
          className="header"
          src="https://s3-alpha-sig.figma.com/img/ae89/1ef7/4d00d4430d294f545e1b4f5b9532b841?Expires=1664150400&Signature=CT2VW9KbnGI9L2vzTI2yFEbmNAP-OnIjHl1HcgMo8K28GgX11~-5020rfIcOgqNL5xHhdM-ocRdtHorL159Fp9Rs8keI~mXjJw1a5hiFOMPRl56EjZLuLorjZjOj249aHEWmyaqBOxtfPcQHVKh7LseW2SbR~nC50QLfQBpB-CIz6Wwruw4G39i0rnlRwrnWfzN6TSY6yWsXlgxDfsXtIATupqH7m~hDolLsgyvk8J5d3UQRYETfDv4BVvM1u3wKKeVACDhqZ5KIpHMfVeqYVEVasQuWRSi005ncFsnBEpnSgGlkAH0oGRgQ5SD3lXqy6XUful3Zw93lsNSeA0YE3Q__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
          alt="BigCo Inc. logo"
        />
        <h3 className="title"> Please login to continue</h3>
        <form className="form-wrapper">
          <div className="email">
            <label className="label">username</label>
            <input
              className="input"
              type="email"
              name="email"
              value={values.email}
              onChange={handleChange}
            />
            {errors.email && <p className = 'error'>{errors.email}</p>}
          </div>
          <div className="password">
            <label className="label1">password</label>
            <input
              className="input"
              type="password"
              name="password"
              value={values.password}
              onChange = {handleChange}
            />
          </div>
          <div className="forgot">Forgot password ?</div>
          <button className="button" type="button" onClick={handleFormSubmit}>
            {" "}
            Continue
          </button>
          <div className="container">
            <div className="account">Don't have an account?</div>
            <div className="signup">Sign up</div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default App;
