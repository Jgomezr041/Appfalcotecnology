import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/**
 * Ionic Dark Mode
 * -----------------------------------------------------
 * For more info, please see:
 * https://ionicframework.com/docs/theming/dark-mode
 */

/* import '@ionic/react/css/palettes/dark.always.css'; */
/* import '@ionic/react/css/palettes/dark.class.css'; */
import '@ionic/react/css/palettes/dark.system.css';

/* Theme variables */
import './theme/variables.css';
import Falcomarklogin from './pages/Falcomarklogin';
import Tabs from './pages/Tabs';
import Olvidolacuentafm from './pages/olvidolacuentafm';
import falompcreatcuenta from './pages/falompcreatcuenta';
import Falcocr from './pages/Falcows/falcocr';
import profesorw from './pages/Falcows/profesorw';
import Hogar from './pages/Falcows/Hogar';
import Profesionalw from './pages/Falcows/Profesionalw';
import FalcoflexWorkSolutions
 from './pages/Falcows/falcoflexworksolutions';
 import Falcocrw from './pages/Falcows/falcocrw';
 import  Crearcuentafwsc from './pages/Falcows/Creacuentafwc' ;
 import Especialistalogin from './pages/Falcows/especialistalogin';
 import Crearcuentafwork from './pages/Falcows/Crearcuentafwork';
 import Servicios from './pages/Falcows/servicios';
 
 




setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
      <Route path="/Home" component={Home} />
      <Route exact path="/" render={() => <Redirect to="/Home" />} />
       <Route   path="/Falcomarklogin" component={Falcomarklogin}/>
       <Route  path="/app" component={Tabs}/>
       <Route path="/olvidolacuentafm" component={Olvidolacuentafm}/>
        <Route path="/falompcreatcuenta" component={falompcreatcuenta}/>
        <Route path="/falcocr" component={Falcocr}/>
        <Route path="/falcoflexworksolutions" component={FalcoflexWorkSolutions}/>
        <Route path="/Crearcuentafwc" component={Crearcuentafwsc}/>
        <Route path="/especialistalogin" component={Especialistalogin}/>
        <Route path="/Crearcuentafwork" component={Crearcuentafwork}/>
        <Route path="/profesorw" component={profesorw}/>
        <Route path="/Hogar" component={Hogar}/>
        <Route path="/Profesionalw" component={Profesionalw}/>
        <Route path="/servicios" component={Servicios}/>
        <Route path="/falcocrw" component={Falcocrw}/>
        

        
    
       
       
        
       
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
