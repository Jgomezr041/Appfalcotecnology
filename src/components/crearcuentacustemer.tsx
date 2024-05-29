import React, { useState } from 'react';
import { IonContent, IonItem, IonLabel, IonInput, IonSelect, IonSelectOption, IonButton, IonImg } from '@ionic/react';

const crearcuentacustemer = () => {
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [correo, setCorreo] = useState('');

    const [fechaNacimiento, setFechaNacimiento] = useState('');
    const [tipodocumento, setTipodocumento] = useState('');
    const [numerodocumento, setNumerodocumento] = useState('');
    const [pais, setPais] = useState('');
    const [ciudad, setCiudad] = useState('');
    const[contraseña,setcontraseña]=useState('');
    const [codigoPais, setCodigoPais] = useState('');
    const [telefono, setTelefono] = useState('');

    const handleSubmit = () => {
        // Aquí puedes enviar los datos del formulario a tu servidor o realizar cualquier otra acción necesaria enviar los datos del formulario a tu servidor o realizar cualquier otra acción necesaria superbase
        console.log({
            nombre,
            apellido,
            correo,
           
            fechaNacimiento,
            tipodocumento,
            numerodocumento,
            pais,
            ciudad,
            contraseña,
            codigoPais,
            telefono
        });
    };

    return (
        < > <br></br>
            <form className='formulaa' onSubmit={handleSubmit}>
            <IonImg src="public/falcoflexs.png
          " class='custom-imgg'  />
                <IonItem >

                    <IonLabel  position="floating">Nombre</IonLabel>
                    <IonInput value={nombre} onIonChange={e => setNombre(e.detail.value || '')} />
                </IonItem>
                <IonItem>
                    <IonLabel position="floating">Apellido</IonLabel>
                    <IonInput value={apellido} onIonChange={e => setApellido(e.detail.value || '')} />
                </IonItem>
                <IonItem>
                  <IonLabel position="floating">Correo</IonLabel>
                  <IonInput type="email" value={correo || ''} onIonChange={e => setCorreo(e.detail.value || '')} />
                </IonItem>
                <IonItem>
                    <IonLabel>Tipo de documento </IonLabel>
                    <IonSelect value={tipodocumento} onIonChange={e => setTipodocumento(e.detail.value)}>
                        <IonSelectOption value="Cedula de ciudadania">Cedula de ciudadania</IonSelectOption>
                        <IonSelectOption value="Cedula de extranjeria">Cedula de extranjeria</IonSelectOption>
                        <IonSelectOption value="Pasaporte">Pasaporte</IonSelectOption>
                
                    </IonSelect>

                </IonItem>
                <IonItem>
                    <IonLabel position="floating">Numero de documento</IonLabel>
                    <IonInput value={numerodocumento} onIonChange={e => setNumerodocumento(e.detail.value || '')} />
                </IonItem>
                <IonItem>
                  <IonLabel position= 'stacked'>Fecha de Nacimiento</IonLabel>
                  <IonInput type="date" value={fechaNacimiento} onIonChange={e => setFechaNacimiento(e.detail.value!)}></IonInput>
                </IonItem>
           
                <IonItem>
                    <IonLabel position="floating">País</IonLabel>
                    <IonInput value={pais} onIonChange={e => setPais(e.detail.value || '')} />
                </IonItem>
                <IonItem>
                    <IonLabel position="floating">Ciudad</IonLabel>
                    <IonInput value={ciudad} onIonChange={e => setCiudad(e.detail.value || '')} />
                </IonItem>
                <IonItem>
                    <IonLabel position="floating">Contraseña</IonLabel>
                    <IonInput type="password" value={contraseña} onIonChange={e => setcontraseña(e.detail.value || '')} />
                </IonItem>
                <IonItem>
                    <IonLabel position="floating">Código de País</IonLabel>
                    <IonInput value={codigoPais} onIonChange={e => setCodigoPais(e.detail.value || '')} />
                </IonItem>
                <IonItem>
                    <IonLabel position="floating">Teléfono</IonLabel>
                    <IonInput value={telefono} onIonChange={e => setTelefono(e.detail.value || '')} />
                </IonItem>
                <IonButton expand="block" type="submit">Crear Cuenta</IonButton>
            </form>
        </>
    );
};

export default crearcuentacustemer;