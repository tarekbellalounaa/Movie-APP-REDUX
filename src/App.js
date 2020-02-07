import React from 'react';
import uuid from 'uuid'
import './App.css';
import MovieList from './Components/movieList';
import Search from './Components/Search';
import AddModal from './Components/addModal';

function App() {
  const movie = { 
  }
  return (
    <div className="App">
    <Search/>
    
      <MovieList/>
      <AddModal  editMode={false} />
    </div>
  );
}

export default App;
