import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './layouts/Header/Header.js';
import Row from './components/Row/Row.js';
import RowMyList from './components/RowMyList/RowMyList.js';

import requests from './request';

function App() {
  const [myList, setMyList] = useState(
    JSON.parse(localStorage.getItem('myList')) || []
  );

  useEffect(() => {
    localStorage.setItem('myList', JSON.stringify(myList));
  }, [myList]);

  const addToMyList = (movie) => {
    const isAlreadyAdded = myList.filter((m) => m.id === movie.id);
    if (isAlreadyAdded.length === 0) {
      setMyList([...myList, movie]);
    } else {
      return alert('Is already added!');
    }
  };

  const deleteFromMyList = (movie) => {
    setMyList(myList.filter((m) => m.id !== movie.id));
  };

  return (
    <div className="App">
      <Header />
      <main>
        {myList.length !== 0 && (
          <RowMyList
            title={'My List'}
            myList={myList}
            onDeleteFromMyList={deleteFromMyList}
          ></RowMyList>
        )}
        <Row
          title={'NETFLIX ORIGINALS'}
          fetchUrl={requests.fetchNetflixOriginals}
          isHighRow
        ></Row>
        <Row
          title={'Up Coming'}
          fetchUrl={requests.fetchUpComing}
          onAddToMyList={addToMyList}
        ></Row>
        <Row
          title={'Trending'}
          fetchUrl={requests.fetchTrending}
          onAddToMyList={addToMyList}
        ></Row>
        <Row
          title={'Top Rated'}
          fetchUrl={requests.fetchTopRated}
          onAddToMyList={addToMyList}
        ></Row>
        <Row
          title={'Kids'}
          fetchUrl={requests.fetchPopularKids}
          onAddToMyList={addToMyList}
        ></Row>
        <Row
          title={'Action'}
          fetchUrl={requests.fetchActionMovies}
          onAddToMyList={addToMyList}
        ></Row>
        <Row
          title={'Horror'}
          fetchUrl={requests.fetchHorrorMovies}
          onAddToMyList={addToMyList}
        ></Row>
        <Row
          title={'Romance'}
          fetchUrl={requests.fetchRomanceMovies}
          onAddToMyList={addToMyList}
        ></Row>
        <Row
          title={'Comedy'}
          fetchUrl={requests.fetchComedyMovies}
          onAddToMyList={addToMyList}
        ></Row>
        <Row
          title={'Documantaries'}
          fetchUrl={requests.fetchDocumantaries}
          onAddToMyList={addToMyList}
        ></Row>
      </main>
    </div>
  );
}

export default App;
