import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardContent, IonButton } from '@ionic/react';
import'./profesorw.css';
import PsicologiaImage from '../../../public/Falcows/psicologa.png';  // Update the path as needed
import AbogadosImage from '../../../public/Falcows/abogados.png';  // Update the path as needed
import FotografiaImage from '../../../public/Falcows/fotografia.png';  // Update the path as needed
import ProgramacionImage from '../../../public/Falcows/programador.png';  // Update the path as needed

const Profesionall: React.FC = () => (
  <IonPage>
   
    <IonContent>
      <h1>Categoria psicologia</h1>
      <IonCard className="servicecard">
        <img src={PsicologiaImage} alt="Psicologia" className="imagxx" />
        <IonCardContent>
                <h3> Psicóloga</h3>
                <p><strong>Nombre especialista:</strong> Paula Camila Felez </p>
                <p>Categoría:  Profesional</p>
                <p>Modalidad:Presencial/virtual</p>
                <p>Cobro es depende del servicio</p>
                <IonButton expand="block">Contactar</IonButton>
              </IonCardContent>
      </IonCard>

      <h1>Categoria abogados</h1>
      <IonCard className="servicecard">
        <img src={AbogadosImage} alt="Abogados" className="imagxx" />
        <IonCardContent>
          <h3>Abogados</h3>
          <p>Descripción del servicio de abogados.</p>
          <IonButton expand="block">Contactar</IonButton>
        </IonCardContent>
      </IonCard>

      <h1>Categoria Fotografia</h1>
      <IonCard className="servicecard">
        <img src={FotografiaImage} alt="Fotografia" className="imagxx" />
        <IonCardContent>
          <h3>Fotografía</h3>
          <p>Descripción del servicio de fotografía.</p>
          <IonButton expand="block">Contactar</IonButton>
        </IonCardContent>
      </IonCard>

      <h1>Categoria programación</h1>
      <IonCard className="servicecard">
        <img src={ProgramacionImage} alt="Programacion" className="imagxx" />
        <IonCardContent>
                <h3>Programador</h3>
                <p><strong>Nombre especialista:</strong> Lucas Mendoza Felez </p>
                <p>Categoría:Profesional</p>
                <p>Modalidad:Presencial/virtual</p>
                <p>Cobro es depende del servicio</p>
                <IonButton expand="block">Contactar</IonButton>
              </IonCardContent>
      </IonCard>
    </IonContent>
  </IonPage>
);

export default Profesionall;
