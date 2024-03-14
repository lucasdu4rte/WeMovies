import { api } from "."
import { Movie } from "../@types/Movie"

export const getProducts = () => {
  return api.get<Movie[]>('/products').then(res => res.data)
}
