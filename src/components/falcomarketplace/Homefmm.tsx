import React, { useState, useEffect } from 'react';
import { IonPage, IonSearchbar, IonContent, IonItem, IonLabel, IonSelect, IonSelectOption, IonButton, IonIcon, IonCard, IonRow } from '@ionic/react';
import { listOutline } from 'ionicons/icons';
import { useHistory } from 'react-router-dom';
import './homefmn.css';


interface Containerhome {
  name: string;
}

const Homefmm: React.FC<Containerhome> = ({ name }) => {
  const [productos, setProductos] = useState<any[]>([]);
  const [categoria, setCategoria] = useState<string>('Todos');
  const history = useHistory();

  useEffect(() => {
    const productosGuardados = JSON.parse(localStorage.getItem('productos') || '[]');
    setProductos(productosGuardados);
  }, []);

  const handleCategoriaChange = (c: CustomEvent) => {
    setCategoria(c.detail.value);
  };



  const productosFiltrados = categoria === 'Todos' ? productos : productos.filter(producto => producto.categoria === categoria);

  return (
    <IonPage>
      <IonContent className="contenthomeex">
        <br />
        <div style={{ textAlign: 'center' }}>
          <strong>{name}</strong> 
        </div>
        <IonSearchbar value="Buscar Producto"></IonSearchbar>
        <IonItem>
          <IonLabel>Categoría</IonLabel>
          <IonSelect value={categoria} onIonChange={handleCategoriaChange}>
            <IonSelectOption value="Todos">Todos</IonSelectOption>
            <IonSelectOption value="tecnologia">Tecnologia</IonSelectOption>
            <IonSelectOption value="Ropa">Ropa</IonSelectOption>
            <IonSelectOption value="Hogar">Hogar</IonSelectOption>
            <IonSelectOption value="Juguetes">Juguetes</IonSelectOption>
            <IonSelectOption value="Deportes">Deportes</IonSelectOption>
            <IonSelectOption value="Vehiculos">Vehiculos</IonSelectOption>
          </IonSelect>
        </IonItem>
     
       
        
        {productosFiltrados.map((producto, index) => (
            <IonRow key={index}>
              <IonCard className="servicecardd" onClick={() => history.push(`/app/Detalleproducto/${index}`)}>
                <IonLabel>
                  {producto.fotos && producto.fotos.length > 0 && (
                    <img src={producto.fotos[0]} alt={`Foto 1`} className="producto-img" />
                  )}
                  <h1>{producto.titulo}</h1>
                  <h2>Precio: {producto.precio}</h2>
                  <p>Categoría: {producto.categoria}</p>
                  <p>Ubicación: {producto.ubicacion}</p>

                </IonLabel>
              </IonCard>
            </IonRow>
          ))}
        
        
      </IonContent>
    </IonPage>
  );
};

export default Homefmm;
