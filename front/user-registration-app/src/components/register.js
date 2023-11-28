import React, { useState } from 'react';
import axios from 'axios';

export const Register = () => {
    const [formData, setFormData] = useState({
      nome: '',
      email: '',
      senha: '',
    });
  
    const [errorMessage, setErrorMessage] = useState('');
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      axios.post('http://localhost:3001/User/register', formData)
      .then((response) => {
        
            if (response.status === 201) {
              console.log('Usuário cadastrado com sucesso:', response.data);
              setErrorMessage('');
            } else {
              throw new Error('Erro ao cadastrar usuário');
            }
      
            alert(`Seu login e senha são: \nEmail: ${formData.email}\nSenha: ${formData.senha}`);
      
            setFormData({
              nome: '',
              email: '',
              senha: '',
            });
        })
      .catch((error) => {
        console.error('Erro ao cadastrar usuário:', error);
        setErrorMessage('Email já existe. Por favor, use um e-mail diferente.');
      });
  };
  
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  
    const styles = {
      fontFamily: 'Arial, sans-serif',
      backgroundColor: '#f4f4f4',
      margin: 0,
      padding: 0,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
    };
  
    const containerStyles = {
      backgroundColor: '#fff',
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
      borderRadius: '8px',
      overflow: 'hidden',
      width: '400px',
      maxWidth: '100%',
      padding: '20px',
      boxSizing: 'border-box',
      transition: 'transform 0.3s ease-in-out',
    };
  
    const labelStyles = {
      marginBottom: '8px',
      color: '#555',
    };
  
    const inputStyles = {
      padding: '10px',
      marginBottom: '16px',
      border: '1px solid #ccc',
      borderRadius: '4px',
      transition: 'border-color 0.3s ease-in-out',
    };
  
    const buttonStyles = {
      backgroundColor: '#4CAF50',
      color: '#fff',
      padding: '12px',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
      transition: 'background-color 0.3s ease-in-out',
    };
  
    return (
      <div style={styles}>
        <div className="container" style={containerStyles}>
          <h2 style={{ textAlign: 'center', color: '#333' }}>Cadastro de Usuário</h2>
  
          {errorMessage && (
            <p style={{ color: 'red', textAlign: 'center', marginBottom: '10px' }}>{errorMessage}</p>
          )}
  
          <form style={{ display: 'flex', flexDirection: 'column' }} onSubmit={handleSubmit}>
            <label htmlFor="nome" style={labelStyles}>Nome de usuário:</label>
            <input type="text" id="nome" name="nome" value={formData.nome} onChange={handleChange} required style={inputStyles} />
  
            <label htmlFor="email" style={labelStyles}>E-mail:</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required style={inputStyles} />
  
            <label htmlFor="senha" style={labelStyles}>Senha:</label>
            <input type="password" id="senha" name="senha" value={formData.senha} onChange={handleChange} required style={inputStyles} />
  
  
            <button type="submit" style={buttonStyles}>Cadastrar</button>
          </form>
        </div>
      </div>
    );
  };