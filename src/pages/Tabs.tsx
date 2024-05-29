import {
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonTabs,
    IonRouterOutlet,
    IonTabBar,
    IonTabButton,
    IonIcon,
    IonLabel,
    } from '@ionic/react'
import { Redirect, Route } from 'react-router';
import Homefm from './Homefm';
import Mensaje from './Mensaje';
import Subir from './Subir'
import Game from './Game';
import Ajustes from './Ajustes';
import ListaProductos from '../components/falcomarketplace/listaproductos';
import Detalleproducto from '../components/falcomarketplace/detallepoducto';




import { home,chatbox,bagAddSharp,gameController,cogSharp } from 'ionicons/icons';



    const Tabs: React. FC = () => {
    return(
   
    <IonPage>
    <IonTabs>
        <IonRouterOutlet>
            <Route exact path="/app/Homefm" component={Homefm}/>
          {/*  <Route exact path="/app/Homefm/details" component={Details}/>*/}
            <Route exact path="/app/Mensaje" component={Mensaje}/>
            <Route exact path="/app/subir" component={Subir}/>
            <Route exact path="/app/Game" component={Game}/>
            <Route exact path="/app/Ajustes" component={Ajustes}/>
            <Route exact path="/app/ListaProductos" component={ListaProductos}/>
            <Route exact path="/app/Detalleproducto/:index" component={Detalleproducto}/>

           
           
  
          
            <Route exact path="/app">
                <Redirect to="/app/Homefm"/>
            </Route>
        </IonRouterOutlet>
        <IonTabBar slot="bottom" color={'tertiary'}>
            <IonTabButton tab="Homefm" href="/app/Homefm">
            <IonIcon icon={home}/>
            <IonLabel>Home</IonLabel>
            </IonTabButton>

            <IonTabButton tab="Mensaje" href="/app/Mensaje">
            <IonIcon icon={chatbox}/>
            <IonLabel>Mensaje</IonLabel>
            </IonTabButton>

            <IonTabButton tab="subir" href="/app/subir">
            <IonIcon icon={bagAddSharp}/>
            <IonLabel>Subir</IonLabel>
            </IonTabButton>

            <IonTabButton tab="Game" href="/app/Game">
            <IonIcon icon={gameController}/>
            <IonLabel>Game</IonLabel>
            </IonTabButton>

            <IonTabButton tab="Ajustes" href="/app/Ajustes">
            <IonIcon icon={cogSharp}/>
            <IonLabel>Ajustes</IonLabel>
            </IonTabButton>
            


            </IonTabBar>

    </IonTabs>

    </IonPage>
    );
    };
    export default Tabs;