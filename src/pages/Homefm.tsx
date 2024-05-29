import {
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonButton,
    } from '@ionic/react'
    import  Homefmm from '../components/falcomarketplace/Homefmm'; 
    const Homefm: React. FC = () => {
    return(
   
    <IonPage>
    <IonHeader>
    <IonToolbar color={'tertiary'}>
    <IonTitle>Producto</IonTitle>
    </IonToolbar>
    </IonHeader>
    <IonContent className="ionpadding">
        <br/>
    <Homefmm name=" Bienvenido  a falcomarketplace  sube sus productos favoritos "/>
        
        
            
    </IonContent>

    </IonPage>
    );
    };
    export default Homefm;  