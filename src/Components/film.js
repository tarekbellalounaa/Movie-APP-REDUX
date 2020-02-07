import React from 'react'
import {connect} from 'react-redux'
import Stars from './stars'
class Film extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            movie : {
                image: "",
                title: "",
                year: "",
                rating: 4}
        }
        console.log(this.props)
    }
    componentDidMount = () =>{
        this.setState({
            movie:this.props.film.listMovies.filter(el => el.id==this.props.match.params.id)[0]
        })
    }
    render(){
        return (
        <div className="description" >
        <a href="#" className="main4-image">
           <img className="image-style" src={this.state.movie.image} />
           {/* <p className="playbutt"><i class="fas fa-3x fa-play"></i></p> */}
           <p className="image-name">{this.state.movie.title}</p>
           <p className="image-year">{this.state.movie.year}</p>
           <Stars staring={() =>{} } rating={this.state.movie.rating} />
         
          
         </a>{" "}
         
        
         </div>
    )}
}

const mapStateToProps = (state) => {
return{
    film : state.movies
}
}
export default connect(mapStateToProps)(Film) ;