import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';

const SecondPage: React.FC = () => {
   return(
      <IonPage>
         <IonHeader>
         <IonToolbar>
            <IonTitle>Каталог</IonTitle>
         </IonToolbar>
         </IonHeader>
         <IonContent fullscreen>
         secondpage
         </IonContent>
      </IonPage>
   )
}

export default SecondPage