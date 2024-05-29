import React from 'react';

import { IonTabs,IonContent, IonHeader, IonTitle, IonRouterOutlet,IonToolbar, IonPage} from '@ionic/react';
import  Subirproducto from '../components/falcomarketplace/Subirproducto';


const Subir = () => (
  <IonPage>
      
  <IonHeader>
    <IonToolbar color={'tertiary'}>
      <IonTitle>Subir Productos</IonTitle>
    </IonToolbar>
  </IonHeader>

 
  <IonContent style={{ overflowY: 'auto' }}>
    <Subirproducto />



  </IonContent>
  
</IonPage>
);

export default Subir;