import { AiOutlineCloseCircle } from 'react-icons/ai';


const EmployeeDetails = ({employee, setDetailsToggle }) => {
  return (
    <section className="details-section">
          <button className="close-btn" onClick={() => setDetailsToggle(false)}><AiOutlineCloseCircle /></button>
      <div className="emp-details">
          <h3><span>Name: </span>{employee.name}</h3>
          <h3><span>Age: </span>{employee.age}</h3>
          <h3><span>Country: </span>{employee.country}</h3>
          <h3><span>Position: </span>{employee.position}</h3>
          <h3><span>Wage: $</span>{employee.wage}</h3>
      </div>
    </section>
  );
};

export default EmployeeDetails;