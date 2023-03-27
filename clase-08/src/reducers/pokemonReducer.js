import { initialPokemon } from "../data/initialPokemon";
import { TYPES } from "../types";

export const initialState = {
  data: initialPokemon,
  isLoading: false,
  error: false,
};

export const pokemonReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case TYPES.IS_FETCHING:
      return {
        data: null,
        isLoading: true,
        error: false,
      };
    case TYPES.SUCCESS:

      const obj = {
        ...state,
        isLoading: false,
        data: actions.payload,
      }
      console.log('obj ==> ',obj);
      return {
        ...state,
        isLoading: false,
        data: actions.payload,
      };
    case TYPES.ERROR:
      return {
        ...state,
        isLoading: false,
        error: 'Pokemon no encontrado',
      };

    default:
      return state;
  }
};