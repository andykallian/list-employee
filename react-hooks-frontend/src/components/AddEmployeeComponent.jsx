import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import employeeServices from '../services/employeeServices';


const AddEmployeeComponent = () => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [emailId, setEmailId] = useState('');
    const navigate = useNavigate();
    const { id } = useParams();
  
    const saveOrUpdateEmployee = (e) => {
      e.preventDefault();
  
      const employee = { firstName, lastName, emailId };
  
      if (id) {
        employeeServices
          .updateEmployee(id, employee)
          .then((response) => {
            navigate('/employees');
          })
          .catch((error) => {
            console.log(error);
          });
      } else {
        employeeServices
          .createEmployee(employee)
          .then((response) => {
            navigate('/employees');
          })
          .catch((error) => {
            console.log(error);
          });
      }
    };

    useEffect(() => {
        if(id){
            employeeServices.getEmployeeById(id).then((response) => {
                const { firstName, lastName, emailId } = response.data;
    
                setFirstName(firstName);
                setLastName(lastName);
                setEmailId(emailId);
            })
            .catch((error) => {
                console.log(error);
            });
        }
    }, [id]);

    const title = () =>{
        if(id){
            return <h2 className="text-center">Update Employee</h2>
        }else{
            return <h2 className="text-center">Add Employee</h2>
        }
    }
    

    return (
        <div>
            <br />
            <div className="container">
                <div className="row">
                    <div className="card col-md-6 offset-md-3 offset-md-3">
                        {
                            title()
                        }
                        <div className="card-body">
                            <form action="">
                                <div className="form-group mb-2">
                                    <label htmlFor="" className="form-label"> First Name :</label>
                                    <input 
                                        type="text"
                                        placeholder="Enter first name"
                                        name="firstName"
                                        className="form-control"
                                        value={firstName}
                                        onChange={(e) => setFirstName(e.target.value)} />
                                </div>

                                <div className="form-group mb-2">
                                    <label htmlFor="" className="form-label"> Last Name :</label>
                                    <input 
                                        type="text"
                                        placeholder="Enter last name"
                                        name="lastName"
                                        className="form-control"
                                        value={lastName}
                                        onChange={(e) => setLastName(e.target.value)} />
                                </div>

                                <div className="form-group mb-2">
                                    <label htmlFor="" className="form-label"> Email Id :</label>
                                    <input 
                                        type="email"
                                        placeholder="Enter email id"
                                        name="emailId"
                                        className="form-control"
                                        value={emailId}
                                        onChange={(e) => setEmailId(e.target.value)} />
                                </div>

                                <button className="btn btn-success" onClick={(e) => saveOrUpdateEmployee(e)}>
                                    Submit   
                                </button>
                                <Link to="/employees" className='btn btn-danger'> Cancel</Link>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddEmployeeComponent