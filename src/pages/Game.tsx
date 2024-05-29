import React from 'react';

import {IonContent, IonHeader, IonTitle,IonToolbar, IonPage} from '@ionic/react';
import Gamee from '../components/falcomarketplace/Game';



const Game = () => (
  <IonPage>
      
  <IonHeader>
    <IonToolbar color={'tertiary'}>
      <IonTitle>Game</IonTitle>
    </IonToolbar>
  </IonHeader>

 
  <IonContent>
    <Gamee />

  </IonContent>
  
</IonPage>
);

export default Game;