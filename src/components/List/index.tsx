import { IonButton, IonSpinner } from '@ionic/react';
import { useSelector } from 'react-redux/es/exports';
import { useEffect } from 'react';

import Card from '../Card';
import { useAppDispatch } from '../../../redux/store'
import { beersSelector } from '../../../redux/slices/BeersSlice';
import { getBeers, setPage } from '../../../redux/slices/BeersSlice';
import style from './index.module.css'

const List: React.FC = () => {
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
               <Card key={beer.id} beer={beer}/>
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