import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from './pages/home/home';
import './App.css';
import Header from './Components/header/Header';
import Movie from './pages/movieDetail/movie';
import MovieList from './Components/Movielist/Movielist';
import Login from './pages/login';
import Signin from './pages/signin'
function App() {
  return (
    <div className="App">
        <Router>
          <Header />
            <Routes>
                <Route index element={<Home/>}></Route>
                <Route path="movie/:id" element={<Movie />}></Route>
                <Route path="movies/:type" element={<MovieList />}></Route>
                <Route path="/login"  element={<Login/>}></Route>
                <Route path="/signin"  element={<Signin/>}></Route>
                <Route path="/*" element={<h1>Error Page</h1>}></Route>
            </Routes>
        </Router>


    </div>
  );
}

export default App;
