// Helpers/filmsData.js

/*======fetch de data sur youtube======*/
// PLAYLIST_ID contient l'ID de la playlist à recupérer
// API_KEY est une clé pour me connecter à ma chaine youtube robertfrancois6@gmail.com
// la réponse est retournée sous la forme d'une promise
const MAX_RESULT = 15;
//const PLAYLIST_ID = "PL4NcjUGQSQzDPlr5oONjnxvcXYoe-0cHs";
const API_KEY = "AIzaSyCHqxzlDUex2UUZQhfn_aZTKCPsnjlQLlE";
export function getData(PLAYLIST_ID) {

    return fetch(`https://www.googleapis.com/youtube/v3/playlistItems?playlistId=${PLAYLIST_ID}&maxResults=${MAX_RESULT}&part=snippet%2CcontentDetails&key=${API_KEY}`).then(
        reponse => reponse.json())
}
