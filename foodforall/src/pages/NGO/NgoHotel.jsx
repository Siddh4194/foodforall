import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Footer from '../../components/Footer';
import donorprofile from "../../img/donorprofile.jpg"
import hotel from "../../img/hotel.jpg";

export default function NgoHotel() {
    const {donorID} = useParams();
    const [donor,setDonor] = useState(null);
    useEffect(()=>{
      function fetchData() {
        fetch('http://localhost:500/getDonor',
          {
            headers:{
              'content-type': 'application/json'
            },
            method:'Post',
            credentials:'include',
            body: JSON.stringify({
              donorID:donorID
            })
          }
        )
        .then(response => response.json())
        .then(data =>{
          if(data.status){
            setDonor(data.donor)
            console.log(data.donor);
          }
        })
      }
      console.log(donor);
      fetchData();
    },[])
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
                          <p className="card-text"><b></b></p>
                          <p className="card-text"> </p>
                          <p className="card-text">Name : {donor?.name}</p>
                          <p className="card-text">Phone : {donor?.rphone}</p>
                          <p className="card-text">email : {donor?.username}</p>
                          <p className="card-text">Address : {donor?.address}</p>
                          <Link className=" btn btn-warning text-dark" to={`/ngo`}><b>Go Back</b></Link>
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
