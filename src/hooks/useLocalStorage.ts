import { useState, useEffect } from "react"

import { Beer } from "../../redux/slices/BeersSlice"

type LocalStorageHook = () => [Beer[], (obj: Beer) => void, (key: string) => void, (key: string) => Beer | void]

export const useLocalStorage: LocalStorageHook = () => {

   const [change, setChange] = useState<boolean>(false)
   const [localStore, setLocalStore] = useState<Beer[]>([])

   useEffect(() => {
      setLocalStore([])
      for(let key in localStorage){
         if(localStorage.hasOwnProperty(key)){
            if(JSON.parse(localStorage[key]).type === 'beer'){
               setLocalStore(el => [...el, JSON.parse(localStorage[key])])
            }
         } 
      } 
   },[change])

   const set = (obj: Beer) => {
      obj = {...obj, type: 'beer'}
      localStorage.setItem(obj.id, JSON.stringify(obj))
      setChange(!change)
   }

   const remove = (key: string) => {
      localStorage.removeItem(key)
      setChange(!change)
   }

   const get = (key: string) => {
      const response = localStorage.getItem(key)
      return response && JSON.parse(response)
   }

   return [localStore, set, remove, get]

}

