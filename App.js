import React, { useState } from 'react';
import './App.css';  

function App() {
  const [employeeData, setEmployeeData] = useState({
    hiringDate: '',
    terminationDate: '',
    salary: '',
    role: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployeeData({ ...employeeData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Employee Data:', employeeData);
  };

  return (
    <div className="container"> 
      <h1>Informações do Funcionário</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="hiringDate">Data de Contratação:</label>
          <input
            type="date"
            id="hiringDate"
            name="hiringDate"
            value={employeeData.hiringDate}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="terminationDate">Data de Demissão:</label>
          <input
            type="date"
            id="terminationDate"
            name="terminationDate"
            value={employeeData.terminationDate}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="salary">Salário:</label>
          <input
            type="number"
            id="salary"
            name="salary"
            value={employeeData.salary}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="role">Função:</label>
          <input
            type="text"
            id="role"
            name="role"
            value={employeeData.role}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default App;
