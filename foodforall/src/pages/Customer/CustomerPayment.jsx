import React from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import bg from "../../img/payment.jpg";
import axios from 'axios';

export default function UserPayment() {
  let navigate = useNavigate();
  const {fpid, cid, cname, cphone, cemail, cityname } = useParams();
  const os = "Not Recieved";

  const orders ={"orderstatus": os};

  const addToOrders = async () => {
    orders["foodproduct"] = { "fpid": fpid };
    orders["customer"] = { "cid": cid};
    await axios.post("http://localhost:8080/postOrders", orders);
    navigate(`/userpage/${cid}/${cname}/${cphone}/${cemail}/${cityname}`);
  }

  return (
    <div>
      <div style={{ backgroundImage: `url(${bg})`, height: "100vh", backgroundRepeat: "no-repeat", backgroundSize: "cover", opacity: 0.9 }}>
        <div className="container">
          <div className="row">
            <div className="col-4">
              <div className="container" style={{ textAlign: "left" }}>
                <div className="row">

                  <form action="#" method="get" className="bg-light p-3 mt-4 border rounded shadow-5" >
                    <h2 className="text-success"><b>Payment Details</b></h2>
                    <div className="mb-3">
                      <label for="name" className="form-label text-dark"><strong>Card Owner</strong></label>
                      <input type="text"
                        className="form-control" name="name" id="name" aria-describedby="helpId" placeholder="Enter Card Owner Name Here" />
                    </div>
                    <div className="mb-3">
                      <label for="password" className="form-label text-dark"><strong>Card Number</strong></label>
                      <input type="password" className="form-control" name="password" id="password" placeholder="Enter Valid Card Number" />
                    </div>
                    <div className="mb-3">
                      <div className="form-group"> <label><span className="hidden-xs">
                        <h6>Expiration Date</h6>
                      </span></label>
                        <div className="input-group"> <input type="number" placeholder="MM" name="" className="form-control" required /> <input type="number" placeholder="YY" name="" className="form-control" required /> </div>
                      </div>
                    </div>

                    <div className="mb-3">
                      <div className="form-group mb-4"> <label data-toggle="tooltip" title="Three digit CV code on the back of your card">
                        <h6>CVV <i className="fa fa-question-circle d-inline"></i></h6>
                      </label> <input type="text" required className="form-control" /> </div>
                    </div>


                    <div>
                    <button className="btn btn-success mx-2"  onClick={() => { addToOrders(); }}>Make Payment</button>&emsp;
                      <Link className="btn btn-outline-danger mx-2" to={`/userpage/${cid}/${cname}/${cphone}/${cemail}/${cityname}`} >Cancel</Link>
                      <Link className="btn btn-primary mx-2" to={`/userpage/${cid}/${cname}/${cphone}/${cemail}/${cityname}`} >Back</Link>
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
          <div className="col-4">

          </div>
          <div className="col-4">

          </div>
        </div>
      </div>
    </div>

  )
}
