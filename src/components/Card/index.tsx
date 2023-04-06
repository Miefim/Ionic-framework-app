import { IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/react';
import { useHistory } from 'react-router-dom';

import { useAppDispatch } from '../../../redux/store'; 
import { Beer, selectBeer } from '../../../redux/slices/BeersSlice';
import FavoriteIcon from '../FavoriteIcon';
import style from './index.module.css'

type CardProps = {
   beer: Beer
}

const Card: React.FC<CardProps> = ({ beer }) => {

   const dispatch = useAppDispatch()
   const history = useHistory()

   const cardClickHandler = () => {
      history.push(`${history.location.pathname}/${beer.name}`)
      dispatch(selectBeer(beer))
   }

   return(
      <IonCard 
         className={style.card} 
         key={beer.id}
         onClick={cardClickHandler}
      >
         <FavoriteIcon beer={beer}/>
         <img 
            className={style.card__image} 
            alt="Silhouette of mountains" 
            src={beer.image_url} 
         />
         <IonCardHeader>
         <IonCardTitle>{beer.name}</IonCardTitle>
         <IonCardSubtitle>{`Крепость ${beer.abv}%`}</IonCardSubtitle>
         </IonCardHeader>
      </IonCard>
   )
} 

export default Card