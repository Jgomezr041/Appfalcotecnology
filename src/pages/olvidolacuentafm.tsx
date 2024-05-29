import React, { useState } from 'react';
import { IonPage,IonHeader,IonAlert, IonBackButton,IonTitle, IonToolbar,IonContent, IonButtons,IonItem, IonLabel, IonInput, IonButton } from '@ionic/react';

const olvidolacuentafm: React.FC = () => {
    const [email, setEmail] = useState('');
    const [showAlert, setShowAlert] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí puedes implementar la lógica para enviar un correo electrónico con el enlace de restablecimiento de contraseña
    console.log('Enviar solicitud de restablecimiento de contraseña para:', email);
    // Mostrar la alerta después de enviar el formulario
    setShowAlert(true);
  };

  return (
    <IonPage>
        <IonHeader>
        <IonToolbar color={'primary'}>
          <IonButtons slot="start">
          <IonBackButton defaultHref="/home"></IonBackButton>
          </IonButtons>
          <IonTitle>Falcomarketplace olvidar la cuenta </IonTitle>
        </IonToolbar>
      </IonHeader  >
      <IonContent>
        <form onSubmit={handleSubmit}>
          <IonItem>
            <IonLabel position="floating">Correo electrónico</IonLabel>
            <IonInput type="email" value={email} onIonChange={e => setEmail(e.detail.value!)} required />
          </IonItem>
          <IonButton type="submit" expand="block">Restablecer contraseña</IonButton>
        </form>
      </IonContent>
      <IonAlert
        isOpen={showAlert}
        onDidDismiss={() => setShowAlert(false)}
        header={'Solicitud Enviada'}
        message={'Se ha enviado un correo electrónico con instrucciones para restablecer tu contraseña.'}
        buttons={['OK']}
      />
    </IonPage>

  );
};

export default olvidolacuentafm;
