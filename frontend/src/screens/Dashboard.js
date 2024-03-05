import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Dashboard() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    address: "",
    city: ""
  });

  const [mem, setMem] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:5001/api/mem/getallmembers");
      setMem(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async () => {
    try {
      const result = await axios.post("http://localhost:5001/api/mem/dashboard", formData);
      console.log(result.data);
      alert("Member added successfully");
      setFormData({
        name: "",
        email: "",
        password: "",
        phone: "",
        address: "",
        city: ""
      });
      fetchData(); // Refresh the table after adding a new member
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h2>Add New Member</h2>
      <form>
        <div>
          <label>Name:</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" name="password" value={formData.password} onChange={handleChange} required />
        </div>
        <div>
          <label>Phone:</label>
          <input type="text" name="phone" value={formData.phone} onChange={handleChange} required />
        </div>
        <div>
          <label>Address:</label>
          <input type="text" name="address" value={formData.address} onChange={handleChange} required />
        </div>
        <div>
          <label>City:</label>
          <input type="text" name="city" value={formData.city} onChange={handleChange} required />
        </div>
        <button className="relative flex h-12 items-center justify-center rounded-md text-center text-base font-medium bg-[#3C46FF] text-[#fff] hover:bg-[#0000FF]" type="button" onClick={handleSubmit}>Submit</button>
      </form>
      
      <h2>Member List</h2>
      <table className="border-8 border-gray-500/100 mx-44 mt-44 ml-56">
        <thead className="border-8">
          <tr>
            <th className="px-8 py-4">ID</th>
            <th className="px-8 py-4">Name</th>
            <th className="px-8 py-4">Email</th>
            <th className="px-8 py-4">Password</th>
            <th className="px-8 py-4">Phone Number</th>
            <th className="px-8 py-4">Address</th>
            <th className="px-8 py-4">Actions</th>
          </tr>
        </thead>

        <tbody>
          {mem.map((member) => (
            <tr key={member._id} className="bg-white dark:bg-table-row hover:tablerow-hover dark:hover:bg-tablerow-hover">
              <td>{member._id}</td>
              <td>{member.name}</td>
              <td>{member.email}</td>
              <td>{member.password}</td>
              <td>{member.phone}</td>
              <td>{member.address}</td>
              <td>
                <Link to="#">
                  <button className="btn1 mr-3">Edit</button>
                </Link>
                <Link to="#">
                  <button className="btn1">Delete</button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Dashboard;
