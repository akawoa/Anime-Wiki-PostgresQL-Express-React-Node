import React, { useState, useContext } from "react";
import { useHistory, Redirect } from "react-router-dom";
import { getUserAPICall } from "../apis/AnimeFinder";
import { UsersContext } from "../context/UserContext";

const Login = () => {
  const { setUsers } = useContext(UsersContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [state, setState] = useState("");
  const REQUEST_STATUS = {
    LOADING: "loading",
    SUCCESS: "success",
    FAILURE: "failure",
  };
  const [requestStatus, setRequestStatus] = useState(REQUEST_STATUS.LOADING);
  const history = useHistory();

  const handleSubmit = async (e) => {
    // noErrors() = true;
    e.preventDefault();
    try {
      const response = await getUserAPICall({
        username: username,
        password: password,
      });
      setUsers(response.data.data.user);
      // console.log(response.data.data.user.password);
      // console.log(response.status);
      // console.log("Below should be the password saved to state:");
      // addUsers(response.data.data.user);
      if (response.status === 201) {
        localStorage.setItem("authenticatedUser", true);
        history.push("/");
      }
    } catch (err) {
      console.log(err);
      <Redirect to="/error" />;
    }
  };

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
                value={username}
                onChange={(e) => setUsername(e.target.value)}
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
              onClick={handleSubmit}
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
