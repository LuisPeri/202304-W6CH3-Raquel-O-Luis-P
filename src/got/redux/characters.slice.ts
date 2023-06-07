import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ApiRepository } from "../../core/services/api.repository";
import { AllCharacters } from "../models/characters";

export interface CharacterState {
  warcry: string;
  alive: boolean;
}

const initialState: CharacterState = {
  warcry: "",
  alive: false,
};

export const handleLoadAsync = createAsyncThunk(
  "character/talk",
  async (repo: ApiRepository<AllCharacters>) => {
    const response = await fetch;
  }
);
