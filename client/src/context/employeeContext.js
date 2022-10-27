import React, { useContext, useState, useEffect, useRef } from "react";
import axios from "axios";

const EmployeeContext = React.createContext();

const EmpProvider = ({children}) => {

  const [employees, setEmployees] = useState([]);
  const [filterQuery, setFilterQuery] = useState('');
  const inputRef = useRef();

  const filterEmployees = employees.filter((emp) => {
    return emp.name.toLowerCase().includes(filterQuery.toLowerCase());
  })

  const handleDeleteEmployee = (id) => {

    setEmployees(employees.filter(emp => emp.id != id));

    axios.delete(`http://127.0.0.1:5000/api/employee/delete/${id}`)
    .then(res => {
      console.log(res);
    })
    .catch(e => console.log(e))
  }

  const getEmployees = () => {
    axios.get('http://127.0.0.1:5000/api/employee/getAll')
      .then(res => {
        if(res.status === 200)
          setEmployees(res.data);
      })
      .catch(err => console.log(err))
  };

  useEffect(() => {
    getEmployees();
  },[])

  return (
    <EmployeeContext.Provider value={{ filterEmployees, employees, setEmployees, inputRef, filterQuery, setFilterQuery, handleDeleteEmployee}}>
      {children}
    </EmployeeContext.Provider>
  )
}

const useEmpContext = () => {
  return useContext(EmployeeContext);
}

export {useEmpContext, EmpProvider};