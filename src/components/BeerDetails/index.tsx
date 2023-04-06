import { IonCardTitle, IonCardSubtitle, IonCardHeader, IonCardContent } from '@ionic/react';
import { useSelector } from "react-redux"
import { useHistory } from "react-router"
import { useEffect } from "react"

import { beersSelector } from "../../../redux/slices/BeersSlice"
import style from './index.module.css'

const BeerDetails: React.FC = () => {
   const { selectedBeer } = useSelector(beersSelector)

   const history = useHistory()

   useEffect(() => {
      !selectedBeer && history.push('/Main')
   },[])

   const isFavorite = true

   if(selectedBeer){
      return(         
         <div className={style.beerDetails}>
            <img className={style.image} src={selectedBeer.image_url} alt="" />
            <IonCardHeader>
               <IonCardTitle>{selectedBeer.name}</IonCardTitle>
               <IonCardSubtitle>{`Крепость ${selectedBeer.abv}%`}</IonCardSubtitle>
            </IonCardHeader>
            <IonCardContent>{selectedBeer.description}</IonCardContent>
            <svg xmlns="http://www.w3.org/2000/svg" className={style.favoriteIcon} viewBox="0 0 512 512">
               <path className={isFavorite && style.favoriteIcon_active} d="M352 48H160a48 48 0 00-48 48v368l144-128 144 128V96a48 48 0 00-48-48z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32"/>
            </svg>
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