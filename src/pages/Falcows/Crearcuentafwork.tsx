import React,{} from "react";
import {IonBackButton,IonContent,IonButtons,IonTitle, IonToolbar ,IonInput, IonButton, IonLabel, IonSelect , IonSelectOption,IonHeader, IonApp} from '@ionic/react';

import  Crearcuentawork from "../../components/Crearcuentaform";



const  Crearcuentafwork: React.FC = () => {
    



    return (
      <IonApp>
      <IonHeader>
        <IonToolbar color={'primary'}>
          <IonButtons slot="start">
          <IonBackButton defaultHref="/falcoflexworksolutions"></IonBackButton>
          </IonButtons>
          <IonTitle>Crear  cuenta para   work  </IonTitle>
        </IonToolbar>
      </IonHeader >
      
      <IonContent className="contentcrearcuenta">
        <Crearcuentawork/>
 
          
          
      
       
       
      </IonContent >
      
</IonApp>
            

    );
}

export default Crearcuentafwork ;