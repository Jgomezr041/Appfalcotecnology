import React from 'react';
import { IonCard, IonCardContent, IonLabel, IonRow, IonCol, IonImg, IonButton, IonContent } from '@ionic/react';
import './ProductCard.css';

interface ProductCardProps {
  producto: any;
}

const ProductCard: React.FC<ProductCardProps> = ({ producto }) => {
  return (
    <>
    <IonContent>
    <IonCard className="product-card">
      <IonCardContent>
        <IonRow>
          <IonCol size="4">
            {producto.fotos && producto.fotos.length > 0 && (
              <IonImg src={producto.fotos[0]} className="product-main-img" />
            )}
            <div className="product-thumbnails">
              {producto.fotos && producto.fotos.map((foto: string, index: number) => (
                <IonImg key={index} src={foto} className="thumbnail-img" />
              ))}
            </div>
          </IonCol>
          <IonCol size="8">
            <IonLabel>
              <h1>{producto.titulo}</h1>
              <h2>Precio: {producto.precio}</h2>
              <p>Descripción: {producto.descripcion}</p>
              <div className="vendor-info">
                <img src={producto.vendedorImg} alt="Vendedor" className="vendor-img" />
                <p>{producto.vendedor}</p>
              </div>
              <p>Número de WhatsApp:{producto.Telefonowhatsapp}</p>
              
            </IonLabel>
          </IonCol>
        </IonRow>
      </IonCardContent>
    </IonCard>
    </IonContent></>
  );
};

export default ProductCard;
