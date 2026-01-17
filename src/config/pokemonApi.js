import { apiClient } from "./client";

export const getAllPokemons = async () => {
  const response = await apiClient.get("/api/pokemones/all");
  return response.data;
};
