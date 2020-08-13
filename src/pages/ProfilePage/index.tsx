import React from 'react';
import './styles.css'
import { logoImg, backDark, profilePageImg } from '../../assets/image';

const ProfilePage: React.FC = () => {
  return (
      <div id="profile-page">
          <div className="header">
              <div className="back-page">
                  <img src={backDark} alt="Voltar" />
                  <span>Voltar</span>
              </div>
              <img src={logoImg} alt="Logo"/>
              
          </div>
          <div className="profile">
            <div className="avatar">
              <img src="https://lh3.googleusercontent.com/ogw/ADGmqu87rEkerj22iMndQbioquMjZLNqcZgGHVowwQ1R=s83-c-mo" alt="Usuário"/>
            </div>
            <div className="input-container">
              <span>Nome</span>
              <input type="text"/>
              <span>Idade</span>
              <input type="text"/>
              <span>Email</span>
              <input type="text"/>
              <span>Celular</span>
              <input type="text"/>
              <span>Biografia</span>
              <input type="text"/>
            </div>
            <div className="buttons">
              <button id="button-1">
                Excluir conta
              </button>
              <button id="button-2">
                Salvar
              </button>
            </div>
          </div>
      </div>
  );
}

export default ProfilePage;