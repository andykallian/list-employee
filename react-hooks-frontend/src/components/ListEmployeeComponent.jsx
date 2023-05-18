import React, {useState, useEffect} from 'react';
import employeeServices from '../services/employeeServices';
import {Link} from 'react-router-dom';

const ListEmployeeComponent = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    getAllEmployess()
  }, []);

  const getAllEmployess = () =>{
    employeeServices
      .getAllEmployees()
      .then((response) => {
        setEmployees(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  const deleteEmployee = (employeeId) =>{
    employeeServices.deleteEmployee(employeeId)
        .then((response) =>{
            getAllEmployess()
        }).catch(error =>{
            console.log(error);
        })
  }

  return (
    <div className="container">
        <h2 className="text-center">List Employees</h2>
        <Link to="/add-employees" className="btn btn-primary mb-2">
            Add Employee
        </Link>
        <div className="table-responsive">
            <table className="table table-bordered table-striped">
            <thead>
                <tr>
                <th>Employee Id</th>
                <th>Employee First Name</th>
                <th>Employee Last Name</th>
                <th>Employee Email Id</th>
                <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {employees.map((employee) => (
                <tr key={employee.id}>
                    <td>{employee.id}</td>
                    <td>{employee.firstName}</td>
                    <td>{employee.lastName}</td>
                    <td>{employee.emailId}</td>
                    <td>
                        <Link className="btn btn-info" to={`/edit-employee/${employee.id}`}>Update</Link>
                        <button className="btn btn-danger" onClick= {() =>{
                            deleteEmployee(employee.id)
                        }} style={{marginLeft:"10px"}}>Delete</button>
                    </td>
                </tr>
                ))}
            </tbody>
            </table>
        </div>
    </div>
  );
};

export default ListEmployeeComponent;
