import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import bg from "../../img/Tech.jpg";

export default function Admincustomer() {

  const [donor, setDonor] = useState([]);

  const { aid, fname, aemail, aphone } = useParams();

  useEffect(() => {
    loadDonor();
  }, []);

  const loadDonor = async () => {
    const result = await axios.get("http://localhost:500/getAllDonor");
    setDonor(result?.data?.donor);
  };

  const deleteCustomer = async (rid) => {
    const result = await axios.delete(`http://localhost:500/deleteDonor/${rid}`);
    loadDonor();
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
                  <th scope="col">Restaurent Name</th>
                  <th scope="col">Contact Info</th>
                  <th scope="col">City</th>
                  <th scope="col"></th>

                </tr>
              </thead>
              <tbody>
                {
                  donor.map((donor, index) =>
                  (
                    <tr>
                      <th scope="row" key={index}>
                        {index + 1}</th>
                      <td>{donor?.name}</td>
                      <td>{donor?.username}</td>
                      <td>{donor?.rphone}</td>
                      <td>{donor?.address}</td>
                      <td> <button className="btn btn-danger mx-2" onClick={() => deleteCustomer(donor._id)}>Delete</button></td>

                    </tr>
                  ))
                }

              </tbody>
            </table>
            <div>
              <Link className="btn btn-warning mx-2" to={`/adminpage/${aid}/${fname}/${aemail}/${aphone}`} ><b>Back</b></Link>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
