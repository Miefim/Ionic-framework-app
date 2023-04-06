import { useLocalStorage } from '../../hooks/useLocalStorage'
import Card from '../Card'
import style from './index.module.css'

const FavoriteList: React.FC = () => {

   const [localStore] = useLocalStorage()

   return(
      <>
         {!localStore.length && <div className={style.message}>Нет избранного</div>}
         {
            localStore.map(beer => 
               <Card beer={beer} key={beer.id}/>   
            )
         }
      </>
   )
}

export default FavoriteList