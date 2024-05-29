import React, { useState, useEffect } from 'react';
import { IonPage, IonContent, IonHeader, IonToolbar, IonTitle, IonLabel, IonButton, IonCard } from '@ionic/react';
import { useParams } from 'react-router-dom';
import Slider from "react-slick";
import './detallesproducto.css';

const Detalleproducto: React.FC = () => {
  const { index } = useParams<{ index: string }>();
  const [productos, setProductos] = useState<any[]>([]);
  const [producto, setProducto] = useState<any>(null);

  useEffect(() => {
    const productosGuardados = JSON.parse(localStorage.getItem('productos') || '[]');
    console.log('Productos guardados:', productosGuardados);
    setProductos(productosGuardados);
    const productoSeleccionado = productosGuardados[parseInt(index)];
    console.log('Producto seleccionado:', productoSeleccionado);
    setProducto(productoSeleccionado);
  }, [index]);

  

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  const whatsappLink = producto ? `https://wa.me/${producto.Telefonowhatsapp}` : '';

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color={'primary'}>
          <IonTitle>Detalles del Producto</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        {producto && (
          <IonCard>
            <h2>{producto.titulo}</h2>
            <Slider {...settings}>
              {producto.fotos && producto.fotos.map((foto: string, t: number) => (
                <div key={t}>
                  <img src={foto} alt={`Foto ${t + 1}`} className="producto-img-carrusel" />
                </div>
              ))}
            </Slider>
            <br /><br />
            <IonLabel className="texto">
              <h1>Precio: {producto.precio}</h1>
              <p>Categoría: {producto.categoria}</p>
              <p>WhatsApp: {producto.Telefonowhatsapp}</p>
              <p>Descripción: {producto.descripcion}</p>
              <p>Ubicación: {producto.ubicacion}</p>
            </IonLabel>
            <IonButton expand="block" href={whatsappLink} target="_blank">
              Contactar por WhatsApp
            </IonButton>
            
          </IonCard>
        )}
      </IonContent>
    </IonPage>
  );
};

export default Detalleproducto;
