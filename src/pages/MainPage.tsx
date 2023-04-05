import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';

import List from '../components/List';

const MainPage: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Каталог</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <List/>
      </IonContent>
    </IonPage>
  );
};

export default MainPage;
