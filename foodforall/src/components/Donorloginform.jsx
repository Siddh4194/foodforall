import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { UserContext } from "../Context/userContext";

export let HorecaLoginForm = (props) => {
  const context = props.context;
  console.log("context at loginform",context);
  let navigate = useNavigate();
  const {user,setUser} = useContext(UserContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log("logged in");
    fetch("http://localhost:500/login",{
        method: "POST",
        headers:{
          'Content-Type': 'application/json',
        },
        credentials:'include',
        body:JSON.stringify({
          email:email,
          password:password,
          panel:`${context ? 'CustomerLogin' : 'DonorSignInForm'}`
        })
      })
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        if (response.status) {
          console.log(response.data);
          setUser(prev => ({...prev,data:response.data}));
          console.log(user);
          navigate(`/donor/${context ? 'Customer' : 'Hotel'}`);
        }
        else {
          setErrorMsg("Invalid username or password");
        }
      })
      .catch((error) => {
      });
  };

  return (
    <div>
      <div className="container" style={{ textAlign: "left" }} >
        <div className="row">
          <div className="col-4">
            <form action="#" method="get" className="bg-light p-3 mt-4 border rounded shadow-5" onSubmit={handleSubmit}>
              <h2 className="text-dark">{context ? 'Customer' : 'Hotel'} Login</h2>
              <div className="mb-3">
                <label for="remail" className="form-label">Email</label>
                <input type="email" className="form-control" name="remail" id="remail" aria-describedby="emailHelpId" placeholder="Enter Your Email-Id Here" required onChange={(event) => setEmail(event.target.value)} />
              </div>
              <div className="mb-3">
                <label for="rpassword" className="form-label text-dark"><strong>Password</strong></label>
                <input type="password" className="form-control" name="rpassword" id="rpassword" placeholder="Enter Your Password Here" required onChange={(event) => setPassword(event.target.value)} />
              </div>
              <div>
                <button type="submit" className="btn btn-primary" style={{ textAlign: "center" }}>Login</button><br></br>
              </div>
              <div>
                <br></br>
                <em className="text-danger">{errorMsg}</em>
                <br></br>
                <label className="text-danger ">Don't Have an Account?</label>&nbsp;
                <a href={`donorsignin/${context ? 'Customer' : 'Hotel'}}`}>Create New Account</a>
              </div>
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