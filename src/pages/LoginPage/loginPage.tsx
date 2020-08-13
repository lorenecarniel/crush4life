import React from 'react';
import './styles.css';
import { logoTextImg, logoImg, loginPageImg } from '../../assets/image';

const LoginPage: React.FC = () => {
  return (
    <div id="login-page">
      <div className="header">
        <div className="logo">
          <img src={logoTextImg} alt="Texto do Logo"/>
          <img id="logo-icon" src={logoImg} alt="Logo"/>
        </div>
        <button>
          Cadastrar
        </button>  
      </div>
      <span id="text">
          Encontre o contatinho da sua vida
      </span>
      <div className="body-container">
        <div className="login">
          <span>Email</span>
          <input type="text"/>
          
          <span>Senha</span>
          <input type="password"/>
          
          <div className="checkbox">
            <input type="checkbox"/>
            <span>Lembrar-me</span>
          </div>

          <button>
            Entrar
          </button>
        </div>
        <div className="illustration">
          <img src={loginPageImg} alt="Ilustração"/>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;