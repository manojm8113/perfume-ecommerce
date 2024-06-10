import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import axios from 'axios';
import { useParams } from 'react-router-dom';
const Companyupdate = () => {
    const { id } = useParams();
    const [Companyname, setCompanyname] = useState('');
    const [Email, setEmail] = useState('');
    const [Password, setPassword] = useState('');
    const [company, setCompany] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
      const fetchProduct = async () => {
        try {
          const response = await axios.get(`http://localhost:5000/addcompany/companydatas/${id}`);
          setCompany(response.data);
          setCompanyname(response.data.Companyname);
          setEmail(response.data.Email);
          setPassword(response.data.Password);
        } catch (error) {
          console.error('Error fetching companydatas:', error);
          setError('Error fetching companydatas.');
        } finally {
          setLoading(false);
        }
      };
      fetchProduct();
    }, [id]);

  const submit = async () => {
    try {
      await axios.put(`http://localhost:5000/addcompany/updatecompany/${id}`, {
        Companyname,
        Email,
        Password
      },id);
      alert("Company updated successfully!");
    } catch (error) {
      console.log('Error updating company:', error);
      alert("Failed to update company.");
    }
  };
  return (
    <div>
      <Sidebar />
      <div className='margin'>
        <div className="py-3 py-md-5">
          <div className="container">
            <div className="row justify-content-md-center">
              <div className="col-12 col-md-11 col-lg-8 col-xl-7 col-xxl-6">
                <div className="bg-white p-4 p-md-5 rounded shadow-sm">
                  <div className="row">
                    <div className="col-12">
                      <div className="mb-5">
                        <h2 className="h3">Company Update</h2>
                        <h3 className="fs-6 fw-normal text-secondary m-0">Enter Company details to update</h3>
                      </div>
                    </div>
                  </div>
                  <div className="row gy-3 gy-md-4 overflow-hidden">
                    <div className="col-12">
                      <label htmlFor="companyname" className="form-label">Company Name<span className="text-danger">*</span></label>
                      <input type="text" className="form-control" name="companyname" id="companyname" value={Companyname} onChange={(e) => setCompanyname(e.target.value)}  required />
                    </div>
                    <div className="col-12">
                      <label htmlFor="email" className="form-label">Email <span className="text-danger">*</span></label>
                      <input type="email" className="form-control" name="email" id="email" value={Email} onChange={(e) => setEmail(e.target.value)}  required />
                    </div>
                    <div className="col-12">
                      <label htmlFor="password" className="form-label">Password <span className="text-danger">*</span></label>
                      <input type="password" className="form-control" name="password" id="password" value={Password} onChange={(e) => setPassword(e.target.value)}  required />
                    </div>
                    <div className="col-12">
                      <div className="d-grid">
                        <button className="btn btn-lg btn-dark" type="submit" onClick={submit}>Update Company</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Companyupdate;
