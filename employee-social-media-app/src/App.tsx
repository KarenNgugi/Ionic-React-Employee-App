import { IonApp, IonRouterOutlet, IonSplitPane } from '@ionic/react';
import { Redirect, Route }  from 'react-router-dom';
import Login from './pages/Login';
import People from './pages/People';
import Profile from './pages/Profile';
import Feed from './pages/Feed';
import { IonReactRouter } from '@ionic/react-router';
import './theme/variables.css'



const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonSplitPane contentId='main'>
        <IonRouterOutlet id='main'>
          <Route path='/login' component={Login} exact={true} />
          <Route path='/profile' component={Profile} exact={true} />
          <Route path='/people' component={People} exact={true} />
          <Route path='/feed' component={Feed} exact={true} />
          <Redirect from='/' to='/login' exact />
        </IonRouterOutlet>
      </IonSplitPane>
    </IonReactRouter>
  </IonApp>
);

export default App;