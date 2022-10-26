import { useEffect, useState } from 'react';
import axios from 'axios';

const ShowEmployees = () => {

  const [employees, setEmployees] = useState([]);

  const getEmployees = () => {
    axios.get('http://127.0.0.1:5000/api/employee/getAll')
      .then(res => {
        console.log(res);
        if(res.status === 200)
          setEmployees(res.data);
      })
      .catch(err => console.log(err))
  };

  useEffect(() => {
    getEmployees();
    console.log(employees);
  },[])

  return (
    <div>
      <ul>
        {
          (employees.length > 0) && employees.map(employee => {
            return (
              <li key={employee.id}>
                <p>{employee.name}</p>
              </li>
            )
          })
        }
      </ul>
    </div>
  );
}

export default ShowEmployees;