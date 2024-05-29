import { IonAlert, IonButton, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonContent, IonImg, IonLoading } from '@ionic/react';
import './ExploreContainer.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface ContainerProps { }

const ExploreContainer: React.FC<ContainerProps> = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  return (
    <IonContent color={'secondary'}>  
      <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> 
      <Slider {...settings}>
  <div>
    <IonImg src="public/img/inicio2.png" className='customimg' />
  </div>
  <div>
    <IonImg src="public/img/inicio3.png" className='customimg' />
  </div>
  <div>
    <IonImg src="public/img/inicio.png" className='customimg' />
  </div>
</Slider>
    
    <br></br>
    <br></br>
      <IonButton  shape='round' color="tertiary" id='present-alert-user'>Falco Marketplace </IonButton><br/>
      <IonLoading trigger="open-loading" message="Dismissing after 3 seconds..." duration={3000} />
      <IonButton shape='round' color="tertiary" id='present-alert-provedor'>Falco FlexWork Solutions</IonButton>
      <IonLoading trigger="open-loading" message="Dismissing after 3 seconds..." duration={3000} />
      <IonAlert
        trigger="present-alert-user"
        header="Falco Markeplace "
        message={"Falco Marketplace es una plataforma donde los usuarios pueden comprar y vender productos. Para subir productos, los vendedores deben registrarse, crear listados detallados con información y fotos, configurar precios y opciones de envío, gestionar su inventario y promocionar sus productos para aumentar su visibilidad. La plataforma ofrece herramientas para facilitar este proceso y ayudar a los vendedores a alcanzar el éxito en sus ventas en línea."}

        

        className="custom-alert"
        buttons={[
          {
            text: 'No',
            cssClass: 'alert-button-cancel',
           
          },
          {
            text: 'Yes',
            cssClass: 'alert-button-confirm',
            handler: () => {
              window.location.href = "/Falcomarklogin";
            }
          },
        ]}
      ></IonAlert>
      <IonAlert
        trigger="present-alert-provedor"
        header="Falco FlexWork Solutions "
        message={"Falco FlexWork Solutions permite a los profesionales independientes promocionar sus servicios, establecer horarios de disponibilidad, gestionar citas y comunicarse con los clientes. Además, los clientes pueden buscar y contratar fácilmente a profesionales independientes en su área, lo que les permite acceder a una amplia gama de servicios con confianza y comodidad."}
       
        cssClass="custom-alert"
        buttons={[
          {
            text: 'No',
            cssClass: 'alert-button-cancel',
           
              
          },
          {
            text: 'Yes',
            cssClass: 'alert-button-confirm',
           
            handler: () => {
              window.location.href = "/falcoflexworksolutions";
              }
          }
        ]}
      ></IonAlert> <br></br> <br></br>
      </IonContent>
  );
};

export default ExploreContainer;
