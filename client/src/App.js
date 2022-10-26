import { useState } from 'react';
import AddEmployee from './components/AddEmployee';
import ShowEmployees from './components/ShowEmployees';
import { AiOutlineUserAdd, AiOutlineCloseCircle } from 'react-icons/ai';
import { useEmpContext } from './context/employeeContext';
import EmployeeDetails from './components/EmployeeDetails';

function App() {
  const [detailsToggle, setDetailsToggle] = useState(false);
  const [employee, setEmployee] = useState({});
  const [addPage, setAddPage] = useState(false);
  const { inputRef, filterQuery, setFilterQuery } = useEmpContext();
  const handleAddEmp = () => {
    setAddPage(!addPage);
  }

  return (
    <div>
      <header className="header">
        <h2>Employees</h2>
        <input className='search' type="text" ref={inputRef} value={filterQuery} onChange={e => setFilterQuery(e.target.value)} />
        <button className='toggle-btn' onClick={handleAddEmp}>{ addPage ? <AiOutlineCloseCircle /> : <AiOutlineUserAdd /> }</button>
      </header>
      {
        addPage && <AddEmployee />
      }
      <ShowEmployees setEmployee={setEmployee} setDetailsToggle={setDetailsToggle} />
      {
        detailsToggle && <EmployeeDetails employee={employee} setDetailsToggle={setDetailsToggle}/>
      }
    </div>
  )
}

export default App;
