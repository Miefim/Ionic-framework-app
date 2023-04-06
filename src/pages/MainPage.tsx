import { IonContent, IonHeader, IonPage, IonToolbar, IonBreadcrumbs, IonBreadcrumb } from '@ionic/react';

import List from '../components/List';

const MainPage: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonBreadcrumbs>
            <IonBreadcrumb>Каталог</IonBreadcrumb>
          </IonBreadcrumbs>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <List/>
      </IonContent>
    </IonPage>
  );
};

export default MainPage;
