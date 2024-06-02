import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import bg from "../../img/Tech.jpg";

export default function Admincustomer() {

  const [ngo, setNgo] = useState([]);

  const { aid, fname, aemail, aphone } = useParams();

  useEffect(() => {
    loadNgo();
  }, []);

  const loadNgo = async () => {
    const result = await axios.get("http://localhost:500/getAllNgo");
    setNgo(result?.data?.donor);
  };

  const deleteNgo = async (ngoid) => {
    const result = await axios.delete(`http://localhost:500/deleteNgo/${ngoid}`);
    loadNgo();
  };


  return (
    <div>
      <div style={{ backgroundImage: `url(${bg})`, height: "100vh", backgroundRepeat: "no-repeat", backgroundSize: "cover", opacity: 0.9 }}>
        <div className="container">
          <div className="py-4">
            <table class="table table-light table-striped">
              <thead>
                <tr>
                  <th scope="col">Sr.No</th>
                  <th scope="col">NGO Name</th>
                  <th scope="col">Contact Info</th>
                  <th scope="col">City</th>
                  <th scope="col"></th>

                </tr>
              </thead>
              <tbody>
                {
                  ngo.map((ngo, index) =>
                  (
                    <tr>
                      <th scope="row" key={index}>
                        {index + 1}</th>
                      <td>{ngo?.name}</td>
                      <td>{ngo?.username}</td>
                      <td>{ngo?.rphone}</td>
                      <td>{ngo?.address}</td>
                      <td> <button className="btn btn-danger mx-2" onClick={() => deleteNgo(ngo.ngoid)}>Delete</button></td>

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
