import React from "react";
import Stars from './stars'
import {connect} from 'react-redux'
import {deleteMovie} from '../Actions/Actions'
import AddModal from './addModal'
import { Route, Link } from "react-router-dom";

function Moviecard(props) {
  return (
    <div >
     <a href="#" className="main4-image">
        <img className="image-style" src={props.movie.image} />
        {/* <p className="playbutt"><i class="fas fa-3x fa-play"></i></p> */}
        <p className="image-name">{props.movie.title}</p>
        <Stars staring={() =>{} } rating={props.movie.rating} />
        <p className="image-year" >{props.movie.year}</p>
        
       
        <div className="buttons">
        <Link to={`/movie/${props.movie.id}`}><button className="boutton">Movie Description</button></Link>
        
        <button className="boutton" onClick={()=>props.remove(props.movie.id)}>Remove</button>
        <AddModal movie={props.movie} editMode={true}/>
        </div>
      </a>{" "}
      
     
      </div>
  );
}

const mapDispatchToProps = dispatch =>{
    return{
        remove : id => dispatch(deleteMovie(id))
    }
}
export default connect(null,mapDispatchToProps)(Moviecard);
