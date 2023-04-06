import { IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonButton, IonSpinner } from '@ionic/react';
import { useSelector } from 'react-redux/es/exports';
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom'

import { useAppDispatch } from '../../../redux/store'
import { beersSelector } from '../../../redux/slices/BeersSlice';
import { getBeers, setPage, Beer, selectBeer} from '../../../redux/slices/BeersSlice';
import style from './index.module.css'

const List: React.FC = () => {
   const history = useHistory()
   const dispatch = useAppDispatch()
   const { beers, page, isLoading, error } = useSelector(beersSelector)

   useEffect(() => {
      if(!beers){
         dispatch(getBeers(page))
      }
   },[])

   const moreButtonHandler = () => {
      dispatch(setPage(page + 1))
      dispatch(getBeers(page + 1))
   }

   const cardClickHandler = (beer: Beer) => {
      history.push(`/Main/${beer.id}`)
      dispatch(selectBeer(beer))
   }

   return(
      <>
         {error && <div className={style.message}>{error}</div>}
         {
            isLoading 
            ? 
            <div className={style.message}>
               <IonSpinner name="crescent"/>
            </div>
            : 
            beers?.map(beer => 
               <IonCard 
                  className={style.card} 
                  key={beer.id}
                  onClick={() => cardClickHandler(beer)}
               >
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
         {
            (page < 3 && beers) && 
            <IonButton 
               expand="block"
               onClick={moreButtonHandler}
            >
               {isLoading ? <IonSpinner name="crescent"/> : 'Еще пива'}
            </IonButton>
         }
      </> 
   )
}

export default List