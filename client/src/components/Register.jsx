import React, { useState, useContext } from "react";
import { useLocation, useParams, useHistory, Redirect } from "react-router-dom";
import { postUserAPICall } from "../apis/AnimeFinder";
import { UsersContext } from "../context/UserContext";

const Register = () => {
  const { addUsers } = useContext(UsersContext);
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmation, setConfirmation] = useState("");
  const [errors, setErrors] = useState([]);
  const history = useHistory();

  const handleSubmit = async (e) => {
    // noErrors() = true;
    e.preventDefault();
    try {
      const response = await postUserAPICall({
        first: first,
        last: last,
        username: username,
        email: email,
        password: password,
      });
      console.log(response.data.data);
      console.log(response.status);
      addUsers(response.data.data.users);
      if (response.status === 201) {
        history.push("/");
      }
    } catch (err) {
      console.log(err);
      <Redirect to="/error" />;
    }
  };

  //ADD VALIDATION FOR THIS AT LATER TIME
  // const noErrors = (errors) => {
  //   if () {

  //   }
  //   return true
  // }

  return (
    <div className="container-fluid">
      <h3 className="font-weight-light text-left">Registration Page</h3>

      <div className="row">
        <div className="col-md-12">
          <form role="form">
            <div className="form-group">
              <label htmlFor="first">First Name</label>
              <input
                type="text"
                value={first}
                placeholder="First Name"
                onChange={(e) => setFirst(e.target.value)}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label htmlFor="last">Last Name</label>
              <input
                type="text"
                value={last}
                placeholder="Last Name"
                onChange={(e) => setLast(e.target.value)}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label htmlFor="creator">UserName</label>
              <input
                type="text"
                value={username}
                placeholder="Username"
                onChange={(e) => setUsername(e.target.value)}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label htmlFor="creator">Email</label>
              <input
                type="text"
                value={email}
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label htmlFor="creator">Password</label>
              <input
                type="password"
                value={password}
                autoComplete="off"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label htmlFor="creator">Confirm Password</label>
              <input
                type="password"
                value={confirmation}
                autoComplete="off"
                placeholder="Confirm Password"
                onChange={(e) => setConfirmation(e.target.value)}
                className="form-control"
              />
            </div>
            <button
              onClick={handleSubmit}
              type="submit"
              className="btn btn-primary"
            >
              Create User
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
