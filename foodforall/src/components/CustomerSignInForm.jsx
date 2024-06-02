import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import { useState } from "react";

export let UserSignInForm = () => {
  const [cpc, setCpc] = useState();
  let navigate = useNavigate();

  const [customer, setCustomer] = useState(
    {
      rname: "",
      remail: "",
      rpassword: "",
      raddr: "",
      rphone: "",
      citypincode:"",
      panel:'CustomerLogin'
    }
  );

  const { cname, cemail, cpassword, caddress, cphone } = customer;

  const onInputChange = (e) => {
    setCustomer({ ...customer, [e.target.name]: e.target.value });
  };

  customer["city"] = { "citypincode": cpc };


  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:500/register", customer);
    navigate('/userlogin');
  };




  return (
    <div>
      <div className="container" style={{ textAlign: "left" }}>
        <div className="row">
          <div className="col-4">
            <br />
            <form action="#" method="get" className="bg-light p-3 mt-4 border rounded shadow-5" onSubmit={(e) => onSubmit(e)}>
              <h2 className="text-dark">Customer Sign In</h2>
              <div className="mb-3">
                <label for="name" className="form-label text-dark" style={{ textAlign: "left" }}><strong>Username</strong></label>
                <input type="text"
                  className="form-control" name="rname" id="cname" aria-describedby="helpId" placeholder="Enter Your Username Here" value={cname} onChange={(e) => onInputChange(e)} required />
              </div>
              <div className="mb-3">
                <label for="cemail" className="form-label"><strong>Email-Id</strong></label>
                <input type="email" className="form-control" name="remail" id="cemail" aria-describedby="emailHelpId" placeholder="Enter Your Email-Id Here" value={cemail} onChange={(e) => onInputChange(e)} pattern="[a-z0-9]+@[a-z]+\.[a-z]{2,3}" required />
              </div>
              <div className="mb-3">
                <label for="cphone" className="form-label text-dark" style={{ textAlign: "left" }}><strong>Contact Number</strong></label>
                <input type="text"
                  className="form-control" name="rphone" id="cphone" aria-describedby="helpId" placeholder="Enter Your Contact Number Here" value={cphone} onChange={(e) => onInputChange(e)} pattern="[0-9]{10}" required />
              </div>
              <div className="mb-3">
                <label for="cpassword" className="form-label text-dark"><strong>Password</strong></label>&nbsp;
                <small id="password" className="form-text text-danger">(Min 8 Characters, With Atleast One Number And a Special Character!)</small>
                <input type="password" className="form-control" name="rpassword" id="cpassword" placeholder="Example -- foodforall@369" value={cpassword} onChange={(e) => onInputChange(e)} pattern="^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$" required />
              </div>
              <div className="mb-3">
                <label for="citypincode" className="form-label text-dark"><strong>City-Pincode</strong></label>
                <input type="text"
                  className="form-control" name="citypincode" id="citypincode" aria-describedby="helpId" placeholder="Enter Your CityPincode Here" onChange={(e) => onInputChange(e)} pattern="[0-9]{6}" required />
              </div>
              <button type="submit" className="btn btn-primary">Sign In</button>&emsp;
              <Link type="submit" className="btn btn-outline-danger" to="/userlogin">Cancel</Link>
            </form>


          </div>

          <div className="col-4">

          </div>
          <div className="col-4">

          </div>
        </div>
      </div>
    </div>

  );
}