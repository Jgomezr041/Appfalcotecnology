import React, { useState, useEffect } from 'react';
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
  IonToolbar,
  IonAlert,
  IonModal
} from '@ionic/react';
import { format } from 'date-fns';
import { homeOutline, listOutline, settingsOutline, logOutOutline, gridOutline, chevronDownOutline, chevronUpOutline, trashOutline } from 'ionicons/icons';

import userImage from '../../../public/Falcows/logoft.png';
import StarRating from './StarRating';

const nombre = 'Admin';
const ocupacion = 'no especificado';

const Servicios: React.FC = () => {
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [pendingServices, setPendingServices] = useState<any[]>([]);
  const [showAlert, setShowAlert] = useState(false);
  const [serviceToConfirm, setServiceToConfirm] = useState<any>(null);
  const [showRatingModal, setShowRatingModal] = useState(false);
  const [rating, setRating] = useState(0);

  useEffect(() => {
    const storedPendingServices = localStorage.getItem('pendingServices');
    if (storedPendingServices) {
      setPendingServices(JSON.parse(storedPendingServices));
    }
  }, []);

  const toggleCategory = () => {
    setIsCategoryOpen(!isCategoryOpen);
  };

  const deleteService = (index: number) => {
    const updatedServices = pendingServices.filter((_, i) => i !== index);
    setPendingServices(updatedServices);
    localStorage.setItem('pendingServices', JSON.stringify(updatedServices));
  };

  const confirmService = (service: any) => {
    setServiceToConfirm(service);
    setShowAlert(true);
  };

  const handleConfirm = () => {
    setShowAlert(false);
    setShowRatingModal(true);
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
            <IonTitle> Servicios pendientes </IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonList>
            {pendingServices.map((service, index) => (
              <IonItem key={index}>
                <IonLabel>
                  <h2>{service.title}</h2>
                  <p><IonIcon></IonIcon>{service.formData.lugar}</p>
                  <p><strong>{service.formData.descripcion}</strong></p>
                  <p><strong>Precio:</strong> ${service.totalCost}</p>
                  <p><strong>Fecha:</strong> {format(new Date(service.formData.date), 'MM-dd-yyyy')}</p>
                  <p><strong>Hora:</strong> {format(new Date(service.formData.time), 'HH:mm')}</p>
                </IonLabel>
                <IonButton color="success" slot="end" onClick={() => confirmService(service)}>Confirmar</IonButton>
                <IonIcon color="danger" slot="end" onClick={() => deleteService(index)} icon={trashOutline} />
              </IonItem>
            ))}
          </IonList>
        </IonContent>
      </IonPage>

      {serviceToConfirm && (
        <IonAlert
          isOpen={showAlert}
          onDidDismiss={() => setShowAlert(false)}
          header={'Confirmar Servicio'}
          message={`¿Desea confirmar el servicio de ${serviceToConfirm.title}?`}
          buttons={[
            {
              text: 'Cancelar',
              role: 'cancel',
              cssClass: 'secondary',
              handler: () => {
                setShowAlert(false);
              }
            },
            {
              text: 'Confirmar',
              handler: handleConfirm
            }
          ]}
        />
      )}

      <IonModal isOpen={showRatingModal} onDidDismiss={() => setShowRatingModal(false)}>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Calificar Servicio</IonTitle>
            <IonButtons slot="end"onClick={() => setShowRatingModal(false)}>
             Cerrar
            </IonButtons>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <div className="modal-content">
            <h2>Califique el servicio de {serviceToConfirm?.title}</h2>
            <StarRating rating={rating} onRatingChange={setRating} />
            <IonButton expand="block" onClick={() => {
              console.log('Servicio confirmado:', serviceToConfirm);
              console.log('Calificación:', rating);
              setShowRatingModal(false);
            }}>Confirmar Calificación</IonButton>
          </div>
        </IonContent>
      </IonModal>
    </>
  );
};

export default Servicios;
