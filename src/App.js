import React from 'react';
import { Routes, Route} from 'react-router-dom';
import SignupForm from './Forms/SignupForm';
import LoginForm from './Forms/LoginForm';
import MovieList from './MovieLists/MoveList';
import PrivateRoute from './Components/PrivateRoute';

function App() {
  return (
    
      <div className="App">
        <Routes>
            <Route path="/" element = {<SignupForm />}/>

            <Route path="/login" element={<LoginForm />}/>
              
            <Route path="/movies" element={
          <PrivateRoute>
            <MovieList />
          </PrivateRoute>
        } />
            </Routes>
      </div>
   
  );
}

export default App;
