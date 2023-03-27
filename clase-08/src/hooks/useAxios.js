import axios from 'axios';
import { useState } from 'react'
import { initialPokemon } from '../data/initialPokemon';

export const useAxios = () => {
  const [data, setData] = useState(initialPokemon);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e, pokemon) => {
    e.preventDefault();

    setData(null);
    setError(false);
    setIsLoading(true);

    try {
      const selectedPokemon = pokemon.toLowerCase().trim();
      const { data } = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${selectedPokemon}`
      );
      console.log('data ==> ',data);
      setData(data);
    } catch (error) {
      setError('Pokemon no encontrado')
    }
    setIsLoading(false);
  }

  return { handleSubmit, data, isLoading, error };
};
