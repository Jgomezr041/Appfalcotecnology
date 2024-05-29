

import React, { useState } from 'react';
import {IonImg,IonAlert,IonButton,IonItem,IonLabel,IonInput, IonContent, IonHeader, IonButtons, IonPage, IonTitle, IonToolbar ,IonBackButton, IonBackdrop} from '@ionic/react';

import './falcoflexworksolutions.css';






const FalcoflexWorkSolutions: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const [loginMessage, setLoginMessage] = useState('');
  const handleLogin = () => {
    // Aquí puedes implementar la lógica de autenticación vea app aqui deb
    if (email === 'admin@admin.com' && password === 'admin') {
      setLoginMessage('Login correcto');
      window.location.href = "/falcocrw";
      
    }
      else {
          setLoginMessage('Usuario o contraseña incorrectos');
      }
      setShowAlert(true);
  
  
  }
  const handleLoginnn = () => {
    window.location.href = "/Crearcuentafwork";
    return;
}

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color={'tertiary'}>
          <IonButtons slot="start">
          <IonBackButton defaultHref="/falcoflexworksolutions"></IonBackButton>
          </IonButtons>
          <IonTitle>Falco flex Work Solutions</IonTitle>
        </IonToolbar>
      </IonHeader  >
      <IonContent    >
      
      <h1 style={{textAlign: 'center'}}> Login  especialista</h1>
      <div className="login-container">
      <IonImg src="public/falcoflexs.png
          " class='custom-imgg'  />

        <IonItem className="login-input">
          <IonLabel position="floating">Email</IonLabel>
          <IonInput type="email" value={email} onIonChange={e => setEmail(e.detail.value!)} />
        </IonItem>
        <IonItem className="login-input">
          <IonLabel position="floating">Password</IonLabel>
          <IonInput type="password" value={password} onIonChange={e => setPassword(e.detail.value!)} />
        </IonItem>
        <a  href="#" className='atexto'>¿Olvidaste tu contraseña?</a><br></br>
        <IonButton expand="block" onClick={handleLogin} className="login-button">Login</IonButton>
        <IonButton expand="block" onClick={handleLoginnn} className="login-button">Crear cuenta</IonButton>
      </div>
       
      <IonAlert
        isOpen={showAlert}
        onDidDismiss={() => setShowAlert(false)}
        header={'Mensaje'}
        message={loginMessage}
        buttons={['OK']}
      />

      </IonContent >
    </IonPage>
  );
};

export default FalcoflexWorkSolutions;
