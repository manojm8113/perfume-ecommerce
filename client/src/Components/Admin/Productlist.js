import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Sidebar from './Sidebar';
import Table from 'react-bootstrap/esm/Table';
const Productlist = () => {
    const [Profile, setProfile] = useState([]);
  useEffect(() => {
    async function getdata() {
      try {
        const response = await axios.get('http://localhost:5000/adminapis/getimage');
        setProfile(response.data);
      } catch (error) {
        console.log('Error fetching company details:', error);
      }
    }
    getdata();
  }, []);
  async function deletecompany(id) {
    try {
      await axios.delete(`http://localhost:5000/adminapis/deleteproduct/${id}`);
      setProfile(Profile.filter(profile => profile._id !== id));
    } catch (error) {
      console.log('Error deleting company:', error);
    }
}
  return (
    <div>
    <Sidebar />
    <div className="row">
      <div className="col-9 m-auto">
        <div className="users">
          <Table responsive="sm">
            <thead>
              <tr>
                <th>Sl.No</th>
                <th>Company Name</th>
                <th>Product Name</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {Profile && Profile.length > 0 ? (
                Profile.map((item, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{item.companyname}</td>
                    <td>{item.productname}</td>
                    <td>{item.offerprice}</td>
                    <td>
                      <button className="btn btn-danger" onClick={() => deletecompany(item._id)}>Delete</button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4">Loading....</td>
                </tr>
              )}
            </tbody>
          </Table>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Productlist
