import React from 'react';
import { Link, useParams } from 'react-router-dom';
import Footer from '../../components/Footer';
import donorprofile from "../../img/donorprofile.jpg"
import hotel from "../../img/hotel.jpg";

export default function CompanyHotel() {
    const{rname, remail, rphone, raddr, coid, coname, coemail, cophone, coaddress, cityname} = useParams();
  return (
    <div>
        <div style={{ backgroundImage: `url(${hotel})`, height: "100vh", backgroundRepeat: "no-repeat", backgroundSize: "cover", opacity: 1 }}>
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-3">
                           
                        </div>
                        <div className="col-6 mt-4">
                        
                <div className="card shadow">
                  <div className="container">
                    <div className="row">
                      <div className="col-4 rounded" style={{ backgroundImage: `url(${donorprofile})`, height: "230px", backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>

                      </div>
                      <div className="col-8">
                        <div className="card-body">
                          <strong><h4 className="card-title text-danger">DONOR PROFILE</h4></strong>
                          <hr></hr>
                          <p className="card-text"><b>{rname}</b></p>
                          <p className="card-text">{remail} </p>
                          <p className="card-text">Phone: {rphone} </p>
                          <p className="card-text">Address: {raddr} </p>
                          <p className="card-text">City: {cityname} </p>
                          <Link className=" btn btn-warning text-dark" to={`/companypage/${coid}/${coname}/${coemail}/${cophone}/${coaddress}/${cityname}`}><b>Go Back</b></Link>
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
            </div>
            <Footer></Footer>
    </div>
  )
}
