

import React, { useState } from 'react';
import {IonImg,IonAlert,IonButton,IonItem,IonLabel,IonInput, IonContent, IonHeader, IonButtons, IonPage, IonTitle, IonToolbar ,IonBackButton, IonBackdrop} from '@ionic/react';

import './falcoflexworksolutions.css';

//public/falcoflexs.png
import  logow from '../../../public/falcoflexs.png';



const FalcoflexWorkSolutions: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const [loginMessage, setLoginMessage] = useState('');
  const handleLogin = () => {
    // Aquí puedes implementar la lógica de autenticación vea app aqui  o la base de datos 
    if (email === 'admin@admin.com' && password === 'admin') {
      setLoginMessage('Login correcto');
      window.location.href = "/falcocr";
      
    }
      else {
          setLoginMessage('Usuario o contraseña incorrectos');
      }
      setShowAlert(true);
  
  
  }


  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color={'tertiary'}>
          <IonButtons slot="start">
          <IonBackButton defaultHref="/home"></IonBackButton>
          </IonButtons>
          <IonTitle>Falco flex Work Solutions</IonTitle>
        </IonToolbar>
      </IonHeader  >
      <IonContent    >
      
      <h1 style={{textAlign: 'center'}}> Login cliente </h1>
      <IonButton    className="login-buttonn" id="present">Servicio para especialistas</IonButton>
     
      <div className="login-container">
      
      <IonImg src={logow} class='custom-imgg'  />

        <IonItem className="login-input">
          <IonLabel position='stacked'>Email</IonLabel>
          <IonInput type="email" value={email} onIonChange={e => setEmail(e.detail.value!)} />
        </IonItem>
        <IonItem className="login-input">
          <IonLabel position='stacked'>Password</IonLabel>
          <IonInput type="password" value={password} onIonChange={e => setPassword(e.detail.value!)} />
        </IonItem>
        <a  href="#" className='atexto'>¿Olvidaste tu contraseña?</a><br></br>
        <IonButton expand="block" onClick={handleLogin} className="login-button">Login</IonButton>
        <IonButton expand="block" onClick={() => window.location.href = "/Crearcuentafwc"} className="login-button">Crear cuenta</IonButton>
        
      </div>
      <div>
      
      </div>

      <IonAlert
        trigger="present"
        header="Servicio para especialista"
       
        message="¿Eres un especialista y deseas ofrecer tus servicios en nuestra plataforma? ¡Regístrate ahora!"
        buttons={[
          {
            text: 'No',
            cssClass: 'alert-button-cancel',
           
          },
          {
            text: 'Yes',
            cssClass: 'alert-button-confirm',
            handler: () => {
              window.location.href = "/especialistalogin";
            }
          },
        ]}
      ></IonAlert>
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
