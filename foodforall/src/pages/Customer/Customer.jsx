import React, { useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import bg from "../../img/foodproduct.jpg";
import Footer from '../../components/Footer';
import userprofile from "../../img/userdp.png";
import { UserContext } from '../../Context/userContext';

export default function User() {
  const {user,setUser} = useContext(UserContext);
  const { cid, cname, cphone, cemail, cityname } = useParams();

  const cart = {};
  cart["customer"] = { "cid": cid };

  const [products, setProducts] = useState([]);

  useEffect(() => {
    loadProducts();
  }, []);


  const loadProducts = async () => {
    const result = await axios.get("http://localhost:8080/getAllFoodproduct");
    setProducts(result.data);

  };

  const addToCart = async (fpid) => {
    cart["foodproduct"] = { "fpid": fpid };
    await axios.post("http://localhost:8080/addtoCart", cart);
  }

  return (
    <div>
      <div style={{ backgroundImage: `url(${bg})`, height: "150vh", backgroundRepeat: 'revert-layer', backgroundSize: "continue", opacity: 0.9 }}>
        <div>
          <div className="container">
            <div className="row">
              <div className="col-3 mt-4">
                <Link className="btn btn-danger mx-2 " to="/userlogin" >Logout</Link>
              </div>
              <div className="col-6 mt-2">

                <div className="card mt-4 shadow">
                  <div className="container-fluid">
                    <div className="row">
                      <div className="col-5 rounded" style={{ backgroundImage: `url(${userprofile})`, height: "238px", backgroundRepeat: "no-repeat", backgroundSize: "contain" }}>

                      </div>
                      <div className="col-7">
                        <div className="card-body">
                          <strong><h4 className="card-title text-danger">USER PROFILE</h4></strong>
                          <hr></hr>
                          <p className="card-text">Name: {user?.data.name}</p>
                          <p className="card-text">Email: {user?.data.username} </p>
                          <p className="card-text">Phone: {user?.data.rphone} </p>
                          <p className="card-text">City: {user?.data.citypincode} </p>
                        </div>
                      </div>


                    </div>
                  </div>

                </div>

              </div>
              <div className="col-3 mt-4">
                <Link className="btn btn-light mx-2" to={`/viewcart`} >View Cart</Link>
                <Link className="btn btn-light mx-2" to={`/myorders`} >My Orders</Link>
              </div>

            </div>
          </div>
        </div>
        <div className="container" >
          <div className="py-4">
            <table className="table table-light table-striped">
              <thead>
                <tr>
                  <th scope="col">Sr.No</th>
                  <th scope="col">Product Name</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {
                  products.map((product, index) =>
                  (
                    <tr>
                      <th scope="row" key={index}>
                        {index + 1}</th>
                      <td>{product.fpname}</td>
                      <td>
                        <Link className="btn btn-warning mx-2" to={`/usercard/${product.fpid}/${cid}/${cname}/${cphone}/${cemail}/${cityname}`}>View</Link>
                        <button className="btn btn-primary mx-2" onClick={() => { addToCart(product.fpid); }}>Add To Cart</button>
                        <Link className="btn btn-success mx-2" to={`/userpayment/${product.fpid}/${cid}/${cname}/${cphone}/${cemail}/${cityname}`} >Buy Product</Link>
                      </td>
                    </tr>
                  ))
                }
              </tbody>
            </table>


          </div>


        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}
