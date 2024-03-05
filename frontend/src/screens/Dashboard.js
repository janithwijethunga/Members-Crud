import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Dashboard() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [mem, setMem] = useState([]);

  async function addMember() {
    const newMember = { name, email, password, phone, address };
    console.log(newMember);

    try {
      const result = await axios.post("http://localhost:5001/api/mem/dashboard", newMember);
      console.log(result.data);
      alert("Member added successfully");
    } catch (error) {
      console.log(error);
    }
  }

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/mem/getallmem");
      setMem(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
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
  );
}

export default Dashboard;
