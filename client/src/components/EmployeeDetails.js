import axios from 'axios';
import { useState } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { useEmpContext } from '../context/employeeContext';

const EmployeeDetails = ({ employee, setEmployee , setDetailsToggle }) => {

  const {employees, setEmployees} = useEmpContext();
  const [editOn, setEditOn] = useState(false);
  const [editEmployee, setEditEmployee] = useState({ ...employee });

  const handleSave = () => {
    if(JSON.stringify(editEmployee) !== JSON.stringify(employee)){
      axios.patch(`http://127.0.0.1:5000/api/employee/update`, editEmployee)
      .then (res => {
        setEmployee(editEmployee);
        setEmployees([...employees.filter(emp => emp.id !== editEmployee.id), editEmployee]);
      })
      .catch (e => console.log(e))
    }
    
    setEditOn(false);
  };

  return (
    <section className="details-section">
      <button className="close-btn" onClick={() => setDetailsToggle(false)}>
        <AiOutlineCloseCircle />
      </button>
      {
        <div className="emp-details">
          <div>
            <span>Name: </span>{" "}
            {editOn ? (
              <input
                type="text"
                value={editEmployee.name}
                onChange={(e) =>
                  setEditEmployee({ ...editEmployee, name: e.target.value })
                }
              />
            ) : (
              employee.name
            )}
          </div>
          <div>
            <span>Age: </span>{" "}
            {editOn ? (
              <input
                type="number"
                value={editEmployee.age}
                onChange={(e) =>
                  setEditEmployee({ ...editEmployee, age: e.target.value })
                }
              />
            ) : (
              employee.age
            )}
          </div>
          <div>
            <span>Country: </span>{" "}
            {editOn ? (
              <input
                type="text"
                value={editEmployee.country}
                onChange={(e) =>
                  setEditEmployee({ ...editEmployee, country: e.target.value })
                }
              />
            ) : (
              employee.country
            )}
          </div>
          <div>
            <span>Position: </span>{" "}
            {editOn ? (
              <input
                type="text"
                value={editEmployee.position}
                onChange={(e) =>
                  setEditEmployee({ ...editEmployee, position: e.target.value })
                }
              />
            ) : (
              employee.position
            )}
          </div>
          <div>
            <span>Wage: </span>{" "}
            {editOn ? (
              <input
                type="text"
                value={editEmployee.wage}
                onChange={(e) =>
                  setEditEmployee({ ...editEmployee, wage: e.target.value })
                }
              />
            ) : (
              `$${employee.wage}`
            )}
          </div>
          <div className="details-btn-group">
            {editOn && (
              <button className="save-btn" onClick={handleSave}>
                Save
              </button>
            )}
            <button
              className={editOn ? `edit-btn editOn` : "edit-btn"}
              onClick={() => setEditOn(!editOn)}
            >
              {editOn ? "Cancel" : "Edit"}
            </button>
          </div>
        </div>
      }
    </section>
  );
};

export default EmployeeDetails;
