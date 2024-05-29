import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardContent, IonButton, IonRow } from '@ionic/react';
import Avartaf from '../../../public/Falcows/avar2.png';  
import Entrenadora from '../../../public/Falcows/entrenadora.png';
import Entrenador from '../../../public/Falcows/entrenador.png';
 import './profesorw.css';
const Profesor: React.FC = () => (
  <IonPage>
    
    <IonContent>
   
      <h1 className='textc'>Categoria Profesor de idiomas</h1>
      <IonRow>
      <IonCard className="servicecard">
        <img src={Avartaf} alt="Avatar" className="imagxx" />
        <IonCardContent>
          <h3>Profesora de inglés</h3>
          <p><strong>Nombre especialista:</strong> Paula Andrea Gomez</p>
          <p>Categoría: Profesor</p>
          <p>Modalidad: Virtual/Presencial</p>
          <p>1 H por $80.000</p>
          <IonButton className='Button' expand="block">Contactar</IonButton>
        </IonCardContent>
      </IonCard>
      
      <IonCard className="servicecard">
        <img src={Avartaf} alt="Avatar" className="imagxx" />
        <IonCardContent>
          <h3>Profesora de Francés</h3>
          <p><strong>Nombre especialista:</strong> Paula Andrea Gomez</p>
          <p>Categoría: Profesor</p>
          <p>Modalidad: Virtual/Presencial</p>
          <p>1 H por $90.000</p>
          <IonButton className='Button' expand="block">Contactar</IonButton>
        </IonCardContent>
      </IonCard>
        </IonRow>
       
      <h1 className='textc'>Categoria Profesor de programación</h1>
      <IonRow>
      <IonCard className="servicecard">
        <img src={Avartaf} alt="Avatar" className="imagxx" />
        <IonCardContent>
          <h3>Profesora de Programación</h3>
          <p><strong>Nombre especialista:</strong>  Maria  Paula Lopez Rojas</p>
          <p>Categoría: Profesor</p>
          <p>Modalidad: Virtual/Presencial</p>
          <p>1 H por $100.000</p>
          <IonButton className='Button' expand="block">Contactar</IonButton>
        </IonCardContent>
      </IonCard>
      </IonRow>
      <h1 className='textc'>Categoria Profesor de matemáticas</h1>
      <IonRow>
      <IonCard className="servicecard">
        <img src={Avartaf} alt="Avatar" className="imagxx" />
        <IonCardContent>
          <h3>Profesor de Matemáticas</h3>
          <p><strong>Nombre especialista:</strong> Maria  Paula Lopez Rojas</p>
          <p>Categoría: Profesor</p>
          <p>Modalidad: Virtual/Presencial</p>
          <p>1 H por $85.000</p>
          <IonButton  className='Button' expand='block'>Contactar</IonButton>
        </IonCardContent>
      </IonCard>
        </IonRow>

      <h1 className='textc'>Categoria entrenador deportes</h1>
      <IonRow>
      <IonCard className="servicecard">
        <img src={Entrenadora} alt="Avatar" className="imagxx" />
        <IonCardContent>
          <h3>Entrenadora</h3>
          <p><strong>Nombre especialista:</strong> Emma Gomez Rojas</p>
          <p>Categoría: Profesor</p>
          <p>Modalidad: Presencial</p>
          <p>1 H por $70.000</p>
          <IonButton className='Button' expand="block">Contactar</IonButton>
        </IonCardContent>
      </IonCard>
     
      <IonCard className="servicecard">
        <img src={Entrenador} alt="Avatar" className="imagxx" />
        <IonCardContent>
                <h3>Entrenador</h3>
                <p><strong>Nombre especialista:</strong> Thiago Camilo Gomez</p>
                <p>Categoría: Profesor</p>
                <p>Modalidad: Presencial</p>
                <p>1 H por $80.000</p>
                <IonButton className='Button' expand="block">Contactar</IonButton>
              </IonCardContent>
      </IonCard>
      </IonRow>
     


    </IonContent>
  </IonPage>
);

export default Profesor;
