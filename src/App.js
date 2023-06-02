import React, { useState } from 'react';
import './style.css';

function App() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="App">
      <h1>Formularz rejestracyjny</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="firstName">Imię:</label>
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          required
        />
        <br />
        <label htmlFor="lastName">Nazwisko:</label>
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          required
        />
        <br />
        <label htmlFor="email">Adres e-mail:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <br />
        <button type="submit">Zarejestruj się</button>
      </form>
    </div>
  );
}

export default App;
