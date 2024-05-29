import React, { useState } from 'react';

import { 
  IonButton, 
  IonButtons, 
  IonContent, 
  IonHeader, 
  IonIcon, 
  IonImg, 
  IonItem, 
  IonItemDivider, 
  IonItemGroup, 
  IonLabel, 
  IonList, 
  IonMenu, 
  IonMenuButton, 
  IonMenuToggle, 
  IonPage, 
  IonSelect, 
  IonSelectOption, 
  IonTitle, 
  IonToolbar 
} from '@ionic/react';
import { homeOutline, listOutline, settingsOutline, logOutOutline, gridOutline, chevronDownOutline, chevronUpOutline } from 'ionicons/icons';
import './falcocr.css';
/*imagen */
import userImage from '../../../public/Falcows/logoft.png';
const nombre = 'Admin';
const ocupacion = 'no especificado'
const Falcocr = () => {
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);

  const toggleCategory = () => {
    setIsCategoryOpen(!isCategoryOpen);
  };


  return (
    <>
    <IonMenu contentId="main-content" type="overlay">
      <IonContent>
        <div className="menu-header">
          <img src={userImage} alt="User" className="user-image" />
          <div className="user-info">
            <h2>{nombre}</h2>
            <p>{ocupacion}</p>
          </div>
          <IonButton expand="block" className="add-branch-button">+ Add Branch</IonButton>
        </div>
        <IonList>
          <IonMenuToggle autoHide={false}>
            <IonItem button>
              <IonIcon slot="start" icon={homeOutline} />
              <IonLabel>Home</IonLabel>
            </IonItem>
          </IonMenuToggle>
          <IonMenuToggle autoHide={false}>
            <IonItem button onClick={toggleCategory}>
              <IonIcon slot="start" icon={gridOutline} />
              <IonLabel>Categoría</IonLabel>
              <IonIcon slot="end" icon={isCategoryOpen ? chevronUpOutline : chevronDownOutline} />
            </IonItem>
            {isCategoryOpen && (
              <IonItemGroup>
                <IonItemDivider />
                <IonItem button>
                  <IonLabel>Profesor</IonLabel>
                </IonItem>
                <IonItem button>
                  <IonLabel>Servicio hogar</IonLabel>
                </IonItem>
                <IonItem button>
                  <IonLabel>Servicio profesional</IonLabel>
                </IonItem>
              </IonItemGroup>
            )}
          </IonMenuToggle>
          <IonMenuToggle autoHide={false}>
            <IonItem button>
              <IonIcon slot="start" icon={listOutline} />
              <IonLabel>Lista de Servicios</IonLabel>
            </IonItem>
          </IonMenuToggle>
          <IonMenuToggle autoHide={false}>
            <IonItem button>
              <IonIcon slot="start" icon={settingsOutline} />
              <IonLabel>Ajustes</IonLabel>
            </IonItem>
          </IonMenuToggle>
          <IonMenuToggle autoHide={false}>
            <IonItem button>
              <IonIcon slot="start" icon={logOutOutline} />
              <IonLabel>Sign Out</IonLabel>
            </IonItem>
          </IonMenuToggle>
        </IonList>
      </IonContent>
    </IonMenu>

    <IonPage id="main-content">
      <IonHeader>
        <IonToolbar color="primary">
        <IonButtons slot="start">
              <IonMenuButton></IonMenuButton>
            </IonButtons>
          <IonTitle>Freelance Work Solutions</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        {/* Aquí puedes agregar el contenido principal */}
      </IonContent>
    </IonPage>
  </>
);
}
export default Falcocr;