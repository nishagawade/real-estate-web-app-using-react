import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
  const { data } = await axios.get((url), {
    headers: {
      'x-rapidapi-host': 'bayut.p.rapidapi.com',
      'X-RapidAPI-Key': 'a31bc89eaamsh57ee5753a5dc677p19d5cdjsnecabb0769519',
    },
  });
    
  return data;
}