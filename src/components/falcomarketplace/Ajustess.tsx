import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import {
  
  IonPage, IonContent, IonHeader, IonTitle, IonToolbar, IonItem, IonLabel, IonInput, IonAvatar, IonIcon,
  IonButton, IonGrid, IonRow, IonCol, IonAlert
} from '@ionic/react';
import { cameraOutline, listOutline } from 'ionicons/icons';
import { Camera, CameraResultType } from '@capacitor/camera';
import './Ajustess.css';

const Ajustess = () => {
  const history = useHistory();
  const [showAlert, setShowAlert] = useState(false);

  const [nombre, setNombre] = useState('Administrador');
  const [codigoPais, setCodigoPais] = useState('57+');
  const [telefono, setTelefono] = useState('3028505481');
  const [correo, setCorreo] = useState('admin@admin.com');
  const [fechaNacimiento, setFechaNacimiento] = useState('2001-10-09');
  const [pais, setPais] = useState('Colombia');
  const [foto, setFoto] = useState('./public/user.png'); // Ruta inicial de la foto de perfil

  const handleSave = () => {
    alert('Nombre: ' + nombre);
    alert('Código de País: ' + codigoPais);
    alert('Teléfono: ' + telefono);
    alert('Correo: ' + correo);
    alert('Fecha de Nacimiento: ' + fechaNacimiento);
    alert('Pais: ' + pais);
    setShowAlert(true);
  };

  const handleFotoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (f) => {
        if (f.target) {
          setFoto((f.target.result as string) || '');
        }
      };
      reader.readAsDataURL(event.target.files[0]);
    }
  };

  const handleTakePhoto = async () => {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: true,
      resultType: CameraResultType.DataUrl
    });
    setFoto(image.dataUrl || ''); 
  };

  const CerrarSesion = () => {
    window.location.href = "/Falcomarklogin";
  };

  return (
    <IonPage>
     
      <IonContent>
        <div className="avatar-container">
          <br/>
          <IonAvatar className="avatar">
            <img src={foto} alt="Foto de perfil" />
            <IonIcon icon={cameraOutline} className="camera-icon" onClick={handleTakePhoto} />
            <input type="file" accept="image/*" onChange={handleFotoChange } className="file-input" />
          </IonAvatar>
        </div>
        <br />
        <IonGrid>
          <IonRow>
            <IonCol>
              <IonItem>
                <IonLabel position='stacked'>Nombre</IonLabel>
                <IonInput value={nombre} onIonChange={(p) => setNombre(p.detail.value || '')}></IonInput>
              </IonItem>
            </IonCol>
            <IonCol>
              <IonItem>
                <IonLabel position="stacked">Código de País</IonLabel>
                <IonInput value={codigoPais} onIonChange={(p) => setCodigoPais(p.detail.value || '')}></IonInput>
              </IonItem>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonItem>
                <IonLabel position="stacked">Teléfono</IonLabel>
                <IonInput type="tel" value={telefono} onIonChange={(p) => setTelefono(p.detail.value || '')}></IonInput>
              </IonItem>
            </IonCol>
            <IonCol>
              <IonItem>
                <IonLabel position="stacked">Correo</IonLabel>
                <IonInput type="email" value={correo} onIonChange={(p) => setCorreo(p.detail.value || '')}></IonInput>
              </IonItem>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonItem>
                <IonLabel position="stacked">Fecha de Nacimiento</IonLabel>
                <IonInput type="date" value={fechaNacimiento} onIonChange={(p) => setFechaNacimiento(p.detail.value || '')}></IonInput>
              </IonItem>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonItem>
                <IonLabel position="stacked">País</IonLabel>
                <IonInput value={pais} onIonChange={(p) => setPais(p.detail.value || '')}></IonInput>
              </IonItem>
            </IonCol>
          </IonRow>
        </IonGrid>
        <IonButton onClick={() => history.push('/app/ListaProductos')} color="primary">
            <IonIcon icon={listOutline} /> Ver Lista de Productos
          </IonButton>
        <IonButton expand="block" onClick={handleSave}>Guardar</IonButton>
        <IonButton expand="block">Cambiar Contraseña</IonButton>
        <IonButton expand="block" onClick={CerrarSesion}>Cerrar Sesión</IonButton>

        <IonAlert
          isOpen={showAlert}
          onDidDismiss={() => setShowAlert(false)}
          header={'Datos Guardados'}
          message={'Los cambios han sido guardados exitosamente.'}
          buttons={['OK']}
        />
      </IonContent>
    </IonPage>
  );
};

export default Ajustess;
