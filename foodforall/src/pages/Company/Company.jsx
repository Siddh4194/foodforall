import React, { useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import bg from "../../img/foodproduct.jpg";
import companyprofile from "../../img/petfoodlogo.jpg";
import Footer from '../../components/Footer';
import { UserContext } from '../../Context/userContext';


export default function Company() {

  const {user,setUser} = useContext(UserContext);
  const rid = 369;
  const request = {};

  request["companies"] = { "_id": user?.data._id};
  request["donor"] = { "rid": rid };

  const [products, setProducts] = useState(null);

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    console.log(user?.data._id);
    fetch("http://localhost:500/getFoodproductByCompany",{
        method: "POST",
        headers:{
          'Content-Type': 'application/json',
        },
        credentials:'include',
        body:JSON.stringify({
          companyID:user?.data?._id
        })
      })
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        if (response.data) {
          console.log(response.data);
          setProducts(response.data);
          console.log(products);
        }
      })
      .catch((error) => {
      });
  };

  const deleteProducts = async (fpid) => {
    const result = await axios.delete(`http://localhost:500/deleteFoodproduct`);
    loadProducts();
  };

  const sendRequest = async () => {
    await axios.post("http://localhost:500/sendCompanyrequest", request);
    alert("Request Sent! Check Request Status To See Updates");
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
                      <div className="col-4 rounded" style={{ backgroundImage: `url(${companyprofile})`, height: "300px", backgroundRepeat: "no-repeat", backgroundSize: "contain" }}>

                      </div>
                      <div className="col-8">
                        <div className="card-body">
                          <strong><h4 className="card-title text-danger">COMPANY PROFILE</h4></strong>
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
            <Link className="btn btn-warning mx-2 mb-3" to={`/addfoodproduct`} >Add Product</Link>
            <button className="btn btn-success mx-2 mb-3" onClick={sendRequest}>Send Request</button>
            <Link className="btn btn-primary mx-2 mb-3" to={`/companyrequesttable`} >Check Request Status</Link>
            <table className="table table-light table-striped">
              <thead>
                <tr>
                  <th scope="col">Sr.No</th>
                  <th scope="col">Product Name</th>
                  <th scope="col">Price</th>
                  <th scope="col">Quantity</th>
                  <th scope="col"></th>
                </tr>
              </thead>
              <tbody>
                {/* {
                  products?.map((product, index) =>
                  (
                    <tr>
                      <th scope="row" key={index}>
                        {index + 1}</th>
                      <td>{product.fpname}</td>
                      <td>{product.fpprice}</td>
                      <td>{product.fpqty}</td>
                      <td>
                        <Link className="btn btn-warning mx-2"
                          to={`/editfoodproduct/${product.fpid}`}>Edit</Link>
                        <button className="btn btn-danger mx-2" onClick={() => deleteProducts(product.fpid)}>Delete</button>
                      </td>
                    </tr>
                  ))

                } */}

              </tbody>
            </table>

          </div>
          <div>
            <Link type="submit" className="btn btn-danger" to="/companylogin">Logout</Link>
          </div>

        </div>
      </div>

      <Footer></Footer>
    </div>
  )
}
