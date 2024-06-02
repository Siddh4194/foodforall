import React, { useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import bg from "../../img/sharefood.jpg";
import donorprofile from "../../img/donorprofile.jpg"
import Footer from '../../components/Footer';
import { UserContext } from '../../Context/userContext';

export default function Donor() {
  const {type} = useParams();
  const {user,setUser} = useContext(UserContext);
  const [request, setRequest] = useState([]);

  // console.log(user?.data._id, name, user?.data.rphone, user?.data.email, user?.data.address, user?.data.citypincode );
  console.log(user?.data);
  useEffect(() => {
    console.log("in donor login");
    loadRequest();
  }, []);

  const loadRequest = async () => {
    const result = await axios.get("http://localhost:500/getAllRequest");

    // console.log(result.data.data);
    setRequest(result.data.data);
  };
  // const req = { "reqid": reqid };
  // req["ngo"] = { "ngoid": ngoid };
  // req["donor"] = { "user._id": user._id };

  const acceptRequest = async (ngoID,reqid) => {
    await axios.put(`http://localhost:500/updateRequest`, {user,ngoID,reqid});
    loadRequest();
  };


  return (
    <div>
      <div style={{ backgroundImage: `url(${bg})`, height: "150vh", backgroundRepeat: "no-repeat", backgroundSize: "cover", opacity: 0.9 }}>\
        <div>
          <div className="container">
            <div className="row">
              <div className="col-3">
              </div>
              <div className="col-6">
                <div className="card mt-4 shadow">
                  <div className="container-fluid">
                    <div className="row">
                      <div className="col-4 rounded" style={{ backgroundImage: `url(${donorprofile})`, height: "230px", backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>

                      </div>
                      <div className="col-8">
                        <div className="card-body">
                          <strong><h4 className="card-title text-danger">{type === 'Customer' ? "Customer" : "Hotel" } PROFILE</h4></strong>
                          <hr></hr>
                          <p className="card-text">Name: {user?.data.name}</p>
                          <p className="card-text">Email: {user?.data.username} </p>
                          <p className="card-text">Phone: {user?.data.rphone} </p>
                          <p className="card-text">Address: {user?.data.address} </p>
                          <p className="card-text">City: {user?.data.citypincode} </p>
                        </div>
                      </div>


                    </div>
                  </div>

                </div>
              </div>
              <div className="col-3">

              </div>

            </div>
          </div>
        </div>
        <div className="container">
          <div className="py-4">
            <h3 className="text-dark text-bg-warning">NGO REQUEST LIST</h3>
            <table className="table table-light table-striped">
              <thead>
                <tr>
                  <th scope="col">Sr.No</th>
                  <th scope="col">NGO</th>
                  <th scope="col">Head Count</th>
                  <th scope="col">City</th>
                  <th scope="col">Request Accepted By</th>
                  <th scope="col">Double Click To Accept</th>

                </tr>
              </thead>
              <tbody>
                {
                  request.map((request, index) =>
                  {
                    console.log(request);
                    return(
                    <tr>
                      <th scope="row" key={index}>
                        {index + 1}</th>
                      <td>{request.ngoName}</td>
                      <td>{request.headCount}</td>
                      <td>{request.ngoAddress}</td>
                      <td>{request?.donorName ? request?.donorName : "Not accepted"}</td>
                      <td>
                        <button className="btn btn-warning mx-2" onClick={() => {acceptRequest(request.ngoID,request._id); }}>Acccept</button>
                      </td>
                    </tr>
                  )})
                }

              </tbody>
            </table>
            <div>

            </div>
            {/* <Link className="btn btn-success mx-2 mb-2" to={`/donorcompany`}>Check Requests From Companies</Link> */}
            <Link className="btn btn-danger mx-2 mb-2"
              to="/donorlogin">Log Out</Link>
          </div>

        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}
