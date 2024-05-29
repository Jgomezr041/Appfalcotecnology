import React, { useState } from 'react';
import {IonImg, IonText,IonAlert,IonButton,IonItem,IonLabel,IonInput, IonContent, IonHeader, IonButtons, IonPage, IonTitle, IonToolbar ,IonBackButton, IonBackdrop, useIonRouter} from '@ionic/react';

import './falcomarketplace.css';



var texto = "Bienvenido a Falco marketplace";

    const Falcomarklogin: React. FC = () => {
        const [email, setEmail] = useState('');
        const [password, setPassword] = useState('');
        const [showAlert, setShowAlert] = useState(false);
        const [loginMessage, setLoginMessage] = useState('');
        const [lMessage, setLMessage] = useState('');

        const navigation  = useIonRouter( )
    const handleLogin = () => {
       
         // Aquí puedes implementar la lógica de autenticación vea app
  if (email === 'admin@admin.com' && password === 'admin') {
    setLoginMessage('Login correcto');
    navigation.push('/app', 'root', 'replace')
   
    
  }
    else {
        setLoginMessage('Usuario o contraseña incorrectos');
        
       
    }
    setShowAlert(true);


};
const handleLoginn = () => {
    window.location.href = "/falompcreatcuenta";
    return;
}
       
    

    return(
   <IonPage>
        <IonHeader>
        <IonToolbar color={'tertiary'}>
          <IonButtons slot="start">
          <IonBackButton defaultHref="/Home"></IonBackButton>
          </IonButtons>
          <IonTitle>Falco marketplace</IonTitle>
        </IonToolbar>
      </IonHeader  >
    <IonContent    >
    <h1 className='texto'>{texto}  </h1>
      <br></br><br></br>
      <div className="login-container">
      <IonImg src="public/logom.png
          " class='custom-imgg' /> <br></br>
        <IonItem className="login-input">
          <IonLabel position='stacked'>Email</IonLabel>
          <IonInput type="email" value={email} onIonChange={e => setEmail(e.detail.value!)} />
        </IonItem>
        <IonItem className="login-input">
          <IonLabel position="stacked">Password</IonLabel>
          <IonInput type="password" value={password} onIonChange={e => setPassword(e.detail.value!)} />
        </IonItem>
        <a  href="/olvidolacuentafm" className='atexto'>¿Olvidaste tu contraseña?</a><br></br><br></br>
        <IonButton expand="block" onClick={handleLogin} className="login-button">Login</IonButton>
        <IonButton expand="block" onClick={handleLoginn} className="login-button">Crear cuenta</IonButton>
      </div>
     
      <IonAlert className='custom-alert'
        isOpen={showAlert}
        onDidDismiss={() => setShowAlert(false)}
        header={'Mensaje'}
        message= {loginMessage}
        buttons={['OK']}
      />
      </IonContent >

    </IonPage>
    );
    };
    export default Falcomarklogin;
