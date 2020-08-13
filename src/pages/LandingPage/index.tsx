import React from 'react';
import './styles.css'
import { logoImg, logoTextImg, landingImg } from '../../assets/image';

const LandingPage: React.FC = () => {
  return (
      <div id="landing-page">
          <div className="header">
              <img src={logoImg} alt="Logo"/>
              <img src={logoTextImg} alt="Nome do site"/>
              <div className="avatar">
                <img src="https://lh3.googleusercontent.com/ogw/ADGmqu87rEkerj22iMndQbioquMjZLNqcZgGHVowwQ1R=s83-c-mo" alt="Usuário"/>
              </div>
          </div>
          <img src={landingImg} alt="Ilustração"/>
      </div>
  );
}

export default LandingPage;