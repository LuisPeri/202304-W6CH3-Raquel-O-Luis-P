import { RootState, AppThunk } from "../../core/store/store";
import {createSlice} from "@reduxjs/toolkit";


export interface CharacterState {
  talk: string;
}

const initialState: CharacterState {
  talk: '',
}

export const handleLoadAsync = createAsyncThunk(
  "character/"

)
