import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import bg from "../../img/foodproduct.jpg";
import Footer from '../../components/Footer';

export default function CompanyRequestTable() {

  const [request, setRequest] = useState([]);


  const { coid, coname, coemail, cophone, coaddress, cityname } = useParams();

  useEffect(() => {
    loadRequest();
  }, []);

  const loadRequest = async () => {
    const result = await axios.get(`http://localhost:8080/getRequestByCompany/${coid}`);
    setRequest(result.data);
  };

  const deleteRequest = async (reqid) => {
    console.log(reqid);
    const result = await axios.delete(`http://localhost:8080/deleteCompanyRequest/${reqid}`);
    loadRequest();
  };

  return (
    <div>
      <div style={{ backgroundImage: `url(${bg})`, height: "150vh", backgroundRepeat: "no-repeat", backgroundSize: "cover", opacity: 0.9 }}>
        <div className="container">
          <div className="py-4">
            <table className="table table-light table-striped">
              <thead>
                <tr>
                  <th scope="col">Sr.No</th>
                  <th scope="col">Company</th>
                  <th scope="col">Request Accepted By</th>
                  <th scope="col"></th>

                </tr>
              </thead>
              <tbody>
                {
                  request.map((request, index) =>
                  (
                    <tr>
                      <th scope="row" key={index}>
                        {index + 1}</th>
                      <td>{request.companies.coname}</td>
                      <td>{request.donor.rname}</td>
                      <td>
                      <Link className="btn btn-warning mx-2" to={`/companyhotel/${request.donor.rname}/${request.donor.remail}/${request.donor.rphone}/${request.donor.raddr}/${coid}/${coname}/${coemail}/${cophone}/${coaddress}/${cityname}`} ><b>View Hotel</b></Link>
                        <button className="btn btn-danger" onClick={() => deleteRequest(request.reqid)} >Delete</button>
                      </td>
                    </tr>
                  ))
                }

              </tbody>
            </table>
            <div>
              <Link className="btn btn-primary mx-2" to={`/companypage/${coid}/${coname}/${coemail}/${cophone}/${coaddress}/${cityname}`} ><b>Back</b></Link>

            </div>
          </div>

        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}
