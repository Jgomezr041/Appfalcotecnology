

import React, { useState } from 'react';
import {IonImg ,IonBackButton,IonButtons,IonTitle, IonToolbar ,IonInput, IonButton, IonLabel, IonSelect , IonSelectOption,IonHeader, IonApp} from '@ionic/react';




const Crearcuenta: React.FC = () => {
  const[nombre,setnombre]=useState('');
    const[apellido,setapellido]=useState('');
    const[correo,setcorreo]=useState('');
    const[genero,setgenero]=useState('');
    const[codigopais,setcodigopais]=useState('');
    const[telefono,setTelefono]=useState('');
    const[contraseña,setcontraseña]=useState('');
    const[confirmarcontraseña,setconfirmarcontraseña]=useState('');
    const[fechanacimiento,setfechanacimiento]=useState('');
    const[ciudad,setciudad]=useState('');
    const[pais,setpais]=useState('');

    const hSubmit = () => {
      console.log({
        nombre,
        apellido,
        correo,
        genero,
        codigopais,
        telefono,
        contraseña,
        confirmarcontraseña,
        fechanacimiento,
        ciudad,
        pais
      });
    }
  return (
    <>
    <br></br>
      <form  className='formula'  onSubmit={hSubmit}>
      <IonImg src="public/logom.png
          " class='custom-img' /> <br></br>
        <IonLabel>Nombre</IonLabel>
        <IonInput value={nombre} onIonChange={e => setnombre(e.detail.value!)}></IonInput><br></br>
        <IonLabel>Apellido</IonLabel>
        <IonInput value={apellido} onIonChange={e => setapellido(e.detail.value!)}></IonInput><br></br>
        <IonLabel>Correo</IonLabel>
        <IonInput value={correo} onIonChange={e => setcorreo(e.detail.value!)}></IonInput><br></br>
        <IonLabel>Genero</IonLabel>
        <IonSelect value={genero} onIonChange={e => setgenero(e.detail.value!)}  labelPlacement="stacked">
          <IonSelectOption value="Masculino">Masculino</IonSelectOption>
          <IonSelectOption value="Femenino">Femenino</IonSelectOption>
          <IonSelectOption value="Otro">Otros</IonSelectOption>
        </IonSelect>
        <IonLabel>Codigo pais</IonLabel>
        <IonSelect value={codigopais} onIonChange={e => setcodigopais(e.detail.value!)} labelPlacement="stacked"><br></br>
        <IonSelectOption value="+57">  <img src={'./public/iconodebandera/icons8-colombia-48.png'} ></img> Colombia</IonSelectOption>
          <IonSelectOption value="+593"> <img src={'./public/iconodebandera/icons8-ehcuador-48.png'} ></img> Ecuador</IonSelectOption>
          <IonSelectOption value="+54"> <img src={'./public/iconodebandera/icons8-argentina-48.png'} ></img> Argentina</IonSelectOption>
        </IonSelect>
        <IonLabel>Telefono</IonLabel>
        <IonInput type="number" value={telefono} onIonChange={e => setTelefono(e.detail.value!)}></IonInput>
        <IonLabel>Contraseña</IonLabel>
        <IonInput type="password" value={contraseña} onIonChange={e => setcontraseña(e.detail.value!)}></IonInput>
        <IonLabel>Confirmar contraseña</IonLabel>
        <IonInput type="password" value={confirmarcontraseña} onIonChange={e => setconfirmarcontraseña(e.detail.value!)}></IonInput>
        <IonLabel>Fecha nacimiento</IonLabel>
        <IonInput type="date" value={fechanacimiento} onIonChange={e => setfechanacimiento(e.detail.value!)}></IonInput>
        <IonLabel>Ciudad</IonLabel>
        <IonInput value={ciudad} onIonChange={e => setciudad(e.detail.value!)}></IonInput>
        <IonLabel>Pais</IonLabel>
        <IonInput value={pais} onIonChange={e => setpais(e.detail.value!)}></IonInput>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <IonButton expand='full' type="submit">Crear cuenta</IonButton>
        
        </form>
    </>
  );
};

export default Crearcuenta;