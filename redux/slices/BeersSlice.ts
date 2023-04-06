import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

export const getBeers = createAsyncThunk<Beer[], number, {rejectValue: string}>("BeersSlice/getBooks", 
   async (page, {rejectWithValue}) => {

      try {

         const response = await fetch(`https://api.punkapi.com/v2/beers?page=${page}&per_page=5`)
         let result = await response.json() 
      
         return result  
          
      } 

      catch (error) { 
         
         return rejectWithValue("Пива не будет( Ошибка сервера")

      }

   }
)

export type Beer = {
   id: string
   name: string
   image_url: string
   abv: string
   description: string
}

interface initialState {
   beers: Beer[] | null
   isLoading: boolean
   error: string | null
   selectedBeer: Beer | null
   page: number
}

const initialState: initialState = {
   beers: null,
   isLoading: false,
   error: null,
   selectedBeer: null,
   page: 1
}

export const beerSlice = createSlice({
   name: 'beersSlice',
   initialState,

   reducers: {

      selectBeer: (state, action: PayloadAction<Beer | null>) => {
         state.selectedBeer = action.payload
      },
      
      setPage: (state, action: PayloadAction<number>) => {
         state.page = action.payload
      }

   },

   extraReducers: (builder) => {
      builder.addCase(getBeers.pending, (state) => {
         state.isLoading = true
         state.error = null
      })

      builder.addCase(getBeers.fulfilled, (state, action) => {
         state.isLoading = false
         state.page === 1 ? state.beers = action.payload : state.beers?.push(...action.payload)
      })

      builder.addCase(getBeers.rejected, (state, action) => {
         if (action.payload){
            state.isLoading = false
            state.error = action.payload
         }
      })
   }
})

export const beersSelector = (state: RootState) => state.beersSlice

export const { selectBeer, setPage } = beerSlice.actions

export default beerSlice.reducer