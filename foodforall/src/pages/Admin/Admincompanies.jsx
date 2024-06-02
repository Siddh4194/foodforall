import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import bg from "../../img/Tech.jpg";

export default function Admincompanies() {

  const { aid, fname, lname, aemail, aphone } = useParams();

  const [company, setCompany] = useState([]);

  useEffect(() => {
    loadCompanies();
  }, []);

  const loadCompanies = async () => {
    const result = await axios.get("http://localhost:500/getAllCompanies");
    setCompany(result.data);
  };

  const deleteProducts = async (coid) => {
    const result = await axios.delete(`http://localhost:500/deleteCompanies/${coid}`);
    loadCompanies();
  };


  return (
    <div>
      <div style={{ backgroundImage: `url(${bg})`, height: "100vh", backgroundRepeat: "no-repeat", backgroundSize: "cover", opacity: 0.9 }}>
        <div className="container">
          <div className="py-4">
            <table className="table table-light table-striped">
              <thead>
                <tr>
                  <th scope="col">Sr.No</th>
                  <th scope="col">Company Name</th>
                  <th scope="col">Contact Info</th>
                  <th scope="col">City</th>
                  <th scope="col"></th>

                </tr>
              </thead>
              <tbody>
                {
                  company.map((company, index) =>
                  (
                    <tr>
                      <th scope="row" key={index}>
                        {index + 1}</th>
                      <td>{company?.name}</td>
                      <td>{company?.username}</td>
                      <td>{company?.rphone}</td>
                      <td>{company?.address}</td>
                      <td> <button className="btn btn-danger mx-2" onClick={() => deleteProducts(company._id)}>Delete</button></td>

                    </tr>
                  ))
                }

              </tbody>
            </table>
            <div>
              <Link className="btn btn-warning mx-2" to={`/adminpage/${aid}/${fname}/${lname}/${aemail}/${aphone}`} ><b>Back</b></Link>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
