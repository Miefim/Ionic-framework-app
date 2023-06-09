import { Route, Redirect, Switch } from 'react-router-dom';
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
import { beer, bookmark } from 'ionicons/icons';
import MainPage from './pages/MainPage';
import SecondPage from './pages/SecondPage';
import FavoritesPage from './pages/FavoritesPage';
import FavoriteSecondPage from './pages/FavoriteSecongPage';

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

const App: React.FC = () => {
  return(
    <IonApp className='app'>
      <IonReactRouter>
        <IonTabs>
          <IonRouterOutlet>
            <Switch>
              <Route exact path="/Main">
                <MainPage/>
              </Route>
              <Route exact path="/Main/:id">
                <SecondPage/>
              </Route>
              <Route exact path="/Favorites">
                <FavoritesPage/>
              </Route>
              <Route exact path="/Favorites/:id">
                <FavoriteSecondPage/>
              </Route>
              <Route exact path="/">
                <Redirect to="/Main" />
              </Route>
            </Switch>
          </IonRouterOutlet>
          <IonTabBar slot="bottom">
            <IonTabButton tab="tab1" href='/Main'>
              <IonIcon aria-hidden="true" icon={beer} />
              <IonLabel>Список</IonLabel>
            </IonTabButton>
            <IonTabButton tab="tab2" href='/Favorites'>
              <IonIcon aria-hidden="true" icon={bookmark}/>
              <IonLabel>Избранное</IonLabel>
            </IonTabButton>
          </IonTabBar>
        </IonTabs>
      </IonReactRouter>
    </IonApp>
  )   
};

export default App;
