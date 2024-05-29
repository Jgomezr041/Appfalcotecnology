import React, { useState } from 'react';
import { IonPage, IonContent, IonButton, IonInput, IonItem, IonLabel, IonTextarea, IonHeader, IonToolbar, IonTitle, IonAlert, IonImg, IonSelect, IonSelectOption } from '@ionic/react';
import { useHistory } from 'react-router-dom';
import './SubirProducto.css';

const SubirProducto: React.FC = () => {
  const history = useHistory();
  const [fotos, setFotos] = useState<File[]>([]);
  const [fotoUrls, setFotoUrls] = useState<string[]>([]);
  const [showAlert, setShowAlert] = useState(false);
  const [producto, setProducto] = useState({
    titulo: '',
    precio: '',
    categoria: '',
    Telefonowhatsapp:'',
    descripcion: '',
    ubicacion: ''
  });

  const handleFotoChange = (h: React.ChangeEvent<HTMLInputElement>) => {
    if (h.target.files) {
      const filesArray = Array.from(h.target.files).slice(0, 6 - fotos.length); // Limita a 6 fotos en total
      const newFotos = [...fotos, ...filesArray];
      setFotos(newFotos);
      const urlsArray = filesArray.map(file => URL.createObjectURL(file));
      setFotoUrls(prevUrls => [...prevUrls, ...urlsArray]);
    }
  };

  const handleRemoveFoto = (index: number) => {
    const newFotos = fotos.filter((_, i) => i !== index);
    setFotos(newFotos);
    const newUrls = fotoUrls.filter((_, i) => i !== index);
    setFotoUrls(newUrls);
  };

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setProducto(prevProducto => ({ ...prevProducto, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Formulario enviado');
    console.log('Producto:', producto);
    console.log('Fotos:', fotos);
    // Guardar el producto en el almacenamiento local
    const productos = JSON.parse(localStorage.getItem('productos') || '[]');
    productos.push({ ...producto, fotos: fotoUrls });
    localStorage.setItem('productos', JSON.stringify(productos));
    setShowAlert(true);
  };

  const handleAlertDismiss = () => {
    setShowAlert(false);
    history.push('/app/Homefm');
  };

  return (
    <IonPage>
   
      <IonContent>
        <form onSubmit={handleSubmit}>
          <IonItem>
            <IonLabel position="stacked">Título del Producto</IonLabel>
            <IonInput name="titulo" type="text" value={producto.titulo} onIonChange={handleChange} required />
          </IonItem>
          {fotoUrls.length > 0 && (
            <IonItem>
              <div className="preview-container">
                {fotoUrls.map((url, index) => (
                  <div key={index} className="preview-img-wrapper">
                    <IonImg src={url} alt={`Foto ${index + 1}`} className="preview-img" />
                    <button type="button" className="remove-button" onClick={() => handleRemoveFoto(index)}>
                      &times;
                    </button>
                  </div>
                ))}
              </div>
            </IonItem>
          )}
          <IonItem>
            <IonLabel position="stacked">Fotos (máximo 6)</IonLabel>
            <br />
            <input id="file" type="file" accept="image/*" onChange={handleFotoChange} className="file-input" multiple />
            <label htmlFor="file" className="file-input-label">Seleccionar Fotos</label>
          </IonItem>
          <IonItem>
            <IonLabel position="stacked">Precio</IonLabel>
            <IonInput name="precio" type='number' value={producto.precio} onIonChange={handleChange} required />
          </IonItem>
          <IonItem>
            <IonLabel  position='fixed'>Categoría</IonLabel>
            <IonSelect name="categoria" value={producto.categoria} onIonChange={handleChange}>
            <IonSelectOption value="tecnologia">Tecnologia</IonSelectOption>
              <IonSelectOption value="Ropa">Ropa</IonSelectOption>
              <IonSelectOption value="Hogar">Hogar</IonSelectOption>
              <IonSelectOption value="Juguetes">Juguetes</IonSelectOption>
              <IonSelectOption value="Deportes">Deportes</IonSelectOption>
              <IonSelectOption value="Vehiculos">Vehiculos</IonSelectOption>
              
            </IonSelect>
          </IonItem>
          <IonItem>
            <IonLabel position="stacked">Descripción</IonLabel>
            <IonTextarea name="descripcion" rows={4} value={producto.descripcion} onIonChange={handleChange} required />
          </IonItem>
          <IonItem>
            <IonLabel position="stacked">Número de WhatsApp</IonLabel>
            <IonInput name="Telefonowhatsapp" type="tel" value={producto.Telefonowhatsapp} onIonChange={handleChange} required />
          </IonItem>
          
          <IonItem>
            <IonLabel position="stacked">Ubicación</IonLabel>
            <IonInput name="ubicacion" type="text" value={producto.ubicacion} onIonChange={handleChange} required />
          </IonItem>
          <IonButton expand="block" type="submit">Enviar</IonButton>
        </form>
        <IonAlert
          isOpen={showAlert}
          onDidDismiss={handleAlertDismiss}
          header={'Confirmación'}
          message={'Formulario enviado exitosamente'}
          buttons={['OK']}
        />
      </IonContent>
    </IonPage>
  );
};

export default SubirProducto;