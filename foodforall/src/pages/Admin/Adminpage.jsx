import React from 'react'
import { Link, useParams } from 'react-router-dom';
import bg from "../../img/Tech.jpg";
import admin from "../../img/admin.png";
import Footer from '../../components/Footer';


export default function Adminpage() {

  const { aid, fname, aemail, aphone } = useParams();
  console.log(aid,fname,aemail,aphone);
  return (
    <div>
      <div style={{ backgroundImage: `url(${bg})`, height: "100vh", backgroundRepeat: "no-repeat", backgroundSize: "cover", opacity: 0.9 }}>
        <div>
          <div className="container">
            <div className="row">
              <div className="col-3">

              </div>
              <div className="col-6">
                <div className="card mt-4 shadow">
                  <div className="container-fluid">
                    <div className="row">
                      <div className="col-4 rounded" style={{ backgroundImage: `url(${admin})`, height: "200px", backgroundRepeat: "no-repeat", backgroundSize: "contain" }}>

                      </div>
                      <div className="col-8">
                        <div className="card-body">
                          <strong><h4 className="card-title text-danger">ADMIN PROFILE</h4></strong>
                          <hr></hr>
                          <p className="card-text">Name: {fname}</p>
                          <p className="card-text">Contact: {aphone}</p>
                          <p className="card-text">Email: {aemail}</p>


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

          <Link type="submit" className="btn btn-warning mt-4" style={{ textAlign: "center" }} to={`/admincustomer/${aid}/${fname}/${aemail}/${aphone}`}>Delete Customer</Link>&emsp;

          {/* <Link type="submit" className="btn btn-warning mt-4" style={{ textAlign: "center" }} to={`/admincompany/${aid}/${fname}/${aemail}/${aphone}`}>Delete Company</Link>&emsp; */}

          <Link type="submit" className="btn btn-warning mt-4" style={{ textAlign: "center" }} to={`/admindonor/${aid}/${fname}/${aemail}/${aphone}`}>Delete Hotel</Link>&emsp;

          <Link type="submit" className="btn btn-warning mt-4" style={{ textAlign: "center" }} to={`/adminngo/${aid}/${fname}/${aemail}/${aphone}`}>Delete NGO</Link>&emsp;
        </div>
        <Link type="submit" className="btn btn-danger mt-4" style={{ textAlign: "center" }} to="/adminlogin" >Log Out</Link>&emsp;

      </div>
      <Footer></Footer>
    </div>

  )
}
