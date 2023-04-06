import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useHistory } from 'react-router';

const FavoritesPage: React.FC = () => {
  const history = useHistory()

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Избранное</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        favoritepag
      </IonContent>
    </IonPage>
  );
};

export default FavoritesPage;
