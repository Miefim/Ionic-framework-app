import { useLocalStorage } from '../../hooks/useLocalStorage';
import { Beer } from '../../../redux/slices/BeersSlice';
import style from './index.module.css'

type FavoriteIconProps = {
   beer: Beer
}

const FavoriteIcon: React.FC<FavoriteIconProps> = ({ beer }) => {
   
   const [ _, set, remove, get ] = useLocalStorage()
   const isFavorite = get(String(beer.id))
   
   const favoriteIconHandle = (event: React.MouseEvent<SVGSVGElement>) => {
      event.stopPropagation()

      if(!isFavorite){
         set(beer)
      }
      else{
         remove(beer.id) 
      }
   }

   return(
      <svg xmlns="http://www.w3.org/2000/svg" className={style.favoriteIcon} viewBox="0 0 512 512" onClick={favoriteIconHandle}>
         <path className={isFavorite ? style.favoriteIcon_active : ''} d="M352 48H160a48 48 0 00-48 48v368l144-128 144 128V96a48 48 0 00-48-48z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32"/>
      </svg>
   )
}

export default FavoriteIcon