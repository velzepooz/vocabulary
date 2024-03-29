import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact,
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { book } from 'ionicons/icons';
import { Redirect, Route } from 'react-router-dom';

import Tab2 from './pages/Tab2';
import Tab3 from './pages/Tab3';
import Words from './pages/Words';

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

/* Theme variables */
import './theme/variables.css';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route exact path="/words">
            <Words />
          </Route>
          <Route exact path="/tab2">
            <Tab2 />
          </Route>
          <Route path="/tab3">
            <Tab3 />
          </Route>
          <Route exact path="/">
            <Redirect to="/words" />
          </Route>
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="tab1" href="/words">
            <IonIcon color="dark" aria-hidden="true" icon={book} />
            <IonLabel color="dark">Words</IonLabel>
          </IonTabButton>
          {/*<IonTabButton tab="tab2" href="/tab2">*/}
          {/*  <IonIcon aria-hidden="true" icon={ellipse} />*/}
          {/*  <IonLabel>Tab 2</IonLabel>*/}
          {/*</IonTabButton>*/}
          {/*<IonTabButton tab="tab3" href="/tab3">*/}
          {/*  <IonIcon aria-hidden="true" icon={square} />*/}
          {/*  <IonLabel>Tab 3</IonLabel>*/}
          {/*</IonTabButton>*/}
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
