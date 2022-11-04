import React, { useState } from "react";

const Login = () => {
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="container-fluid">
      <h3 className="font-weight-light text-left">Login Page</h3>

      <div className="row">
        <div className="col-md-12">
          <form role="form">
            <div className="form-group">
              <label htmlFor="creator">Username</label>
              <input
                type="text"
                value={user}
                onChange={(e) => setUser(e.target.value)}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label htmlFor="creator">Password</label>
              <input
                type="password"
                value={password}
                autoComplete="off"
                onChange={(e) => setPassword(e.target.value)}
                className="form-control"
              />
            </div>
            <button
              // onClick={handleSubmit}
              type="submit"
              className="btn btn-primary"
            >
              Sign In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
