import React, { useState } from "react";

function Demo4() {
  let formDetails = { username: "", password: "" };
  let [details, setDetails] = useState(formDetails);

  return (
    <div>
      <h2>Login Form</h2>
      <hr />
      <form>
        <div className="form-group">
          <label>Username</label>
          <input
            value={details.username}
            onChange={(e) => setDetails({...details, username: e.target.value })}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            value={details.password}
            type="password"
            className="form-control"
            onChange={(e) => setDetails({...details, password: e.target.value })}
          />
        </div>
        <button className="mt-2 btn btn-success">Login</button>
      </form>
      <hr/>
        <h5>Entered Username : {details.username}</h5>
        <h5>Entered Password : {details.password}</h5>
    </div>
  );
}

export default Demo4;
