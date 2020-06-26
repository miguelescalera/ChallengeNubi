import axios from "axios";
import { SEARCH_PUBLICATIONS} from "../../constans";

export const SearchPublications=(publications)=>(
  {
    type: SEARCH_PUBLICATIONS,
    publications
  }
)


export const fetchPublications = input => dispatch =>{
    axios.get(`https://api.mercadolibre.com/sites/MLA/search?q=${input}`)
      .then(res => res.data)
      .then(publications => {
        dispatch(SearchPublications(publications.results));
      });
  };


  
