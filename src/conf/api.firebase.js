import * as axios from "axios";

export const apiFirebase = axios.create({
  baseURL: 'https://allomovie-1f1d6.firebaseio.com/'
})

export default {
  fetchFavoris: () => apiFirebase.get('favoris.json').then( 
    response =>  response.data ? response.data : [] 
  ),
  saveFavoris: favoris => apiFirebase.put('favoris.json', favoris)
}