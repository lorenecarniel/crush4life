import React from 'react';
import './styles.css';
import { backLight, signupPageImg, logoTextImg, logoImg } from '../../assets/image';

const SigninPage: React.FC = () => {
    return (
        <div id="signin-page">
            <div className="left-side">
                <div className="back-page">
                    <img src={backLight} alt="Voltar" />
                    <span>Voltar</span>
                </div>
                <div className="text">
                    <span id="style-1">Crie já sua conta</span>
                    <span id="style-2">Mais de 1.000 contatinhos criados!</span>
                </div>
                <img id="register" src={signupPageImg} alt="Registrar" />
            </div>
            <div className="right-side">
                <div className="logo">
                    <img  src={logoTextImg} alt="Texto do Logo" />
                    <img  src={logoImg} alt="Logo" />
                </div>
                <div className="input-container">
                    <span>Nome</span>
                    <input type="text"/>
                    <span>Email</span>
                    <input type="text"/>
                    <span>Senha</span>
                    <input type="password"/>
                    <span>Confirmar senha</span>
                    <input type="password"/>
                    <button>
                     Cadastrar
                    </button>
                </div>
            </div>
        </div>
    );
}

export default SigninPage;