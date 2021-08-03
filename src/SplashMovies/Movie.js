import React, { useState } from "react";
import Axios from "axios";
import styled from "styled-components";
import MovieComponent from "../SplashMovies/MovieComponent"
import MovieInfoComponent from "../SplashMovies/MovieInfoComponent";
import logo from '../SplashMovies/images/logo.png';
import img from '../SplashMovies/images/netflix.png';
import img1 from '../SplashMovies/images/netflix1.png';

export const API_KEY = "7d9b69dd";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
const AppName = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const Header = styled.div`
  background-color: black;
  color: white;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  padding: 10px;
  font-size: 25px;
  font-weight: bold;
  box-shadow: 0 3px 6px 0 #555;
`;
const SearchBox = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px 10px;
  border-radius: 6px;
  margin-left: 20px;
  width: 50%;
  background-color: white;
`;
const SearchIcon = styled.img`
  width: 50px;
  height: 32px;
  border-radius:10px;
`;
const MovieImage = styled.img`
  width: 48px;
  height: 48px;
  margin: 15px;
  border-radius:70px;
`;
const SearchInput = styled.input`
  color: black;
  font-size: 16px;
  font-weight: bold;
  border: none;
  outline: none;
  margin-left: 15px;
`;
const MovieListContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 30px;
  gap: 25px;
  justify-content: space-evenly;
`;
const Placeholder = styled.img`
  width: 100%;
  height: 100%px;


  border-radius:20px;
 
`;

function Movie() {
  const [searchQuery, updateSearchQuery] = useState("");

  const [movieList, updateMovieList] = useState([]);
  const [selectedMovie, onMovieSelect] = useState();

  const [timeoutId, updateTimeoutId] = useState();

  const fetchData = async (searchString)=>{
    const response = await Axios.get(
      `https://www.omdbapi.com/?s=${searchString}&apikey=${API_KEY}`,
    );
    updateMovieList(response.data.Search);
    console.log(movieList);
  };

  const onTextChange = (e)=>{
    onMovieSelect("");
    clearTimeout(timeoutId);
    updateSearchQuery(e.target.value);
    const timeout = setTimeout(()=>fetchData(e.target.value),500);
    updateTimeoutId(timeout);
  };
  return (
    <Container>
      <Header>
        <AppName>
        
          <MovieImage src={logo} />
          React Movie App
        </AppName>
        <SearchBox>
          <SearchIcon src={img} />
          <SearchInput
            placeholder="Search Movie"
            value={searchQuery}
            onChange={onTextChange}
          />
        </SearchBox>
      </Header>
      {selectedMovie && <MovieInfoComponent selectedMovie={selectedMovie} onMovieSelect={onMovieSelect}/>}
      <MovieListContainer>
        {movieList?.length ? (
          movieList.map((movie,index)=>(
            <MovieComponent
              key={index}
              movie={movie}
              onMovieSelect={onMovieSelect}
            />
          ))
        ) : (
          <Placeholder src={img1} />
        )}
      </MovieListContainer>
    </Container>
  );
}

export default Movie;
