import { useState } from 'react';
import AddEmployee from './components/AddEmployee';
import ShowEmployees from './components/ShowEmployees';

function App() {

  const [addPage, setAddPage] = useState(false);

  const handleAddEmp = () => {
    setAddPage(!addPage);
  }

  return (
    <div>
      <header className="header">
        <h2>Employees</h2>
        <button onClick={handleAddEmp}>{ addPage ? 'X' : '+'}</button>
      </header>
      {
        addPage && <AddEmployee />
      }
      <ShowEmployees />
    </div>
  )
}

export default App;
