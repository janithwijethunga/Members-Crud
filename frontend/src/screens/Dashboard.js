import React from "react";

function Dashboard() {
  return (
    <table className=" border-8 border-gray-500/100 mx-44 mt-44 ml-56">
      <thead className="border-8">
        <tr>
          <th className="px-8 py-4">ID</th>
          <th className="px-8 py-4">Name</th>
          <th className="px-8 py-4">Email</th>
          <th className=" py-4">Password</th>
          <th className=" py-4">Phone Number</th>
          <th className=" py-4">Address</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>001</td>
          <td>Janith</td>
          <td>janith@gmail.com</td>
          <td>123456</td>
          <td>0712345678</td>
          <td>Haguranketha, Kandy</td>
        </tr>
        
      </tbody>
    </table>
  );
}

export default Dashboard;
