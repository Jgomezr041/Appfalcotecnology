import React from 'react';

import { IonTabs,IonContent, IonHeader, IonTitle,IonButton, IonRouterOutlet,IonToolbar, IonPage} from '@ionic/react';

import Ajustess from '../components/falcomarketplace/Ajustess';

const Ajustes = () => (
  <IonPage>
      
  <IonHeader>
    <IonToolbar color={'tertiary'}>
      <IonTitle>Ajustes</IonTitle>
      
    </IonToolbar>
  </IonHeader>

 
  <IonContent style={{ overflowY: 'auto' }}>
    <Ajustess/>



  </IonContent>
  
</IonPage>
);

export default Ajustes;