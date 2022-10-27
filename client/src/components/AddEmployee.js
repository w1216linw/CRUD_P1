import { useState } from 'react';
import axios from 'axios'
import { useEmpContext } from '../context/employeeContext';

const AddEmployee = () => {

  const { employees, setEmployees } = useEmpContext();
  const [name, setName] = useState("");
  const [age, setAge] = useState('');
  const [country, setCountry] = useState("");
  const [position, setPosition] = useState("");
  const [wage, setWage] = useState('');

  const handleInputs = (e) => {
    switch(e.target.id) {
      case 'em-name':
        setName(e.target.value);
        break;
      case 'em-age':
        setAge(e.target.value);
        break;
      case 'em-country':
        setCountry(e.target.value);
        break;
      case 'em-position':
        setPosition(e.target.value);
        break;
      case 'em-wage':
        setWage(e.target.value);
        break;
      default:
        break;
    }
  }

  const handleSubmit = () => {
    axios.post('http://127.0.0.1:5000/api/employee/create', {name, age, country, position, wage})
    .then( () => {
      console.log(employees);
      setEmployees([...employees , {name, age, country, position, wage}])
      console.log("Success");
      setAge('');
      setCountry('');
      setName('');
      setPosition('');
      setWage('');
    })
    .catch( e => {
      console.log(e);
    })
  }

  return (
      <div className="em-info">
        <label htmlFor="em-name">Name:</label>
        <input id="em-name" type="text" value = {name} onChange={handleInputs}/>
        <label htmlFor="em-age">Age:</label>
        <input id="em-age" type="number" value={age} onChange={handleInputs}/>
        <label htmlFor="em-country">Country:</label>
        <input id="em-country" type="text" value={country} onChange={handleInputs} />
        <label htmlFor="em-position">Position:</label>
        <input id="em-position" type="text" value={position} onChange={handleInputs} />
        <label htmlFor="em-wage">Wage (year):</label>
        <input id="em-wage" type="number" value={wage} onChange={handleInputs} />
        <br />
        <button className='sub-btn' onClick={handleSubmit}>Add Employee</button>
      </div>
  );
}

export default AddEmployee;