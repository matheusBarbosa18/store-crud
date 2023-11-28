import React, { useState } from 'react';
import axios from 'axios';

export const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    senha: '',
  });

  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post('http://localhost:3001/User/login', formData)
        .then((response) => {
           if (response.data) {
             console.log('Usuário logado com sucesso:', response.data);
             setErrorMessage('');
           } 
          setFormData({
            email: '',
            senha: '',
          });
        })
    } catch (error) {
        console.log('Dados inválidos!');
        setErrorMessage('');
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const styles = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    background: '#f5f5f5',
  };

  const containerStyles = {
    width: '400px',
    padding: '20px',
    background: '#fff',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  };

  const labelStyles = {
    color: '#333',
    marginBottom: '8px',
  };

  const inputStyles = {
    padding: '8px',
    marginBottom: '16px',
    border: '1px solid #ccc',
    borderRadius: '4px',
  };

  const buttonStyles = {
    background: '#4caf50',
    color: '#fff',
    padding: '10px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  };

  return (
    <div style={styles}>
      <div className="container" style={containerStyles}>
        <h2 style={{ textAlign: 'center', color: '#333' }}>Login</h2>

        {errorMessage && (
          <p style={{ color: 'red', textAlign: 'center', marginBottom: '10px' }}>{errorMessage}</p>
        )}

        <form style={{ display: 'flex', flexDirection: 'column' }} onSubmit={handleSubmit}>
          <label htmlFor="email" style={labelStyles}>
            E-mail:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            style={inputStyles}
          />

          <label htmlFor="senha" style={labelStyles}>
            Senha:
          </label>
          <input
            type="password"
            id="senha"
            name="senha"
            value={formData.senha}
            onChange={handleChange}
            required
            style={inputStyles}
          />

          <button type="submit" style={buttonStyles}>
            Entrar
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
