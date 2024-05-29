import React, { useState } from 'react';
import {
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonItemDivider,
  IonItemGroup,
  IonLabel,
  IonList,
  IonMenu,
  IonMenuButton,
  IonMenuToggle,
  IonPage,
  IonTitle,
  IonToolbar
} from '@ionic/react';
import { homeOutline, listOutline, settingsOutline, logOutOutline, gridOutline, chevronDownOutline, chevronUpOutline } from 'ionicons/icons';
import './falcocr.css';
import Hogarr from '../../components/falcocr/Serviciohogar';
import userImage from '../../../public/Falcows/logoft.png';

const nombre = 'Admin';
const ocupacion = 'no especificado';

const Hogar: React.FC = () => {
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
            <IonButton expand='block' className="add-branch-button"> Especialista</IonButton>
          </div>
          <IonList>
            <IonMenuToggle autoHide={false}>
              <IonItem button routerLink='/falcocr'>
                <IonIcon slot="start" icon={homeOutline} />
                <IonLabel>Home</IonLabel>
              </IonItem>
            </IonMenuToggle>
            <IonItem button onClick={toggleCategory}>
              <IonIcon slot="start" icon={gridOutline} />
              <IonLabel>Categoría</IonLabel>
              <IonIcon slot="end" icon={isCategoryOpen ? chevronUpOutline : chevronDownOutline} />
            </IonItem>
            {isCategoryOpen && (
              <IonItemGroup>
                <IonItemDivider />
                <IonItem button routerLink="/profesorw">
                  <IonLabel>Profesor</IonLabel>
                </IonItem>
                <IonItem button routerLink="/hogar">
                  <IonLabel>Servicio hogar</IonLabel>
                </IonItem>
                <IonItem button routerLink="/Profesionalw">
                  <IonLabel>Servicio profesional</IonLabel>
                </IonItem>
              </IonItemGroup>
            )}
            <IonMenuToggle autoHide={false}>
              <IonItem button routerLink="/servicios">
                <IonIcon slot="start" icon={listOutline} />
                <IonLabel>Lista de Servicios</IonLabel>
              </IonItem>
            </IonMenuToggle>
            <IonMenuToggle autoHide={false}>
              <IonItem button routerLink="/ajuste">
                <IonIcon slot="start" icon={settingsOutline} />
                <IonLabel>Ajustes</IonLabel>
              </IonItem>
            </IonMenuToggle>
            <br /><br />
            <IonMenuToggle autoHide={false}>
              <IonItem button routerLink="/home" color={'danger'}>
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
              <IonMenuButton />
            </IonButtons>
            <IonTitle>Servicio de hogar</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <Hogarr />
        </IonContent>
      </IonPage>
    </>
  );
};

export default Hogar;
