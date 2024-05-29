import { IonContent, IonHeader, IonImg, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';
  
const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
      <IonToolbar style={{ overflowY: 'auto' }} class='home-toolbar' color={'tertiary'}>
          
          <IonImg src="public/logoft.png
          "  class='customimg' />
          
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
       
        <ExploreContainer />
      </IonContent>
    </IonPage>
  );
};

export default Home;
