import {
  ADD_MOVIE,
  SEARCH_MOVIE_KEYWORD,
  SEARCH_MOVIE_RATE,
  DELETE_MOVIE,
  EDIT_MOVIE
} from "../Actions/types";

import joker from "./joker.jpg";
import underground1 from "./underground .jpg";
import badboys from "./badboys.jpg";
import mission from "./mission.jpg";
import parasite from "./parasite.jpg";
import terminator from "./terminator.jpg";
import blade from "./blade.jpg";
import avengers from "./avengers.jpg";
import uuid from "uuid";

const initialState = {
  listMovies: [
    {id:uuid(),
      image: blade,
      title: "Blade Runner",
      year: "2019",
      rating: 4
    },

    {id:uuid(),
      image: avengers,
      title: "Avengers",
      year: "2019",
      rating: 4
    },

    {id:uuid(),
      image: joker,
      title: "Joker",
      year: "2019",
      rating: 1
    },

    {id:uuid(),
      image: underground1,
      title: "6 Underground",
      year: "2019",
      rating: 3
    },

    {id:uuid(),
      image: mission,
      title: "Mission Impossible",
      year: "2019",
      rating: 4
    },
    {id:uuid(),
      image: terminator,
      title: "The Last Terminator",
      year: "2019",
      rating: 4
    },
    {id:uuid(),
      image: parasite,
      title: "Parasite",
      year: "2019",
      rating: 4
    },

    {id:uuid(),
      image: badboys,
      title: "The Explosion",
      year: "2019",
      rating: 4
    }
  ],
  keyword: "",
  rate: 1
};

const MovieReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MOVIE:
      return {
        ...state,
        listMovies: state.listMovies.concat(action.payload)
      };
    case SEARCH_MOVIE_KEYWORD:
      return {
        ...state,
        keyword : action.payload
      };
    case SEARCH_MOVIE_RATE:
      return {
        ...state,
        rate: action.payload
      };
    case DELETE_MOVIE:
        return{
            ...state,
            listMovies : state.listMovies.filter(el=> el.id!==action.payload)
        }
    case EDIT_MOVIE : 
    return{
        ...state,
        listMovies : state.listMovies.map(el => el.id==action.payload.id?action.payload : el)
    }
    default:
      return state;
  }
};

export default MovieReducer;
