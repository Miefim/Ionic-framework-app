import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';

const FavoritesPage: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Избранное</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        favoritepage
      </IonContent>
    </IonPage>
  );
};

export default FavoritesPage;
