import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Link, useNavigate, useParams } from 'react-router-dom';
import bg from "../../img/CrudPetFood.jpg";
import Footer from "../../components/Footer";

export default function EditFoodproduct() {

  const { fpid, coid, coname, coemail, cophone, coaddress, cityname } = useParams();

  let navigate = useNavigate();
  const [foodproduct, setFoodproduct] = useState(
    {
      fpname: "",
      fpprice: "",
      fpqty: "",
    }
  );

  const { fpname, fpprice, fpqty } = foodproduct;

  const onInputChange = (e) => {
    setFoodproduct({ ...foodproduct, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadProducts();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:8080/updateFoodproduct/${fpid}`, foodproduct);
    navigate(`/companypage/${coid}/${coname}/${coemail}/${cophone}/${coaddress}/${cityname}`);
  };

  const loadProducts = async () => {
    const result = await axios.get(`http://localhost:8080/getFoodproduct/${fpid}`);
    setFoodproduct(result.data)
  }




  return (
    <div>
      <div style={{ backgroundImage: `url(${bg})`, height: "100vh", backgroundRepeat: "no-repeat", backgroundSize: "cover", opacity: 1 }}>
        <div className="container">
          <div className="row">
            <div className="col-4">

            </div>
            <div className="col-4">

              <form action="#" method="get" className="bg-light p-3 mt-3 border rounded shadow-5" onSubmit={(e) => onSubmit(e)}>
                <h2 className="text-dark">EDIT FOOD PRODUCT</h2>
                <div className="mb-3">
                  <label for="name" className="form-label text-dark" style={{ textAlign: "left" }}><strong>Food Product Name</strong></label>
                  <input type="text"
                    className="form-control" name="fpname" id="name" aria-describedby="helpId" placeholder="Enter Food Product Name" value={fpname} onChange={(e) => onInputChange(e)} />
                </div>
                <div className="mb-3">
                  <label for="price" className="form-label text-dark" style={{ textAlign: "left" }}><strong>Price</strong></label>
                  <input type="text"
                    className="form-control" name="fpprice" id="price" aria-describedby="helpId" placeholder="Enter Price of Product" value={fpprice} onChange={(e) => onInputChange(e)} />
                </div>
                <div className="mb-3">
                  <label for="quantity" className="form-label text-dark" style={{ textAlign: "left" }}><strong>Quantity</strong></label>
                  <input type="text"
                    className="form-control" name="fpqty" id="name" aria-describedby="helpId" placeholder="Enter Quantiy In Grams" value={fpqty} onChange={(e) => onInputChange(e)} />
                </div>
                <div>
                  <button type="submit" className="btn btn-primary">Edit Product</button>&emsp;
                  <Link type="submit" className="btn btn-outline-danger" to={`/companypage/${coid}/${coname}/${coemail}/${cophone}/${coaddress}/${cityname}`}>Cancel</Link>
                </div>
              </form>

            </div>
            <div className="col-4">

            </div>

          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}
