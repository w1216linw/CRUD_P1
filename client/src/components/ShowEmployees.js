
import { useEmpContext } from "../context/employeeContext";

const ShowEmployees = ({ setEmployee, setDetailsToggle }) => {

  const {filterEmployees, handleDeleteEmployee} = useEmpContext();

  const handleMore = (employee) => {
    setEmployee(employee);
    setDetailsToggle(true);
  }

  return (
    <div>
      <ul>
        {
          (filterEmployees.length > 0) && filterEmployees.map(employee => {
            return (
              <li className="single-emp" key={employee.id}>
                <p>{employee.name}</p>
                <p>{employee.position}</p>
                <div className="emp-btn">
                  <button onClick={() => handleMore(employee) }>More</button>
                  <button onClick={() => handleDeleteEmployee(employee.id) }>Delete</button>
                </div>
              </li>
            )
          })
        }
      </ul>
    </div>
  );
}

export default ShowEmployees;