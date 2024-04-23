import { JOKE_URL } from "../constants/constants";

export const processServerResponse = (res) => { 
    if (res.ok) { 
      return res.json(); 
    } 
    return Promise.reject(`Error: ${res.status}`); 
}

export async function getJoke(){
    return fetch(`${JOKE_URL}`, {
        method: 'GET',
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then(processServerResponse)
}