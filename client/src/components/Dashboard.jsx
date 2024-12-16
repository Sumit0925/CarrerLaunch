import React, { useEffect, useState } from "react";
import "./assets/Dashboard.css"
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { MdDeleteOutline } from "react-icons/md";
import DataTable from 'react-data-table-component';

function Dashboard() {
  const [suc, setSuc] = useState();
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();
  axios.defaults.withCredentials = true;

  useEffect(() => {
    axios
      .get("http://localhost:3001/dashboard")
      .then((res) => {
        if (res.data === "success") {
          setSuc("Succeeded OK");
        } else {
          navigate("/");
        }
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:3001/getUsers")
      .then((users) => setUsers(users.data))
      .catch((err) => console.log(err));
  }, []);

  const deleteUser = async (userId) => {
    await axios
      .delete(`http://localhost:3001/deleteUser/${userId}`)
      .then((res) => {
        setUsers((prevUser) => prevUser.filter((user) => user._id !== userId));
        console.log(res);
      })
      .catch((err) => console.log(err));
  };

  // const column = [
  //   {
  //     name: 'S.No.',
  //     selector: (row, index) => index+1,
      
  //   },
  //   {
  //     name: 'Name',
  //     selector: row => row.name,
  //     sortable: true
  //   },
  //   {
  //     name: 'Email',
  //     selector: row => row.email
  //   },
  //   {
  //     name: 'CollegeId',
  //     selector: row => row.rollno,
  //     sortable: true
  //   },
  //   {
  //     name: 'Branch',
  //     selector: row => row.branch,
  //     sortable: true
  //   },
  //   {
  //     name: 'Delete',
  //     cell: (row) => (row.role === "visitor" &&
  //       (<button onClick={() => deleteUser(row._id)}>
  //         <MdDeleteOutline />
  //       </button>)
  //     ),
  //     ignoreRowClick: true
    
          
  //   },
    
  // ];

  // const customStyles ={
  //   headRow: {
  //     style: {
  //       backgroundColor: '#1687d9',
  //       color: 'white'
  //     },
  //   },
  //   headCells: {
  //     style: {
  //       fontSize: '16px',
  //       fontWeight: '600',
  //       textTransform: 'uppercase',
  //     },
  //   },
  //   cells: {
  //     style: {
  //       fontSize: '15px',
  //     },
  //   },
  // };



  return (
    <div className="">
      <div className="dashboard-heading">Admin Dashboard</div>
      <div className="admin-table-wrapper rounded-lg display-flex justify-center overflow-hidden border border-blue-600">
        <table className="dashboard-table w-full text-black-500 ">
          <thead className="dashboard-table-head table-head border-b-2 border-blue-600">
            <tr >
              <th id='admin-table-heading'>Name</th>
              <th id='admin-table-heading'>Email</th>
              <th id='admin-table-heading'>College Id</th>
              <th id='admin-table-heading'>Branch</th>
              <th id='admin-table-heading'>&#10060;</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, idx) => {
              return (
                <tr  id='table-row-heading' className='border-b-2 border-blue-600 m-2 ' key={idx}>
                  <td id="serialno" className=' border-blue-600  p-1 pl-5 text-center' >{user.name}</td>
                  <td className="text-center">{user.email}</td>
                  <td className="text-center">{user.rollno}</td>
                  <td className="text-center">{user.branch}</td>
                  {user.role === "visitor" && (
                    <td className="text-center">
                      <button onClick={() => deleteUser(user._id)}>
                        <MdDeleteOutline />
                      </button>
                    </td>
                  )}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      
   {/* <DataTable 
   columns={column}
   data={users}
   customStyles={customStyles}
  //  selectableRows
   
   ></DataTable> */}

    </div>
  );
}

export default Dashboard;
