import React from 'react';
import { IonButton, IonCard, IonCardContent, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './profesorw.css';
import MascotaServiceImage from '../../../public/Falcows/mascota.png';  // Update the path as needed
import Renovaciones from '../../../public/Falcows/Renovaciones.png';  // Update the path as needed
import Seguridad from '../../../public/Falcows/seguridad.png'; 

const Serviciohogar: React.FC = () => (
   
      <IonContent>
        <h1>Servicio hogar</h1>
        
        <IonCard className="servicecard">
          <img src={MascotaServiceImage} alt="Servicio Para Mascotas" className="imagxx" />
          <IonCardContent>
            <h3>Servicio Para Mascotas</h3>
            <p>Descripción del servicio para mascotas.</p>
            <IonButton className='Button' expand="block">Contactar</IonButton>
          </IonCardContent>
        </IonCard>
  
        <IonCard className="servicecard">
          <img src={Renovaciones} alt="Reparaciones de equipos" className="imagxx" />
          <IonCardContent>
            <h3>Reparaciones de equipos</h3>
            <p>Descripción del servicio de reparaciones de equipos.</p>
            <IonButton className='Button' expand="block">Contactar</IonButton>
          </IonCardContent>
        </IonCard>
  
        <IonCard className="servicecard">
          <img src={Seguridad} alt="Seguridad privada personal" className="imagxx" />
          <IonCardContent>
            <h3>Seguridad privada personal</h3>
            <p>Descripción del servicio de seguridad privada personal.</p>
            <IonButton className='Button' expand="block">Contactar</IonButton>
          </IonCardContent>
        </IonCard>
      </IonContent>

  );
  
  export default Serviciohogar;