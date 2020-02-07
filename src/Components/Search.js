import React from 'react'
import {connect} from 'react-redux'
import { searchMovieKeyword } from "../Actions/Actions"
import Stars from './stars'
class Search extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            text: ''
        }
        
    }
    handleChange = e => {
        this.setState({text: e.target.value})
    }
    //   add = e => {
    //     let newmovie = { text: this.state.input, id: uuid(), complete: false };
    //     this.setState({ todos: this.state.todos.concat(newmovie) , input:""});
    //   };
    

    render(){
        return(
            <div className="footer">
            <input
              onChange={e => this.props.searchMovie(e.target.value)}
              className="input"
              type="text"
              name="input"
              placeholder="Search for a movie"
            />
            <Stars/>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return{
        searchMovie: keyword => dispatch(searchMovieKeyword(keyword))
    }
}
export default connect(null,mapDispatchToProps)(Search);