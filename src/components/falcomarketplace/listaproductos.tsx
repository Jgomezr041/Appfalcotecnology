import React, { useState, useEffect } from 'react';
import { IonPage, IonContent, IonItem, IonLabel, IonButton, IonList, IonHeader, IonToolbar, IonTitle } from '@ionic/react';
import './listaproductos.css';

const ListaProductos: React.FC = () => {
  const [productos, setProductos] = useState<any[]>([]);

  useEffect(() => {
    const productosGuardados = JSON.parse(localStorage.getItem('productos') || '[]');
    setProductos(productosGuardados);
  }, []);

  const handleDeleteProduct = (index: number) => {
    const newProductos = productos.filter((_, i) => i !== index);
    setProductos(newProductos);
    localStorage.setItem('productos', JSON.stringify(newProductos));
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color={'primary'}>
          <IonTitle>Lista de Productos</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList className="productos-container">
          {productos.map((producto, index) => (
            <IonItem key={index}>
              <IonLabel className="producto-label">
                <h2>{producto.titulo}</h2>
                {producto.fotos && producto.fotos.length > 0 && (
                      <img src={producto.fotos[0]} alt={`Foto 1`} className="producto-img" />
                    )}
                <h1>Precio: {producto.precio}</h1>
                <p>Categoría: {producto.categoria}</p>
                <p>Ubicación: {producto.ubicacion}</p>
              </IonLabel>
              <IonButton color="danger" onClick={() => handleDeleteProduct(index)}>Borrar</IonButton>
            </IonItem>
          ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default ListaProductos;
