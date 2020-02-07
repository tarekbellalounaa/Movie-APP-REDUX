import { ADD_MOVIE, SEARCH_MOVIE_KEYWORD, SEARCH_MOVIE_RATE,DELETE_MOVIE , EDIT_MOVIE} from "./types"

export const addMovie = (newMovie)=>{
    return{
        type:ADD_MOVIE,
        payload: newMovie
        
    }
}

export const searchMovieKeyword = (keyword)=>{
    return{
        type:SEARCH_MOVIE_KEYWORD,
        payload:keyword
    }
}

export const searchMovieRate = (rate)=>{
    return{
        type:SEARCH_MOVIE_RATE,
        payload:rate
    }
}

export const deleteMovie = (id)=>{
    return{
        type:DELETE_MOVIE,
        payload: id
        
    }
}

export const editMovie = (movie)=>{
    return{
        type:EDIT_MOVIE,
        payload: movie
        
    }
}