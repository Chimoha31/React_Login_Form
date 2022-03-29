import "./App.css";
import React, { useState } from "react";

function App() {
  const initialValues = { username: "", mailAddress: "", password: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    console.log(formValues);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // ログイン情報を送信する前に、バリデーションチェックをする。
    setFormErrors(validate(formValues));
  };

  const validate = (values) => {
    const regex = /^[a-zA-Z0-9_.+-]+@([a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]*\.)+[a-zA-Z]{2,}$/;
    const errors = {};
    if(!values.username){
      errors.username = "Add username";
    }
    if(!values.mailAddress){
      errors.mailAddress = "Add mail address";
    }else if(!values.mailAddress.includes(regex)){
      errors.mailAddress = "Type correct email address"
    }
    if(values.password.length < 4 || values.password.length > 16 || !values.password){
      errors.password = "Add passwords more than 4 and less than 15 letters";
    }
    return errors;
  };

  return (
    <div className="formContainer">
      <form onSubmit={handleSubmit}>
        <h1>Login Form</h1>
        <hr />
        <div className="uiForm">
          <div className="formField">
            <label>User name</label>
            <input
              type="text"
              placeholder="user name"
              name="username"
              onChange={handleChange}
            ></input>
          </div>
          <p>{formErrors.username}</p>
          <div className="formField">
            <label>E-mail</label>
            <input
              type="text"
              placeholder="email address"
              name="mailAddress"
              onChange={handleChange}
            ></input>
          </div>
          <p>{formErrors.mailAddress}</p>
          <div className="formField">
            <label>Password</label>
            <input
              type="text"
              placeholder="password"
              name="password"
              onChange={handleChange}
            ></input>
          </div>
          <p>{formErrors.password}</p>
          <button className="submitButton">Login</button>
        </div>
      </form>
    </div>
  );
}

export default App;
