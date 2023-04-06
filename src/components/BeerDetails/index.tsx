import { IonCardTitle, IonCardSubtitle, IonCardHeader, IonCardContent } from '@ionic/react';
import { useSelector } from "react-redux"
import { useHistory } from "react-router"
import { useEffect } from "react"

import FavoriteIcon from '../FavoriteIcon';
import { beersSelector } from "../../../redux/slices/BeersSlice"
import style from './index.module.css'

const BeerDetails: React.FC = () => {

   const { selectedBeer } = useSelector(beersSelector)
   const history = useHistory()
   
   useEffect(() => {
      !selectedBeer && history.push('/Main')
   },[])

   if(selectedBeer){

      return(         
         <div className={style.beerDetails}>
            <img className={style.image} src={selectedBeer.image_url} alt="" />
            <IonCardHeader>
               <IonCardTitle>{selectedBeer.name}</IonCardTitle>
               <IonCardSubtitle>{`Крепость ${selectedBeer.abv}%`}</IonCardSubtitle>
            </IonCardHeader>
            <IonCardContent>{selectedBeer.description}</IonCardContent>
            <FavoriteIcon beer={selectedBeer} />
         </div>
      )
   }
   else{
      return(
         <></>
      )
   }
}

export default BeerDetails