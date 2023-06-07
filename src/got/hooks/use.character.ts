import { useCallback, useEffect, useMemo, useState } from "react";
import { AllCharacters } from "../models/characters";
import { ApiRepository } from "../../core/services/api.repository";
import { consoleError } from "../../core/services/errors";
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch, RootState } from "../../core/store/store";

export function useCharacters() {
  const { AllCharacters } = useSelector(
    (state: RootState) => state.AllCharacters
  );
  const dispatch: AppDispatch = useDispatch();

  const characterUrl = "http://localhost:3000/characters/";

  const repo: ApiRepository<AllCharacters> = useMemo(
    () => new ApiRepository<AllCharacters>(characterUrl),
    []
  );

  const handleLoad = useCallback(
    async (character) => {
      const loadedCharacter = await repo.getAll();
      setCharacters(loadedCharacter);
    },
    [repo]
  );

  useEffect(() => {
    handleLoad();
  }, [handleLoad]);

  const handleKill = async (character: AllCharacters) => {
    try {
      const updatedCharacter = await repo.update(character.id, {
        ...character,
        alive: false,
      });
      setCharacters(
        characters.map((item) =>
          item.id === character.id ? updatedCharacter : item
        )
      );
    } catch (error) {
      consoleError(error);
    }
  };

  return {
    characters,
    handleKill,
  };
}
