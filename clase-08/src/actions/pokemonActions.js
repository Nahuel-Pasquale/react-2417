import axios from "axios";
import { TYPES } from "../types";


export const fetchPokemon = (e, pokemon) => async (dispatch) => {
  e.preventDefault();
  dispatch({ type: TYPES.IS_FETCHING })

  try {
    const selectedPokemon = pokemon.toLowerCase().trim();
    const { data } = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${selectedPokemon}`
    );
    console.log('data ==> ',data);
    dispatch({ type: TYPES.SUCCESS, payload: data })
  } catch (error) {
    dispatch({ type: TYPES.ERROR })
  }
};
