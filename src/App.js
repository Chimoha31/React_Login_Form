import "./App.css";

function App() {
  return (
    <div className="formContainer">
      <form>
        <h1>Login Form</h1>
        <hr />
        <div className="uiForm">
          <div className="formField">
            <label>User name</label>
            <input type="text" placeholder="user name" name="username"></input>
          </div>
          <div className="formField">
            <label>E-mail</label>
            <input type="text" placeholder="email address" name="mailAddress"></input>
          </div>
          <div className="formField">
            <label>Password</label>
            <input type="text" placeholder="password" name="password"></input>
          </div>
          <button className="submitButton">Login</button>
        </div>
      </form>
    </div>
  );
}

export default App;
