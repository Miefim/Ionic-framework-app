import { IonContent, IonHeader, IonPage, IonToolbar, IonBreadcrumbs, IonBreadcrumb } from '@ionic/react';

import BeerDetails from '../components/BeerDetails'
import { useHistory } from 'react-router-dom'

const SecondPage: React.FC = () => {
   const histoty = useHistory()
   return(
      <IonPage>
         <IonHeader>
         <IonToolbar>
            <IonBreadcrumbs>
               <IonBreadcrumb onClick={() => histoty.push("/Main")}>Каталог</IonBreadcrumb>
               <IonBreadcrumb>Electronics</IonBreadcrumb>
            </IonBreadcrumbs>
         </IonToolbar>
         </IonHeader>
         <IonContent fullscreen>
            <BeerDetails/>
         </IonContent>
      </IonPage>
   )
}

export default SecondPage