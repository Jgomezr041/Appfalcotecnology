import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonCardSubtitle } from '@ionic/react';
import  imagengame from '../../../public/portada.png.png';
import './game.css';

const Game: React.FC = () => {
  const downloadGame = () => {
    // Aquí puedes agregar la lógica para descargar el juego

    alert('Descargando el juego...');




  };

  return (
    
      <IonContent className="ion-padding">
       <IonCard>
      <img alt="Silhouette of mountains" src={imagengame } />
      <IonCardHeader>
        <IonCardTitle>Descargar Falco arena game </IonCardTitle>
        
      </IonCardHeader>

      <IonCardContent >Falco Arena Game es un innovador juego que combina la estrategia del juego lol  con la dinámica del baloncesto y el objetivo de capturar la bandera. Los jugadores enfrentan a oponentes controlados personaje esta  inspirado de  baloncesto, utilizando personajes con habilidades únicas para capturar la bandera del equipo contrario y defender la propia. Además, pueden anotar puntos encestando el balón. El juego ofrece una experiencia única y emocionante, fusionando estrategia, habilidades especiales y la pasión del baloncesto en una jugabilidad envolvente y adictiva.</IonCardContent>
        
        <IonButton  className="buttonn" onClick={downloadGame}>Descargar</IonButton>
        <br></br>
        

    </IonCard>
        
      </IonContent>
   
  );
};

export default Game;
