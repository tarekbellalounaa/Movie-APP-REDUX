import React from 'react';
import ReactDOM from 'react-dom';
import StarRatingComponent from 'react-star-rating-component';
 import {connect} from 'react-redux'
import { searchMovieRate } from '../Actions/Actions';
class Stars extends React.Component {
    constructor(props) {
      super(props);
   
      this.state = {
        rating: 1
      };
    }
    onStarClick(nextValue, prevValue, name) {
        this.setState({rating: nextValue});
        this.props.searchRate(nextValue)
      }
     
      render() {
        const { rating } = this.state;
        
        return (                
          <div className="image-star">
            <StarRatingComponent 
              name="rate1" 
              starCount={5}
              value={rating}
              onStarClick={this.onStarClick.bind(this)}
            />
          </div>
        );
      }
    }
    const mapDispatchToProps = dispatch =>{
      return{
        searchRate : rate =>dispatch(searchMovieRate(rate))

      }
    }
    export default connect(null,mapDispatchToProps)(Stars) ;