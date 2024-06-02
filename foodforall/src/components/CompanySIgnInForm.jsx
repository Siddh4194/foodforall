import React, { useState } from "react";
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";
export let CompanySignInForm = () => {
  const [cpc, setCpc] = useState("");

  let navigate = useNavigate();
  const [company, setCompany] = useState(
    {
      rname: "",
      remail: "",
      rpassword: "",
      raddr: "",
      rphone: "",
      citypincode:"",
      panel:'CompanyLogIn'
    }
  );

  const { rname, remail, rpassword, raddr, rphone } = company;

  const onInputChange = (e) => {
    setCompany({ ...company, [e.target.name]: e.target.value });
  };


  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:500/register", company);
    navigate('/companylogin');
  };

  return (
    <div>
      <div className="container" style={{ textAlign: "left" }}>
        <div className="row">
          <div className="col-4">


          </div>

          <div className="col-4">

          </div>
          <div className="col-4">
            <form action="#" method="get" className="bg-light p-3 mt-3 border rounded shadow-5" onSubmit={(e) => onSubmit(e)}>
              <h2 className="text-dark">Company Sign In</h2>
              <div className="mb-3">
                <label for="name" className="form-label text-dark" style={{ textAlign: "left" }}><strong>Company Name</strong></label>
                <input type="text"
                  className="form-control" name="rname" id="name" aria-describedby="helpId" placeholder="Enter Your Company Name Here" value={rname} onChange={(e) => onInputChange(e)} required />
              </div>
              <div className="mb-3">
                <label for="remail" className="form-label"><strong>rEmail-Id</strong></label>
                <input type="remail" className="form-control" name="remail" id="remail" aria-describedby="emailHelpId" placeholder="Enter Your Email-Id Here" value={remail} onChange={(e) => onInputChange(e)} pattern="[a-z0-9]+@[a-z]+\.[a-z]{2,3}" required />
              </div>
              <div className="mb-3">
                <label for="password" className="form-label text-dark"><strong>Password</strong></label>&nbsp;
                <small id="password" className="form-text text-danger">(Min 8 Characters, With Atleast One Number And a Special Character!)</small>
                <input type="password" className="form-control" name="rpassword" id="password" placeholder="example- foodforall@369" value={rpassword} onChange={(e) => onInputChange(e)} pattern="^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$" required />
              </div>
              <div className="mb-3">
                <div className="mb-3">
                  <label for="raddr" className="form-label text-dark" style={{ textAlign: "left" }}><strong>Address</strong></label>
                  <input type="text"
                    className="form-control" name="raddr" id="raddr" aria-describedby="helpId" placeholder="Enter Your raddr Here" value={raddr} onChange={(e) => onInputChange(e)} required />
                </div>
                <div className="mb-3">
                  <label for="contactno" className="form-label text-dark" style={{ textAlign: "left" }}><strong>Contact No</strong></label>
                  <input type="text"
                    className="form-control" name="rphone" id="contactno" aria-describedby="helpId" placeholder="Enter Your Contact Details Here" value={rphone} onChange={(e) => onInputChange(e)} pattern="[0-9]{10}" required />
                </div>
                <label for="citypincode" className="form-label text-dark"><strong>City-Pincode</strong></label>
                <input type="text"
                  className="form-control" name="citypincode" id="citypincode" aria-describedby="helpId" placeholder="Enter Your City Pincode Here" onChange={(e) => onInputChange(e)} pattern="[0-9]{6}" required />
              </div>
              <button type="submit" className="btn btn-primary">Sign In</button>&emsp;
              <Link type="submit" className="btn btn-outline-danger" to="/companylogin">Cancel</Link>
            </form>

          </div>
        </div>
      </div>
    </div>

  );
}

