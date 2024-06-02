import React, { useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import bg from "../../img/happykids.jpg";
import ngoprofile from "../../img/ngoprofile.jpg";
import Footer from '../../components/Footer';
import { UserContext } from '../../Context/userContext';

export default function Ngo() {

  const {user,setUser} = useContext(UserContext);
  const [headCount,setHeadCount] = useState(null);

  const { ngoid, ngoname, ngoemail, ngophone, ngoaddress, cityname } = useParams();

  const [request, setRequest] = useState([]);

  useEffect(() => {
    loadRequest();
  }, []);

  const loadRequest = async () => {
    const result = await axios.post(`http://localhost:500/getRequestByNgo`,user?.data);
    setRequest(result.data);
    console.log(result.data);
  };

  const [rid, setRid] = useState(369);

  const req = {};

  req["ngo"] = { "ngoid": user?.data._id };
  req["donor"] = { "rid": rid };

  const sendRequest = async (e) => {
    console.log(headCount);
    e.preventDefault();
    await axios.post("http://localhost:500/sendRequest", {user,headCount});
    loadRequest();
  };

  const removeRequest = async (reqid) => {
    console.log(reqid);
    await axios.post(`http://localhost:500/deleteRequestByNgo`,{reqid});
    loadRequest();
  };

  return (
    <div>
      <div style={{ backgroundImage: `url(${bg})`, height: "150vh", backgroundRepeat: "no-repeat", backgroundSize: "cover", opacity: 0.9 }}>
        <div>
          <div className="container">
            <div className="row">
              <div className="col-3">

              </div>
              <div className="col-6">
                <div className="card mt-4 shadow">
                  <div className="container-fluid">
                    <div className="row">
                      <div className="col-4 rounded" style={{ backgroundImage: `url(${ngoprofile})`, height: "auto", backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>
                      </div>
                        <div className="col-8">
                          <div className="card-body">
                            <strong><h4 className="card-title text-danger">NGO PROFILE</h4></strong>
                            <hr></hr>
                            <p className="card-text">Name: {user?.data.name}</p>
                            <p className="card-text">Email: {user?.data.username}</p>
                            <p className="card-text">Contact: {user?.data.rphone}</p>
                            <p className="card-text">Address: {user?.data.address}</p>
                            <p className="card-text">City: {user?.data.citypincode}</p>
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
            <table className="table table-light table-striped">
              <thead>
                <tr>
                  <th scope="col">Sr.No</th>
                  <th scope="col">NGO</th>
                  <th scope="col">Head Count</th>
                  <th scope="col">Request Accepted By</th>
                  <th scope="col"></th>

                </tr>
              </thead>
              <tbody>
                {
                  request.map((request, index) =>
                  (
                    <tr>
                      <th scope="row" key={index}>
                        {index + 1}</th>
                      <td>{request.ngoName}</td>
                      <td>{request.headCount}</td>
                      <td>{request.donorName}</td>
                      <td>
                        <Link className="btn btn-warning mx-2" to={`/ngohotel/${request?.donorId}}`} ><b>View Hotel</b></Link>
                        <button onClick={() => { removeRequest(request._id) }} className="btn btn-danger mx-2"  ><b>Remove Request</b></button>
                      </td>
                    </tr>
                  ))
                }

              </tbody>
            </table>
            <div>
              <input className=' m-2 focus:outline-none' onChange={
                (e)=> 
                {console.log(e.target.value);
                setHeadCount(e.target.value)}
              } type="number" placeholder='Head Count For Request' name='headCount'/>
            </div>
            <div>
              <Link className="btn btn-danger" to="/ngologin/">Log Out</Link>
              <button onClick={sendRequest} className="btn btn-warning mx-2 text-dark" ><b>Send Request</b></button>
            </div>
          </div>

        </div>
      </div>

      <Footer></Footer>
    </div>
  )
}
