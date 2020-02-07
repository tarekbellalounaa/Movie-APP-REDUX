import React from "react";
import { addMovie , editMovie} from "../Actions/Actions";
import { Modal, Button } from "react-bootstrap";
import { connect } from "react-redux";
import uuid from "uuid";

class AddModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      title: this.props.editMode ? this.props.movie.title : "",
      image: this.props.editMode ? this.props.movie.image :"",
      year: this.props.editMode ? this.props.movie.year : "",
      rating: this.props.editMode ? this.props.movie.rating :""
    };
    console.log(this.props.movie)
  }
  handleShow = () => {
    this.setState({ show: !this.state.show });
  };
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  // add = e => {
  //   let newmovie = { text: this.state.input, id: uuid(), complete: false };
  //   this.setState({ todos: this.state.todos.concat(newmovie) , input:""});
  // };

  render() {
    return (
      <div>
        {this.props.editMode ? (
          <button  className="boutton" onClick={this.handleShow}> EDIT </button>
        ) : (
          <i
            onClick={this.handleShow}
            class="main4-img far fa-plus-square addbutt fa-4x"
          ></i>
        )}

        <Modal show={this.state.show} onHide={this.handleShow}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div>
              <div>
                <label>Title:</label>
                <input onChange={this.handleChange} value={this.state.title} type="text" name="title" />
              </div>
              <div>
                <label>Image:</label>
                <input onChange={this.handleChange} value={this.state.image} type="text" name="image" />
              </div>
              <div>
                <label>Rating:</label>
                <input onChange={this.handleChange} value={this.state.rating} type="text" name="rating" />
              </div>
              <div>
                <label>Year:</label>
                <input onChange={this.handleChange} value={this.state.year} type="text" name="year" />
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleShow}>
              Close 
            </Button>

            <Button
              onClick={e => {
                this.props.editMode
                  ? this.props.edit({...this.state, id: this.props.movie.id})
                  : this.props.add({...this.state, id: uuid()});
                this.setState({ show: false, title: '', year: '', rating: '', image: '' });
              }}
              variant="primary"
            >
              {this.props.editMode ? "EDIT" : "Add Movie"}
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => {
  return {
    add: newmovie => dispatch(addMovie(newmovie))
    ,edit : movie => dispatch(editMovie(movie))
  };
};

export default connect(null, mapDispatchToProps)(AddModal);
