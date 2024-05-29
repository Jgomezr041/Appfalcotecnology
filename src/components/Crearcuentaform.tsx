import React, { useState } from 'react';
import { IonContent, IonItem, IonLabel, IonInput, IonSelect, IonSelectOption, IonButton, IonImg } from '@ionic/react';

const Crearcuentaform = () => {
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [correo, setCorreo] = useState('');
    const [profesion, setProfesion] = useState('');
    const [otraProfesion, setOtraProfesion] = useState('');
    const [fechaNacimiento, setFechaNacimiento] = useState('');
    const [nit, setNit] = useState('');
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
            profesion,
            fechaNacimiento,
            nit,
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
                    <IonLabel>Profesión</IonLabel>
                    <IonSelect value={profesion} onIonChange={e => setProfesion(e.detail.value)}>
                        <IonSelectOption value="Programador">Programador</IonSelectOption>
                        <IonSelectOption value="Diseñador">Diseñador</IonSelectOption>
                        <IonSelectOption value="Entrenador deportivo">Entrenador deportivo</IonSelectOption>
                        <IonSelectOption value="Peloqueria canina">Peloqueria canina</IonSelectOption>
                        <IonSelectOption value="Carpintero">Carpintero</IonSelectOption>
                        <IonSelectOption value="Electricista">Electricista</IonSelectOption>
                        <IonSelectOption value=" Respacion  de electromestico
                        ">Reparacion de electromestico</IonSelectOption>
                        <IonSelectOption value="Mecanico">Mecanico</IonSelectOption>
                        <IonSelectOption value="Veterianario">Veterianario</IonSelectOption>
                        <IonSelectOption value="Ingeniero">Ingeniero</IonSelectOption>
                        <IonSelectOption value="Medico">Medico</IonSelectOption>
                        <IonSelectOption value="Abogado">Abogado</IonSelectOption>
                        <IonSelectOption value="Contador">Contador</IonSelectOption>
                        <IonSelectOption value="Arquitecto">Arquitecto</IonSelectOption>
                        <IonSelectOption value="Dentista">Dentista</IonSelectOption>
                        <IonSelectOption value="Psicologo">Psicologo</IonSelectOption>
                        <IonSelectOption value="Nutricionista">Nutricionista</IonSelectOption>
                        <IonSelectOption value="Fisioterapeuta">Fisioterapeuta</IonSelectOption>
                        <IonSelectOption value="Enfermero">Enfermero</IonSelectOption>
                        <IonSelectOption value="Estilista">Estilista</IonSelectOption>
                        <IonSelectOption value="chef">Chef</IonSelectOption>
                        <IonSelectOption value="editor de video">Editor de video </IonSelectOption>
                        

                        <IonSelectOption value="Cocinero">Cocinero</IonSelectOption>
                        <IonSelectOption value="Camarero">Camarero</IonSelectOption>    
                        <IonSelectOption value="Recepcionista">Recepcionista</IonSelectOption>
                        <IonSelectOption value="Secretaria">Secretaria</IonSelectOption>
                        <IonSelectOption value="Asistente">Asistente</IonSelectOption>
                        <IonSelectOption value="Vendedor">Vendedor</IonSelectOption>
                        <IonSelectOption value="Contratista">Contratista </IonSelectOption>
                        <IonSelectOption value="Otro">Otro <IonInput value={otraProfesion} onIonChange={e => setOtraProfesion(e.detail.value || '')} /></IonSelectOption>



            

                        
                       
                    </IonSelect>
                </IonItem>
                <IonItem>
                  <IonLabel position= 'stacked'>Fecha de Nacimiento</IonLabel>
                  <IonInput type="date" value={fechaNacimiento} onIonChange={e => setFechaNacimiento(e.detail.value!)}></IonInput>
                </IonItem>
                <IonItem>
                    <IonLabel position="floating">NIT</IonLabel>
                    <IonInput value={nit} onIonChange={e => setNit(e.detail.value || '')} />
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

export default Crearcuentaform;
