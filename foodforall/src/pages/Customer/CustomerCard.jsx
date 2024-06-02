import React, { useEffect, useState } from "react";
import axios from 'axios';
import { Link, useNavigate, useParams } from 'react-router-dom';
import cardphoto from "../../img/cardphoto.jpg";
import bg from "../../img/yumm.jpg";
import Footer from "../../components/Footer";

export default function UserCard() {

  let navigate = useNavigate();
  const { fpid, cid, cname, cphone, cemail, cityname } = useParams();

  const [info, setInfo] = useState([]);

  useEffect(() => {
    View();
  }, []);

  const View = async () => {
    const result = await axios.get(`http://localhost:8080/getFoodproduct/${fpid}`);
    console.log(result.data);
    setInfo(result.data);
  };




  return (
    <div>
      <div style={{ backgroundImage: `url(${bg})`, height: "100vh", backgroundRepeat: "no-repeat", backgroundSize: "cover", opacity: 0.9 }}>
        <div className="container">
          <div className="row">
            <div className="col-3">

            </div>
            <div className="col-6">

              <div className="card mt-4 shadow">
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-4 rounded" style={{ backgroundImage: `url(${cardphoto})`, height: "auto", backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>

                    </div>
                    <div className="col-8">
                      <div className="card-body">
                        <strong><h4 className="card-title text-danger">PRODUCT DETAIL</h4></strong>
                        <hr></hr>
                        <p className="card-text">Name: {info["fpname"]}</p>
                        <p className="card-text">Price: {info["fpprice"]} Rupees</p>
                        <p className="card-text">Quantity: {info["fpqty"]} grams</p>
                      </div>
                    </div>


                  </div>
                </div>

              </div>
              <div>
                <Link type="submit" className="btn btn-primary mt-4" to={`/userpage`}>Go Back</Link>&emsp;
                <Link className="btn btn-success mt-4" to={`/userpayment/${fpid}`} >Buy Product</Link>
              </div>
            </div>
            <div className="col-3">

            </div>

          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}
