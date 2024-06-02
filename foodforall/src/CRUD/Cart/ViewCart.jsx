import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import bg from "../../img/foodproduct.jpg";
import Footer from '../../components/Footer';

export default function ViewCart() {

  const { cid, cname, cphone, cemail, cityname } = useParams();

  const [products, setProducts] = useState([]);


  useEffect(() => {
    loadProducts();
  }, []);


  const loadProducts = async () => {
    const result = await axios.get(`http://localhost:8080/getCartByCustomer/${cid}`);
    setProducts(result.data);

  };

  const deleteProducts = async (caid) => {
    const result = await axios.delete(`http://localhost:8080/deleteCart/${caid}`);
    loadProducts();
  };

  return (
    <div>
      <div style={{ backgroundImage: `url(${bg})`, height: "100vh", backgroundRepeat: "no-repeat", backgroundSize: "cover", opacity: 0.9 }}>

        <div className="container" >
          <div className="py-4">
            <table className="table table-light table-striped">
              <thead>
                <tr>
                  <th scope="col">Sr.No</th>
                  <th scope="col">Product Name</th>
                  <th scope="col"></th>

                </tr>
              </thead>
              <tbody>
                {
                  products.map((product, index) =>
                  (
                    <tr>
                      <th scope="row" key={index}>
                        {index + 1}</th>
                      <td>{product.foodproduct.fpname}</td>
                      <td>
                        <Link className="btn btn-warning mx-2" to={`/usercard/${product.foodproduct.fpid}/${cid}/${cname}/${cphone}/${cemail}/${cityname}`}>View</Link>
                        <button className="btn btn-danger mx-2" onClick={() => deleteProducts(product.caid)}>Remove From Cart</button>
                        <Link className="btn btn-success mx-2" to={`/userpayment/${product.foodproduct.fpid}/${cid}/${cname}/${cphone}/${cemail}/${cityname}`} >Buy</Link>
                      </td>
                    </tr>
                  ))
                }

              </tbody>
            </table>
            <Link className="btn btn-primary mx-2" to={`/userpage/${cid}/${cname}/${cphone}/${cemail}/${cityname}`}>Back</Link>
            

          </div>


        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}
