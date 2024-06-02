import pic from "../img/Tech.jpg";
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";

export default function AdminLogin() {

  let navigate = useNavigate();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:500/checkAdminLogin", {
        email,
        password
      })
      .then((response) => {
        console.log(response);
        if (response?.data?.status) {
          console.log(response?.data?.donor);
          navigate(`/adminpage/${response?.data.donor._id}/${response?.data?.donor?.name}/${response?.data?.donor?.username}/${response?.data?.donor?.rphone}`);
        }
        else {
          setErrorMsg("Invalid username or password");
          console.log(errorMsg);
        }
      })
      .catch((error) => { 
      });
  };

  return (
    <div>
      <div style={{ backgroundImage: `url(${pic})`, height: "100vh", backgroundRepeat: "no-repeat", backgroundSize: "cover", opacity: 1 }}>
        <div className="container" style={{ textAlign: "left" }}>
          <div className="row">
            <div className="col-4">
              <form action="#" method="get" className="bg-light p-3 mt-4 border rounded shadow-5" onSubmit={handleSubmit}>
                <h2 className="text-dark">Admin Login</h2>
                <div className="mb-3">
                  <label for="aname" className="form-label">Username</label>
                  <input type="aname" className="form-control" name="aname" id="name" aria-describedby="emailHelpId" placeholder="Enter Your Username Here" required onChange={(event) => setEmail(event.target.value)} />
                </div>
                <div className="mb-3">
                  <label for="apassword" className="form-label text-dark"><strong>Password</strong></label>
                  <input type="apassword" className="form-control" name="apassword" id="password" placeholder="Enter Your Password Here" required onChange={(event) => setPassword(event.target.value)} />
                </div>
                <div>
                  <button type="submit" className="btn btn-primary" style={{ textAlign: "center" }}>Login</button><br></br>
                </div>
                <br></br>
                <em className="text-danger">{errorMsg}</em>
                <br></br>

              </form>

            </div>

            <div className="col-4">


            </div>
            <div className="col-4">

            </div>
          </div>
        </div>
      </div>

    </div>
  )
}
