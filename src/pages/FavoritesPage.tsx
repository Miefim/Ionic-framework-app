import { IonContent, IonHeader, IonPage, IonToolbar, IonBreadcrumbs, IonBreadcrumb } from '@ionic/react';

import FavoriteList from '../components/FavoriteList';

const FavoritesPage: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonBreadcrumbs>
            <IonBreadcrumb>Избранное</IonBreadcrumb>
          </IonBreadcrumbs>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <FavoriteList/>
      </IonContent>
    </IonPage>
  );
};

export default FavoritesPage;
