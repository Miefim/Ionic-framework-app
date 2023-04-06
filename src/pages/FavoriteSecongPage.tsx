import { IonContent, IonHeader, IonPage, IonToolbar, IonBreadcrumbs, IonBreadcrumb } from '@ionic/react';
import { useSelector } from 'react-redux';

import { beersSelector } from '../../redux/slices/BeersSlice';
import BeerDetails from '../components/BeerDetails'
import { useHistory } from 'react-router-dom'

const FavoriteSecondPage: React.FC = () => {
   const { selectedBeer } = useSelector(beersSelector)
   const histoty = useHistory()
   return(
      <IonPage>
         <IonHeader>
         <IonToolbar>
            <IonBreadcrumbs>
               <IonBreadcrumb onClick={() => histoty.push("/Favorites")}>Избранное</IonBreadcrumb>
               <IonBreadcrumb>{selectedBeer?.name}</IonBreadcrumb>
            </IonBreadcrumbs>
         </IonToolbar>
         </IonHeader>
         <IonContent fullscreen>
            <BeerDetails/>
         </IonContent>
      </IonPage>
   )
}

export default FavoriteSecondPage